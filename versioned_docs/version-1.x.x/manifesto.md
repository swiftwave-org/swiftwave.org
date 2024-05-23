---
id: manifesto
title: 🌱 SwiftWave Manifesto
sidebar_position: 3
---

SwiftWave, our self-hosted PaaS marvel, is here to make deploying and managing your applications on any VPS a breeze! 🌐

**Our Goals:**
- **Simplicity**: We're all about keeping things simple. SwiftWave makes it a cakewalk for everyone to deploy their applications on a VPS.
- **Lightweight**: Minimal resource usage is our mantra. Deploy multiple applications on a single VPS? Absolutely doable with SwiftWave.
- **Open Source**: SwiftWave is for everyone. Contribute, deploy on your server – the power is in your hands.
- **Scalability**: Click, and voila! Scale your application seamlessly without a hint of downtime.

**Target Users:**
- Students 🎓
- Developers 👩‍💻👨‍💻
- Hobbyists 🎨
- Small Businesses 🏢

We're not here for the big companies. Looking to deploy a massive application with lakhs of concurrent users? SwiftWave might not be correct choice for you.

SwiftWave is designed with two modes to cater to both small and medium-sized applications.

| Service       |  SwiftWave Standalone |  SwiftWave Cluster |
| ------------- | --------------------- | ------------------ |
| Postgresql    | Local or Remote       | Remote             |
| Job Queue     | Local (SwiftWave)     | RabbitMQ           |
| PubSub        | Local (SwiftWave)     | Redis              |

In standalone mode, configure with any remote postgres, rabbitmq, or redis. But in cluster mode, it's a must to go remote for postgres, rabbitmq, and redis.

This architecture keeps resource usage low for small apps and scales effortlessly for medium-sized ones with SwiftWave's cluster mode.

No matter what, we're committed to keeping it simple and lightweight. 

Picture this: on a 1GB RAM 1vCPU VPS, SwiftWave lets you deploy 2-3 applications with ease. Small businesses? They can confidently deploy their applications with SwiftWave's cluster mode. Let's keep it swift, simple, and sensational! 🚀🌟