# 🚗 AutoVision 3D – Complete 3D Car View Website (Node.js + Jenkins + AWS EC2 + PM2)

AutoVision 3D is a full-featured 3D car visualization website built using **Node.js** and **Express.js**.  
It allows users to explore 3D cars interactively, customize colors, and experience real-time 360° visualization.  
The entire CI/CD pipeline is automated using **Jenkins**, and the app is deployed on **AWS EC2** using **PM2**.

---

## 🧱 Project Overview

### 🌟 Features
- Interactive 3D Car Visualization in Browser
- Dynamic Car Customization (Color, Wheels, Lights)
- Responsive Design using HTML + CSS + JS
- Secure Node.js Express Backend
- CI/CD with Jenkins from GitHub → AWS EC2
- Process Management using PM2
- Zero Downtime Deployment
- Simple and Scalable Infrastructure

---

## 🗂️ Folder Structure

```
AutoVision-3D/
├── app.js                 # Main Node.js App (Backend + Frontend)
├── app.css                # Styling for 3D Frontend
├── ecosystem.config.js    # PM2 Configuration File
├── package.json           # Project Metadata & Dependencies
├── jenkinsfile            # Jenkins Pipeline Configuration
└── public/                # Optional Static Files
```

---

## ⚙️ Step-by-Step Project Flow

### 1️⃣ Local Setup and Development
```bash
# Clone the repo
git clone https://github.com/<your-username>/<repo-name>.git

# Go inside the project
cd AutoVision-3D

# Install dependencies
npm install

# Run locally
npm start

# Visit in browser
http://localhost:3000
```

---

### 2️⃣ Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial AutoVision 3D Commit"
git branch -M master
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin master
```

---

### 3️⃣ Launch AWS EC2 Instances
- **Instance 1:** Jenkins Server (for CI/CD)
- **Instance 2:** Node.js Application Server

---

### 4️⃣ Setup Jenkins Server
```bash
sudo hostnamectl hostname jenkins
sudo hostname jenkins
exit
sudo apt update
sudo apt install openjdk-11-jdk -y
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install jenkins -y
sudo systemctl enable jenkins
sudo systemctl start jenkins
```

Access Jenkins: `http://<jenkins-server-ip>:8080`

**Install Plugins:**
- Git Plugin  
- Pipeline Plugin  
- NodeJS Plugin

**Add Jenkins Credentials:**
- Go to: *Manage Jenkins → Credentials → Global → Add Credentials*  
- Add your EC2 private key under ID: `jenkinskey`

---

### 5️⃣ Setup Node.js App Server
```bash
sudo hostnamectl hostname nodejs
sudo hostname nodejs
exit
sudo apt update
sudo apt install nodejs npm -y
sudo npm install -g pm2
```

Once Jenkins deploys code, PM2 will manage your app automatically.

---

### 6️⃣ Jenkinsfile (Pipeline Configuration)
```groovy
pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git branch: 'master', url: 'https://github.com/<your-username>/<repo>.git'
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Deploy') {
      steps {
        sshagent(['jenkinskey']) {
          sh '''
          ssh -o StrictHostKeyChecking=no ubuntu@<EC2-IP> "
            cd /home/ubuntu/AutoVision-3D &&
            git pull origin master &&
            npm install &&
            pm2 restart ecosystem.config.js || pm2 start ecosystem.config.js
          "
          '''
        }
      }
    }
  }
}
```

---

### 7️⃣ PM2 Commands for Deployment
```bash
pm2 start ecosystem.config.js
pm2 status
pm2 restart all
pm2 logs
pm2 save
```

**ecosystem.config.js**
```js
module.exports = {
  apps: [{
    name: 'autovision-3d-app',
    script: './app.js',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: { NODE_ENV: 'development', PORT: 3000 },
    env_production: { NODE_ENV: 'production', PORT: 3000 }
  }]
};
```

---

## ✅ Verify Deployment

| Check | Command | Expected Output |
|--------|----------|----------------|
| PM2 Process | `pm2 list` | App Running |
| App Health | `curl http://localhost:3000/api/health` | Status OK |
| Jenkins Build | Dashboard | Success ✔ |
| Git Repo | `git log` | Shows Recent Commit |

---

## 🛡️ Security & Optimization

- **Helmet** → Secure HTTP Headers  
- **CORS** → Cross-Origin Security  
- **Compression** → Performance Boost  
- **PM2 Logs Rotation** → Monitoring Stability  

---

## 🧠 Tools Used

| Purpose | Tool |
|----------|------|
| Backend | Node.js + Express |
| CI/CD | Jenkins |
| Hosting | AWS EC2 |
| Process Management | PM2 |
| Version Control | Git + GitHub |
| Monitoring | Jenkins Console + PM2 |

---

## 🚀 Final Result

AutoVision 3D website is now live on your EC2 Node.js instance.  
It automatically updates whenever you push code to your GitHub master branch — thanks to Jenkins CI/CD.

Visit:
```
http://<ec2-public-ip>:3000
```

---
---

## 🏁 Frontend – AutoVision 3D Interface

Explore the elegant, immersive **3D interface** of AutoVision.  
It features **360° car rotation**, **color customization**, and **model selection**.

| 🖼️ Screenshot | Description |
|---------------|-------------|
| ![AutoVision Home](./img/Screenshot%202025-11-07%20235848.png) | **Homepage** – Interactive 3D car view with explore and customize options. |
| ![Customize Car](./img/Screenshot%202025-11-07%20235902.png) | **Customization Page** – Select colors and personalize your dream car. |

---
## 💻 Development & Repository

All development and version control handled via **VS Code** and **GitHub**.

| 💻 Screenshot | Description |
|---------------|-------------|
| ![GitHub Repo](./img/Screenshot%202025-11-07%20235738.png) | **GitHub Repository** – Complete project with CI/CD Jenkinsfile. |
| ![VS Code Environment](./img/Screenshot%202025-11-07%20235715.png) | **VS Code Workspace** – Active development setup and Git commits. |

---
## ⚙️ Jenkins CI/CD Pipeline

Automated build and deployment pipeline implemented via Jenkins on AWS EC2.  
Pipeline stages include:  
1. **Code Checkout** from GitHub  
2. **Build & Dependency Installation**  
3. **PM2 Deployment** on EC2  

| 🧩 Screenshot | Description |
|---------------|-------------|
| ![Jenkins Credentials](./img/Screenshot%202025-11-07%20235835.png) | **Credentials Setup** – SSH key added for GitHub & EC2 authentication. |
| ![Jenkins Build Dashboard](./img/Screenshot%202025-11-07%20235814.png) | **Build Dashboard** – Jenkins pipeline overview with successful builds. |
| ![Jenkins Console Output](./img/Screenshot%202025-11-07%20235801.png) | **Console Output** – Successful build and deployment logs. |

---

## 👨‍💻 Author

**Mahesh Shelke**  
AWS & DevOps Engineer | Full Stack Developer  
📧 Email: mahesh.devops@example.com  
🌐 GitHub: [@MaheshShelke05](https://github.com/MaheshShelke05)

---

### 🏁 Conclusion
You have successfully implemented a **complete CI/CD pipeline** using Jenkins and deployed a **3D Node.js web app** on AWS EC2 with PM2.  
Your app automatically rebuilds on every GitHub push — providing a fully automated and scalable environment.  

> “AutoVision 3D – Experience Cars in 360°.”