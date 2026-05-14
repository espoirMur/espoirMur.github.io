---
layout: post
title: "Getting started with Flyte on Mac M1"
permalink: getting-started-with-flyte-on-mac-m1
date: 2025-01-15 22:23:57
comments: true
description: "Learn how to set up and run Flyte, an open-source orchestrator for ML pipelines, on a Mac M1 using k3d."
keywords: "Flyte, Mac M1, k3d, Kubernetes, ML pipelines, installation guide"
# was: tech
categories: draft
published: true
---


I have been looking for a pipeline ochestration platform that can run without the struggle of Kubernetes for a year but I have not been successful in my quest.
I remember a few months ago I tried to build and install Kubeflow locally on my Mac M1 but I wasn't successful. It was a hassle for me to run Mubeflow locally and build and deploy my pipeline.
I started looking around for a lightweight pipeline orchestration tool that could run on a low resource environment like my local Macbook and in a production environment with a single machine and less than 8GB of RAM.
This is how I came across flyte. In this post I will take you through my journey of running a pipeline with flyte locally with k3d on a Macbook.

##  What is Flyte

Flyte is an open source orchestrator that makes it easy to build production-grade ML pipelines. It is written in Go and uses Kubernetes under the hood to run pipelines.
In this post I will describe how I installed Flyte on my Macbook M1 and how I got my pipeline running. It was inspired by the [Flyte the hard way tutorial](https://github.com/davidmirror-ops/flyte-the-hard-way/blob/main/docs/on-premises/single-node/002-single-node-onprem-install.md).


##  Prerequisites

This tutorial assumes that you have [docker desktop](https://www.docker.com/products/docker-desktop/) and [Kubernetes](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/) installed on your machine.
It will be divided into two parts, the first will set up the components needed to run flyte on Mac, and the second will build our first workflow using Flyte.
Before we dive into the installation of flyte, we need to make sure that we have a Kubernetes cluster on our local environment.

## Installing K3d on the Mac

  
### What is K3d?

Before we dive into what `K3d` is, let us understand what `K3s` is.
K3s is a production-ready and easy-to-install lightweight version of Kubernetes. It is easy to install and packs Kubernetes and other components into a single, simple launcher. It is one of the recommended ways to run Kubernetes in a low resource environment. K3s is a great tool and runs in a Linux based environment, unfortunately it doesn't support Mac Os and M1 CPU. This is why `k3d` exists. K3d is a wrapper to run `k3s` in Docker. It has the same advantages as `k3s`.


### Installing K3d

Install the environment with the following command:

`wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash`.

Whichever command you use will install `k3d` on your cluster, once you have installed it you are ready to go.
See the following [page](https://k3d.io/stable/#install-script) for more information on how to install `k3d`.

  

### Cluster Creation
Before creating the cluster, I run the following command locally

`mkdir k3data`.

This will create a folder that will be used to store our cluster data.
To create the cluster, run the following command:

` k3d cluster create flyte-cluster -v $PWD/k3data:/data`.

This will create a cluster named `flyte-cluster` and share the mount of the volume. By mounting the volume, it shares all the items we have in the `/data` folder in the cluster with the `k3data` folder on our local machine.

If all goes well, you should be able to see your cluster when you run

`k3d cluster list`

```

NAME SERVERS AGENTS LOADBALANCER

flyte-cluster 1/1 0/0 true

```
With our k3d cluster installed, we can now create the flyte deployment.

  

## Flyte Dependencies

A Flyte cluster depends on two main dependencies:

- *A relational database*:

This stores task status, execution option and all other task metadata.

- *An S3-compatible object store*:

This stores task metadata and data processed by workflows.

## Minio
Minio is an S3-compatible object that is installed using a Kubernetes service.
To install Minio, create a file in the `flyte-k3d` directory and name it `minio.yaml`.


```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: flyte
  labels:
    name: flyte
---
kind: PersistentVolume
apiVersion: v1
metadata:
  name: minio-pv
  namespace: flyte
spec:
  storageClassName: hostpath
  capacity:
    storage: 25Gi
  accessModes:
  - ReadWriteOnce
  hostPath:
    path: /data
  claimRef:
    name: minio-pvc
    namespace: flyte
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: minio-pvc
  namespace: flyte
spec:
  storageClassName: hostpath
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 20Gi
  volumeName: minio-pv
--- 

apiVersion: apps/v1 #  for k8s versions before 1.9.0 use apps/v1beta2  and before 1.8.0 use extensions/v1beta1
kind: Deployment
metadata:
  # This name uniquely identifies the Deployment
  name: minio
  namespace: flyte
  labels:
    app.kubernetes.io/name: minio
spec:
  replicas: 1
  selector:
    matchLabels:
      app.kubernetes.io/name: minio
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        # Label is used as selector in the service.
        app.kubernetes.io/name: minio
    spec:
      containers:
      - name: minio
        # Pulls the default Minio image from Docker Hub
        image: docker.io/bitnami/minio:2024
        imagePullPolicy: IfNotPresent
        env:
        # Minio access key and secret key
          - name: MINIO_ROOT_USER
            value: minio 
          - name: MINIO_ROOT_PASSWORD
            value: miniostorage
          - name: MINIO_DEFAULT_BUCKETS
            value: flyte
          - name: MINIO_DATA_DIR
            value: "/data"
          - name: MINIO_BROWSER_LOGIN_ANIMATION
            value: 'off'
        ports:
        - containerPort: 9000
          name: minio
        - containerPort: 9001
          name: minio-console
        # Mount the volume into the pod
        resources: 
          limits:
            cpu: 200m
            memory: 512Mi
          requests:
            cpu: 10m
            memory: 128Mi
        volumeMounts:
        - name:  minio-storage # must match the volume name, above
          mountPath: "/data"
      volumes:
      - name: minio-storage
        persistentVolumeClaim:
          claimName: minio-pvc
---
apiVersion: v1
kind: Service
metadata:
  name: minio
  namespace: flyte
  labels: 
    app.kubernetes.io/name: minio
spec:
  type: NodePort
  ports:
  - name: minio
    nodePort: 30084
    port: 9000
    protocol: TCP
    targetPort: minio
  - name: minio-console
    nodePort: 30088
    port: 9001
    protocol: TCP
    targetPort: minio-console
  selector: 
    app.kubernetes.io/name: minio
``` 

Running `kubectl apply -f flyte-k3d/minio.yaml` will create the following components:

- A namespace called flyte, which will contain all deployments related to flyte.
- A persistent volume and a persistent volume claim (PVC): These two objects will help us to use storage in our service. Note that for the persistent volume we specified the hostpath to be `/data`, it is the path where we mount our volume in the cluster.
- The minio deployment, which is an object that will define the pod and how we will run our object storage.

In this deployment we have created a volume mount that will use our persistent volume claim and mount the storage to `/data`.

### A note on storage

When creating the cluster, we mounted the `k3data` folder into the `/data` kubernetes cluster. Then with the service and the Pv, we mount the `/data` folder in our cluster to `/data` in our minio pod.

IMAGE ON STORAGE HERE
  

With the volume mount set up this way, if we delete a pod, the pod data will be backed up to the k3data folder. Each time we rebuild the service with the same setup, we will be able to restore the data from our last run.

PS: Note that we have hardcoded the PASSWORD in our environment. This is not good practice for a production environment, we should use secrets for the password.

- The service, will allow an external service to interact with minio. It exposes the two minio ports, the console port on 9001 and the main port on 9000.


  
To test if the installation is running, you can run: `kubectl get pods -n flyte`.

  
### Accessing the Minio Storage


This will show the status of the running minio server.

To access the minio UI, you will need to do a port forwarding to redirect anything running on port 9001. You can do this by running this in a console terminal.


`kubectl -n flyte port-forward --address 127.0.0.1 --address ::1 service/minio 9001:9001`.

  

And in another console terminal, run: 

  

`kubectl -n flyte port-forward --address 127.0.0.1 --address ::1 service/minio 9000:9000`.



With these two commands you can access the minio server in the browser at localhost:9000.
Once we have installed the minio server, we can do the same to install the postgres database.

PUT The image of the server here

## Postgres

It uses similar components to minio server, the pv, the pvc, the service and the deployment.
  

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgresql-pvc
  namespace: flyte
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
---
apiVersion: v1
kind: Service
metadata:
  name: postgres
  namespace: flyte
  labels: 
    app.kubernetes.io/name: postgres
spec:
  type: NodePort
  ports:
  - name: postgres
    port: 5432
    nodePort: 30089
    protocol: TCP
    targetPort: postgres
  selector: 
    app.kubernetes.io/name: postgres
  
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgres
  namespace: flyte
  labels: 
    app.kubernetes.io/name: postgres
spec:
  replicas: 1
  selector:
    matchLabels: 
      app.kubernetes.io/name: postgres
  template:
    metadata:
      labels: 
        app.kubernetes.io/name: postgres
    spec:
      containers:
      - image: "ecr.flyte.org/ubuntu/postgres:13-21.04_beta"
        imagePullPolicy: "IfNotPresent"
        name: postgres
        env:
        - name: POSTGRES_PASSWORD
          value: postgres #Change it to a different value if needed
        - name: POSTGRES_USER
          value: flyte
        - name: POSTGRES_DB
          value: flyte
        ports:
        - containerPort: 5432
          name: postgres
        resources: 
          limits:
            cpu: 1000m
            memory: 512Mi
          requests:
            cpu: 10m
            memory: 128Mi
        volumeMounts:
        - name: postgres-storage
          mountPath: /var/lib/postgresql/data
      volumes:
        - name: postgres-storage
          persistentVolumeClaim:
            claimName: postgresql-pvc

```

This code creates a pod that will run the postgres database instance.

`kubectl apply -f flyte-k3d/postgres.yaml `.


You can use `kubectl get pods -n flyte` to make sure that all pods associated with flyte are running.

  
  

```

NAME READY STATUS RESTARTS AGE

minio-6bfbc8fd5c-rp72r 1/1 Running 0 25h

postgres-7dc7747447-wtgf7 1/1 Running 0 25h

```

Having installed the postgres database and the minio object store, we now need to install Flyte.
  

## Flyte

### Flyte Architecture.


{% include image.html name="flyte-architecture.png" caption="Flyte Architecture" %}
  
A Flyte deployment is made up of several components grouped into 3 categories: The user plane, the control plane and the data plane.

You can learn more about the architecture and those components [here](https://github.com/flyteorg/flyte/blob/master/docs/user_guide/concepts/component_architecture/index.rst).

With this architecture, flyte have made our job easier by giving us two ways to install the flyte. We can install it as a single binary or as core.

Single binary installs all Flyte components in a single pod. This setup is useful for environments with limited resources and a need for quick setup. With core, all components come as standalone pods and sometimes with replicas. For our use case, as you may have guessed, we will install flyte as a single binary.

  

## Installing

  
To avoid storing the DB password in clear text in the values file, we use a feature of the flyte binary chart that allows us to consume pre-created secrets.

`kubectl create -f flyte-k3d/local-secrets.yaml`


### Update the Helm Values

  
  

We will install flyte using flyte binary helm chart. That chart has the placeholder for database and cloud storage configuration.

  

Here is how those values look like:

  

```yaml
configuration:
  database:
    username: flyte
    host: postgres.flyte.svc.cluster.local
    dbname: flyte
  storage:
    type: minio
    metadataContainer: flyte #This is the default bucket created with Minio. Controlled by the MINIO_DEFAULT_BUCKETS env var in the local-flyte-resources.yaml manifest
    userDataContainer: flyte
    provider: s3
    providerConfig:
      s3:
        authType: "accesskey"
        endpoint: "http://minio.flyte.svc.cluster.local:9000"
        accessKey: "minio"
        secretKey: "miniostorage" #If you need to change this parameters, refer to the local-flyte-resources.yaml manifest and adjust the MINIO_ROOT_PASSWORD env var
        disableSSL: "true"
        secure: "false"
        v2Signing: "true"

  inlineSecretRef: flyte-binary-inline-config-secret
  inline:
    plugins:
      k8s:
        inject-finalizer: true
        default-env-vars:
          - FLYTE_AWS_ENDPOINT: "http://minio.flyte.svc.cluster.local:9000"
          - FLYTE_AWS_ACCESS_KEY_ID: "minio"
          - FLYTE_AWS_SECRET_ACCESS_KEY: "miniostorage" #Use the same value as the MINIO_ROOT_PASSWORD

    task_resources:
      defaults:
        cpu: 100m
        memory: 500Mi #change default requested resources and limits to fit your needs
      limits:
        memory: 2Gi

serviceAccount:
  create: true

```

With those values, we can now create our flyte binary pod.

  

`helm install flyte-binary flyteorg/flyte-binary --values flyte-k3d/onprem-flyte-binary-values.yaml -n flyte`

  
  

This will create a flyte binary pod, it comes with two separate services: `A grpc service` and a `http service.`

Once the helm chart is installed we can access it, we can create a two port forwarding session.

One for the http and one for the grpc.

  
  

`kubectl -n flyte port-forward service/flyte-binary-grpc 8089:8089`

  

`kubectl -n flyte port-forward service/flyte-binary-http 8088:8088`

  

The http session gives us access to the flyte console UI. From this UI we can manage and trigger our workflows.

We will submit workflows via the Grpc UI.

  
  


#### Configuring Flyte

  

To set up the Flyte connection, we need to install the flytectl locally and generate a config.

  

`pip install -U flytekit`

  

Will install Flytekit locally.

  
  

Once that is installed you can run:

  

` flytectl config init` to create the config file. Inside that config file add the following:

  
  
  

```

admin:

# For GRPC endpoints you might want to use dns:///flyte.myexample.com

endpoint: localhost:8089

authType: Pkce

insecure: true

logger:

show-source: true

level: 6

```

  

### An update on config

For some reason to make the flyte application to connect to local storage, you need to update your host file with the following files:


`sudo vi /etc/hosts`

  
  

`127.0.0.1 minio.flyte.svc.cluster.local `
