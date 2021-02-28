pipeline {
    agent { docker { image 'node:14-alpine' } }
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