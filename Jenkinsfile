pipeline {
    agent { 
        docker { 
            image 'node:15.10.0-buster' 
            // args '-u root:root'
        } 
    }
    stages {
        stage('set up') {
            steps {
                sh 'npm --version'
                sh 'sudo chown -R 129:137 "/.npm"'
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
                sh 'npm run sonar'
            }
        }
    }
}