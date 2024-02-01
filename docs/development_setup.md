---
id: development_setup
title: 👨‍💻 Development Setup
sidebar_position: 7
---

Let's get started with SwiftWave Development Setup!

## 📦 Pre-requisites
1. A Virtual Server with Debian, Ubuntu, Fedora OS or their derivatives installed.
2. Virtual Server should have at least 1GB RAM and 1vCPU.
3. Install curl, git, unzip and tar utilities.
    ```bash
    # For Debian/Ubuntu based distros:
    sudo apt install curl git unzip tar

    # For Fedora based distros:
    sudo dnf install curl git unzip tar
    ```
4. Install docker (Skip this step if you already have docker installed)
    ```bash
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    ```
    > 📌 Note: As RHEL doesn't support docker, SwiftWave doesn't support RHEL based distros.
5. Install Golang by following [this guide](https://golang.org/doc/install)
6. Install NodeJS by following [this guide](https://deb.nodesource.com/)
7. You are all set! 🎉

## 📥 Local Installation
1. Fork and clone SwiftWave repository
    ```bash
    git clone git@github.com:<your_username>/swiftwave.git --recursive
    ```
2. Build SwiftWave dashboard
   ```bash
   npm install
   npm run build:dashboard
   ```
3. Initialize Docker Swarm
    ```bash
    sudo docker swarm init
    ```
4. Move to sudo user
    ```bash
    sudo su
    ```
5. Set the go module path, as sudo user you may not have access to your user's go module path.
    ```bash
    export PATH=$PATH:/usr/local/go/bin
    ```
6. Initialize SwiftWave configuration. Run following command and provide required information.
    ```bash
    go run . init
    ```
    > Note: If it ask for address for SwiftWave / Current Node, put **0.0.0.0** or **127.0.0.1** or **Local IP of your system**.
7. Prepare Environment for SwiftWave
    ```bash
    go run . setup
    ```
8.  Run Local Postgres Database
    ```bash
    go run . postgres start
    ```
9.  Migrate Database Tables
    ```bash
    go run . db-migrate
    ```
10.  Disable TLS for SwiftWave Development Setup
     - Open swiftwave config file
       ```bash
       go run . config -e nano
       ```
     - Set `service.use_tls` to `false`
     - Save and exit
11.  Start HaProxy Service
    ```bash
    go run . haproxy start
    ```
12.  Create a new admin user with username **admin** and password also **admin**
    ```bash
    go run . create-user -u admin -p admin
    ```
13. Start SwiftWave
    ```bash
    go run . start --dev
    ```
14. 🎉 Congratulations! You have successfully setup SwiftWave for local development
15. You can now access SwiftWave at `http://localhost:3333`

## Access GraphQL Playground
1. Use Login Endpoint for generating a JWT Token.
   You can also generate the token using curl command
    ```bash
   curl --location 'http://localhost:3333/auth/login' \
   --form 'username="admin"' \
   --form 'password="admin"'
   ```
2. Go to `http://localhost:3333/playground`
3. In headers section, add authorization details
   ```json
   {
       "Authorization": "Bearer <token_retrieved_from_api>"
   }
   ```
4. Now, click on `refresh` icon on playground to get schema details and avail the auto-complete feature
5. You can now start querying and mutating data
6. 🎉 Congratulations! You have successfully setup SwiftWave for local development