---
id: introduction
title: 🌟 Introduction
sidebar_position: 1
---

### 🌊 **SwiftWave: Simple Lightweight PaaS Solution**

SwiftWave is a self-hosted, lightweight PaaS solution for easily deploying and managing your applications on any VPS 🚀. It's an open-source alternative to Heroku, Netlify, and Render. 

You can install swiftwave in bare metal, Raspberry Pi, in any VPS(Hetzner, DigitalOcean, Linode, AWS, GCP etc.). Swiftwave and its dependencies are compatible with AMD64, ARM64 and ARMv7 architectures and compatible with Debian/Ubuntu/Raspbian OS/Fedora/CentOS/AlmaLinux/RockyLinux etc.


Once installed, you can
- Install app from app store in one click
- Deploy your own app from any kind of 
  - git repository
  - docker image repository
- Even you can upload the source code from your local machine to swiftwave
- Add ingress rules to point your domain to your app
- Monitor your app's performance
- Scale your app easily

**Swiftwave's core components -**

- **Swiftwave Daemon** - This is the heart of the SwiftWave.
- **HAProxy** - This is responsible for handling TCP/HTTP/HTTPS traffic, load balancing and SSL termination.
- **UDPPRoxy** - This is [custom built tool](https://github.com/swiftwave-org/udpproxy) to handle UDP traffic.
- **Volume Toolkit** - This is a [custom built tool](https://github.com/swiftwave-org/volume-toolkit) to perform various operations like size calculation, snapshot creation, restoration of persistent volumes, etc.
- **Stats Ninja** - This is again a [custom built tool](https://github.com/swiftwave-org/stats-ninja) to record resource usage of server and deployed applications.
- **App Store Metadata** - [https://github.com/swiftwave-org/app-store](https://github.com/swiftwave-org/app-store) . This contains all the metadata of one click apps.

We will know more about each things in the next section.