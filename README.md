### Welcome to my personal website

This site is still under construction , come back after few days you will see some coll stuff

Buidl with the following template

Template: github.com/nandomoreirame/end2end

### Todos for new changes

- [x] Fix the code for highlight one line syntax in markdown
- [] Fix the code for the pagination and don't let the page go out of range
- [] When displaying the page site, make sure the post image thumbnail is displayed and they fit the page. [Check this site](https://www.reddit.com/r/webdev/comments/x903jo/how_to_make_my_website_get_these_things/)
- [x] Fix some css in the post that went out of range
- [x] Fix the google analytics issue and make sure the data is reaching googl analytics
- [] Fix image thumbnail when your are sharing the post on social media
- [x] Add stackoverflow icon in the main page.
- [] setup a ci/cd pipeline to directly deploy the site on github pages using github actions
- [] change the code of the highlighting and make sure the look like [this site](https://sergiokopplin.github.io/indigo/markdown-extra-components/#side-by-side)
- [] Bonus : 
    - check if the site is responsive
    - check if you can add both dark and light theme
    - add the image background to the post 
- [] set a note section in the site , where I can post some notes that are not ready to be published into blog posts.  check this site for an idea. https://devopsian.net/notes/
 - [] Fix the covid part 2 post
- [] Check the post about applying for uk universities


### Some usefull command 

## to create a new blog 

`bundle exec rake post title="the title"`


## to build the site

` bundle exec jekyll build`

## to run the site locally

`jekyll serve --watch`


## to check for broken links

`bundle exec htmlproofer ./_site --only-4xx true --disable-external true --ignore-urls  "/localhost/," --ignore_empty_alt false`
