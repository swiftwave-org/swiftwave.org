---
id: getting_started
title: 🚀 Getting Started
sidebar_position: 4
---

Let's get started with SwiftWave!
Let's first install SwiftWave on your server. Because without SwiftWave, you can't deploy your applications. 😅

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
5. You are all set! 🎉

## 📥 Installation
1. SSH into your server.

2. Download SwiftWave binary
   - For **AMD64** Architecture
   ```bash
    curl -L https://github.com/swiftwave-org/swiftwave/releases/download/1.0.0/swiftwave-1.0.0-linux-amd64.tar.gz -o swiftwave.tar.gz
   ```
   - For **ARM64** Architecture
   ```bash
    curl -L https://github.com/swiftwave-org/swiftwave/releases/download/1.0.0/swiftwave-1.0.0-linux-arm64.tar.gz -o swiftwave.tar.gz
   ```
   - For **386** Architecture
   ```bash
    curl -L https://github.com/swiftwave-org/swiftwave/releases/download/1.0.0/swiftwave-1.0.0-linux-386.tar.gz -o swiftwave.tar.gz
   ```
3. Extract the gzip archive
    ```bash
    tar -xzf swiftwave.tar.gz
    ```
4. Make swiftwave binary executable
    ```bash
    chmod +x swiftwave
    ```
5. Move swiftwave binary to /usr/bin
    ```bash
    sudo mv swiftwave /usr/bin/swiftwave
    ```
6. 🕒 Time for setup!
7. Initialize Docker Swarm
    ```bash
    docker swarm init
    ```
8. Initialize SwiftWave configuration. Run following command and provide required information.
    ```bash
    sudo swiftwave init
    ```
9. Prepare Environment for SwiftWave
    ```bash
    sudo swiftwave setup
    ```
10. Run Local Postgres Database
    ```bash
    sudo swiftwave postgres start
    ```
11. Migrate Database Tables
    ```bash
    sudo swiftwave db-migrate
    ```
12. Generate SSL certificate for primary domain
    ```bash
    sudo swiftwave generate-tls
    ```
13. Start HaProxy Service
    ```bash
    sudo swiftwave haproxy start
    ```
14. Start SwiftWave Service
    ```bash
    sudo swiftwave service enable
    ```
15. Enable auto updater for SwiftWave
    ```bash
    sudo swiftwave auto-updater enable
    ```
16. Create a new admin user
    ```bash
    sudo swiftwave create-user --username <give_a_username> --password <give_a_strong_password>
    ```
17. 🎉 Congratulations! SwiftWave is now installed on your server. 
18. You can now access SwiftWave at `https://<your_domain>:3333`
> Note: You have forget the auto-generated domain 😅 anyhow ? This is how you can get it back.
> - Suppose your server IP is `3.5.12.13`, then your domain will be `ip-3-5-12-13.swiftwave.xyz`
> - You have added a custom domain `example.com`, then you can use that domain to access SwiftWave on port 3333.

