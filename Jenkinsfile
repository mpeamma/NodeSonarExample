pipeline {
    agent { docker { image 'node:15.10.0-buster' } }
    stages {
        stage('set up') {
            steps {
                sh 'npm --version'
                sh 'npm install'
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