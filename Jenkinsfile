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
                bat 'docker build -t simple-task-app .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3002:3000 simple-task-app'
            }
        }
    }
}