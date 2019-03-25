FROM alpine:3.8 as base

# Install base dependencies
RUN apk update && apk add --no-cache \
        ca-certificates \
        curl \
        git \
        bash \
        nodejs \
        nodejs-npm

WORKDIR /cache/
COPY package.json .
RUN npm prune
RUN npm install --save
RUN git clone https://github.com/pujithaz/infytest.git infytest

FROM jenkinsci/jenkins:alpine as jenkins
USER root
RUN apk update && apk add nodejs nodejs-npm
RUN npm install jest --global
WORKDIR /root/
COPY --from=base /cache/ .
WORKDIR /root/infytest/src/
#RUN npm install --save
ARG APP_VERSION