pipeline {
    // agent { 
    //     docker { 
    //         image 'node:15.10.0-buster' 
    //         args '-u root:root'
    //     } 
    // }
    agent any
    stages {
        stage('set up') {
            steps {
                sh 'npm --version'
                sh 'npm ci'
            }
        }

        stage('test') {
            steps {
                sh 'npm run test'
            }
        }

        stage('sonar') {
            steps {
                withSonarQubeEnv('') {
                    sh 'npm run sonar'
                }
            }
        }
    }
}