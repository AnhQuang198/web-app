#!/usr/bin/env groovy

node {
    try {
        project = "client-app"
        dockerRepo = "leequang198"
        dockerFile = "Dockerfile"
        imageName = "${dockerRepo}/${project}"
        buildNumber = "${env.BUILD_NUMBER}"

        stage('checkout code') {
            checkout scm
            sh "git checkout ${env.BRANCH_NAME} && git reset --hard origin/${env.BRANCH_NAME}"
        }

        stage('build') {
            sh "docker build -t ${imageName}:${env.BRANCH_NAME}-build -f ./Dockerfile ."
        }

        switch (env.BRANCH_NAME) {
            case 'develop':
                stage('run-dev') {
                    sh '''
                        cd /
                        cd home
                        cd client
                        cd dev
                        ls
                        docker-compose up -d
                        pwd
                    '''
                }
                break
            case 'master':
                stage('run-prod') {
                    steps {
                        sh '''
                            cd /
                            cd home
                            cd client
                            cd prod
                            docker-compose up -d
                        '''
                    }
                }
                break
        }

    } catch (e) {
        currentBuild.result = "FAILED"
        throw e
    }
}