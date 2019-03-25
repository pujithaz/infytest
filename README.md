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
docker run -d -p 49001:8080 -t infytest
~~~


Run nodejs app on 3000 (from cmd)
--------------------------------
~~~
docker run -d -p 3000:3000 -e APP_VERSION="${APP_VERSION}" -t infytest node app.js --app_version="${APP_VERSION}" --git_hash=$(git rev-parse --short HEAD) &
~~~