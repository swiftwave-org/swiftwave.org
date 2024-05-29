---
id: development_setup
title: 👨‍💻 Development Setup
sidebar_position: 7
---

Let's get started with SwiftWave Development Setup!

## 📦 Pre-requisites
1. You need a linux system for development of SwiftWave.
2. Install curl, git, unzip and tar utilities.
    ```bash
    # For Debian/Ubuntu based distros:
    sudo apt install curl git unzip tar make

    # For Fedora based distros:
    sudo dnf install curl git unzip tar make
    ```
3. Install docker (Skip this step if you already have docker installed)
    ```bash
    curl -fsSL https://get.docker.com | sudo bash -
    ```
4. Install Golang by following [this guide](https://golang.org/doc/install)
5. Install NodeJS by following [this guide](https://deb.nodesource.com/)
6. You are all set! 🎉

## 📥 Local Installation
1. Fork and clone SwiftWave repository
    ```bash
    git clone git@github.com:<your_username>/swiftwave.git --recursive
    ```
2. Build SwiftWave & Dashboard
   ```bash
   make
   ```
3. Generate the SwiftWave configuration file
   ```bash
   sudo ./swiftwave init
   ```
    :::tip
    
    Use `localhost` as the domain name for management node.

    :::
4.  Enable development mode
    ```bash
    sudo ./swiftwave config -e vim
    ```
    Change `dev_mode` to `true` in the configuration file and save it.
5.  Start SwiftWave
    ```bash
    sudo ./swiftwave start
    ```
    :::warning

    Use a real email address in the setup process, else swiftwave may face failure to register account in Let's Encrypt.

    :::
6.  🎉 Congratulations! You have successfully setup SwiftWave for local development
7.  You can now access SwiftWave at `http://localhost:3333`

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