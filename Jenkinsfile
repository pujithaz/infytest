#!/bin/groovy
pipeline {
agent {
        node {
            label "master"
        }
    }
    environment {
        APP_VERSION = "1.0.${env.BUILD_NUMBER}"
    }
  stages {
    stage('Prepare') {
      steps {
        script {
          sh 'kill -9 $(ps -eaf|grep app.js | grep -v grep | awk \'{print $1}\') || echo \"No app running\"'
          sh 'npm install'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          sh 'npm run test-jenkins'
        }
      }
      post {
        always {
          junit 'report.xml'
        }
      }
    }
    stage('Deploy') {
      steps {
      dir("src"){
        script {
          sh 'JENKINS_NODE_COOKIE=dontKillMe node app.js --app_version="${APP_VERSION}" --git_hash=$(git rev-parse --short HEAD) &'
        }
       }
      }
    }
  }
}