pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/pokemon-uc/task-tracker.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t simple-task-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 simple-task-app'
            }
        }
    }
}