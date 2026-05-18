pipeline {
    agent any

    environment {
        SCANNER_HOME = tool 'SonarScanner'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/pokemon-uc/task-tracker.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQubeServer') {
                    bat "%SCANNER_HOME%\\bin\\sonar-scanner.bat"
                }
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

        stage('Quality Gate') {
            steps {
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}