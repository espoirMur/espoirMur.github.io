---
layout: post
title: "Supercharge Postgres Vector Search: Cross Join Lateral For Batch Vector Search!"
permalink: supercharge-postgres-vector-search-cross-join-lateral-for-batch-vector-search
date: 2025-09-15
comments: true
description: "This guide reveals how to use a CROSS JOIN LATERAL query to send multiple embedding vectors at once. Batch Search with PgVector. We break down the SQL magic, compare it to the UNION ALL approach, and show you how to improve the efficiency of your PGVector searches for RAG applications."
keywords: ""
categories:
tags: postgres, pgvector,vectorsearch,sql,rag

published: true
is_draft: false
---


Last week I was working on a project, and I was looking for a way to query Postgres to do vector search in  a batch way to send multiple embedding vectors at once to the database and retrieve the data without the need for a for-loop.

I started googling online and found an old answer on StackOverflow using a query with `UNION`s. When I asked Deepseek how to improve the query, it recommended I use a `CROSS JOIN LATERAL`, which seemed to be faster than a normal union.

Then I started digging a little bit deeper to understand what cross lateral joins are. Unfortunately, I couldn't find any blog online that was explaining them in the context of a vector database, which is why I decided to put this guide together.

## The problem
Let's say you have a list of questions and you need to perform an embedding search for all of them at once.
This can happen when you need to evaluate how an embedding model performs on a set of queries. For each query, you want to retrieve the top 10 relevant chunks.
In this post, we will work with a document table of this form for simplicity:

```
document
--
doc_id: int
embedding: vector(1024)
content: Text
```

### Recap on Similarity Search

You have a query text that has been embedded into a vector using an embedding model. You want to query your vector database to retrieve similar text to your query using the embedding and cosine similarity as a distance measure.

Here is how you will perform the query using Postgres with the pgvector extension installed. You would perform something along these lines:


```
SELECT (1 - ("embedding" <=> %(query_embedding)s::vector)) as similarity, "content", "url" FROM "documents" ORDER BY similarity desc LIMIT 5
```
If you have been working with RAG, that query is familiar to you.

## Different Approaches to Solve the Problem:


### Similarity search with multiple queries

Assuming now that you have 100 or 1000 queries that you want to send to the database and for each query you want to retrieve the corresponding documents.

A naive Python code would look like this:


```
query = """SELECT (1 - ("embedding" <=> %({query_embedding})s::vector)) as similarity, "content", "url" FROM "documents" ORDER BY similarity desc LIMIT 5"""

for question_embedding in embeddings:
    db_client.execute(query, embedding=question_embedding)
```


With this approach, you can see for each question you will be performing a round trip to the database and retrieve the results. If your database is hosted in a remote server that round trip can be costly for the performance of your application.

That can be inefficient when you are dealing with hundreds or thousands of vectors. This is why I started thinking that there could be a better way to do this.

### First Improvement: The UNION ALL Approach


One way that came to my mind was to use the union query. With the union query, our query will look like this.
```sql
(SELECT (1 - ("embedding" <=> %({query_embedding_1})s::vector)) as similarity, "content", "url" FROM "documents" ORDER BY similarity desc LIMIT 5)
UNION ALL
(SELECT (1 - ("embedding" <=> %({query_embedding_2})s::vector)) as similarity, "content", "url" FROM "documents" ORDER BY similarity desc LIMIT 5)
.
.
.
...
UNION ALL
(SELECT (1 - ("embedding" <=> %({query_embedding_n})s::vector)) as similarity, "content", "url" FROM "documents" ORDER BY similarity desc LIMIT 5)
```
A Python code to generate that query would be something like this:
```python
base_query = """SELECT (1 - ("embedding" <=> %(query_embedding_{index})s::vector)) as similarity, "content", "url" FROM "documents" ORDER BY similarity desc LIMIT 5"""
all_queries = []
for i in range(embeddings.shape[0]):
    formatted_query = base_query.format(index=i)
    all_queries.append(formatted_query)

final_query = " UNION ALL ".join(all_queries)

# then you execute using
db.execute(final_query, embeddings.tolist())
```


This will give better performance than the previous one, but there is still room for improvement. And that is when the cross lateral join comes in.
###  The Superior Solution: Cross Join Lateral

#### **Cross lateral join**
Before diving deep into the SQL aspect of cross lateral join, let's recap a concept from high school algebra.

#### **Cartesian Product**
The Cartesian product of two sets $$A$$ and $$B$$, written $$A \times B$$, is the set of all ordered pairs in which the first element belongs to $$A$$ and the second belongs to $$B$$:
$$
A \times B = \{(a, b) \mid a \in A \text{ and } b \in B\}
$$
Let's assume we have $$A = \{1, 2, 3\}$ and $B = \{A, B, C\}$$, the Cartesian product of $$A$$ and $$B$$ will be the following: $$A \times B = \{(1,A), (1, B), (1,C), (2,A), (2, B), (2,C), (3,A), (3, B), (3,C)\}$$.

We can also note that the cardinality of $$A \times B =  |A| \times |B|$$. 
In our example, we will have the cardinality equal to nine.

#### **From Cartesian Product to Cross Join**
With the Cartesian product in mind, let's define the cross join:
>The CROSS JOIN is used to generate a paired combination of each row of the first table with each row of the second table.

Here is an example of two tables and the resulting table from a cross join:

{% include image.html name="cross-join.png" caption=" Cross Join in SQL"%}
It was taken from this [site](https://www.sqlshack.com/sql-cross-join-with-examples/).

Here is the syntax of the cross join. Given two tables `Meals` and `Drinks`:
```
SELECT Meals.name, Drinks.Name FROM Meals
CROSS JOIN Drinks
```

#### On To Cross Lateral Join
What if we found a way to do better? As we have a list of vectors, how can we run the select against each vector in the list of vectors? This is where cross lateral join comes in handy.

In the Postgres documentation, here is what is said about that query:
>LATERAL:


>The LATERAL key word can precede a sub-SELECT FROM item. This allows the sub-SELECT to refer to columns of FROM items that appear before it in the FROM list. (Without LATERAL, each sub-SELECT is evaluated independently and so cannot cross-reference any other FROM item.)

That is a little bit convoluted and hard to explain. 

Let's see how it works.

##### _The Query:_

```sql
SELECT
  results.*,
  vector_table.idx as query_index
FROM
  unnest(
    ARRAY[ %(vector_0)s::vector, %(vector_1)s::vector, %(vector_2)s::vector ]
  ) WITH ORDINALITY AS vector_table(query_vector, idx)
CROSS JOIN LATERAL (
    SELECT
      (1 - ("embedding" <=> vector_table.query_vector)) as similarity,
      "content",
      "url"
    FROM
      "documents"
    ORDER BY
      similarity desc
    LIMIT 5
  ) AS results
ORDER BY vector_table.idx, results.similarity DESC
```

##### _Deconstructing the Magic Query_

Let's now dissect the query and see how it works. It has two parts.

Let's look at the **first one**. The left part:
```sql
  unnest(
    ARRAY[ %(vector_0)s::vector, %(vector_1)s::vector, %(vector_2)s::vector ]
  ) WITH ORDINALITY AS vector_table(query_vector, idx)
```
This part is the temporary table creation where a table is created and has each embedding vector as a row. So our table will have:

```
1, vector_0
2, vector_1
3, vector_2
...
n, vector_n
```

The `ordinality` keyword adds an index starting from 1 to each row in the returned value of the first part.

**Then the second** part is a cross join. The table on the left is cross-joined with the table on the right. The LATERAL keyword helps to use the left table in the cross join clause. *Without it, each sub-SELECT is evaluated independently and so cannot cross-reference any other FROM item.*

That is why in the second item we were able to reference the results of the first select as `vector_table.query_vector`.


The subquery is:
```sql
    SELECT
      (1 - ("embedding" <=> vector_table.query_vector)) as similarity,
      "content",
      "url"
    FROM
      "documents"
    ORDER BY
      similarity desc
    LIMIT 5
```
The documentation explains the execution perfectly:
>When a FROM item contains LATERAL cross-references, evaluation proceeds as follows: for each row of the FROM item providing the cross-referenced column(s)... the LATERAL item is evaluated using that row or row set's values of the columns. The resulting row(s) are joined as usual with the rows they were computed from. This is repeated for each row or set of rows from the column source table(s).

### Benchmarks
Let us benchmark the 3 approaches and find out which one is the fastest.

We are running the query in a small setting where we have around 10k documents in our database each document has string content and embedding vector of size `1024`. The database table is indexed on the embedding column using a `hnsw` index. The database and the code where both running on my local machine a Mac M1 with 16GB of CPU.

Later I will benchmark the three queries in a setting where the code run on a different machine than the database and I will update this section with the performance of the code in those settings.

After benchmarking and performing an analyzis on the answer with my table I found a small gain of performance on a small table.  

In the upcoming version of this blog I replicate the setting in a table of millions documents and vector and report the performance.


## Conclusion


In this post we explained how cross lateral join works with PGVectors. In the next post I will run a benchmark of the cross lateral and compare it with. a normal for loop for batch vector search.



