Infy Test Project
==================================

Description
-----------
This directory contains source code to build and deploy a simple nodejs app on docker that display the application version, git hash and description at /healthcheck endpoint.


Build Image
------------

~~~
docker build  -t infytest .
~~~


Run jenkins instance on 49001
-----------------------------

~~~
docker run -d -p 49001:8080 -p 3000:3000 -t infytest
~~~


Run nodejs app on jenkins
--------------------------------
~~~
Configure Jenkins pipeline to run the Jenkinsfile located in the repo and build the pipeline.
Once the pipeline is successfully run the application can be accessed from http://localhost:3000/healthcheck
~~~
