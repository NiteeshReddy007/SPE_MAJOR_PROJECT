pipeline{
    agent any
    environment{
        MONGO_URI = "mongodb+srv://rahulkumarpuram:Rahul123456@cluster0.pswqiab.mongodb.net/"
    }
    stages{
        stage('Clone Git'){
            steps{
                git branch:'main' ,url: 'https://github.com/NiteeshReddy007/SPE_MAJOR_PROJECT.git'
            }
        }
        stage('Building frontend and tests'){
            steps{
                dir('frontend'){
                    sh "npm install && npm test"
                }
            }
        }
        stage('Building backend and tests'){
            steps{
                dir('backend'){
                    sh "npm install && npm test"
                }
            }
        }
        stage('Build Frontend Image') {
            steps{
                dir('frontend'){
                    script{
                        frontend_image = docker.build "rahulpuram123/frontend:latest"
                    }
                }
            }
        }
         stage('Build Backend Image') {
             steps{
                dir('backend'){
                    script{
                        backend_image = docker.build "rahulpuram123/backend:latest"
                    }
                }
            }
        }
        stage('Stage 4: Push docker image to hub') {
            steps{
                script{
                    docker.withRegistry('', 'docker'){
                        frontend_image.push()
                        backend_image.push()
                    }
                }
            }
        }
        stage('Stage 5: Clean docker images'){
            steps{
                script{
                    sh 'docker container prune -f'
                    sh 'docker image prune -f'
                }
            }
        }
        stage('Step 6: Ansible Deployment'){
            steps{
                ansiblePlaybook becomeUser: null,
                colorized: true,
                credentialsId: 'localhost',
                disableHostKeyChecking: true,
                installation: 'Ansible',
                inventory: 'inventory',
                playbook: 'deploy.yml',
                sudoUser: null
            }
        }
    }
}