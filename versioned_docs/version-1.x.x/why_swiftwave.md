---
id: why_swiftwave
title: 🌊 Why SwiftWave ?
sidebar_position: 2
---

Hey there! 🚀 Ever wondered why there's yet another PaaS cloud orchestration tool in the sea of options? Let's dive into the story behind SwiftWave.

In a world of k8s, k3s, and various orchestrators designed for the big league, what about the small players? Not everyone needs a massive k8s cluster for a petite application. I mean, seriously, a k8s master node demands 2GB of RAM and 2 vCPUs just for starters! ([**Ref**](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/)) That's a bit much, especially if you're just starting out and finding your feet.

Sure, Linux-savvy folks can deploy on a VPS, but manual configurations galore! Docker installs, nginx/haproxy setups, SSL certificates – it's no one-minute job, trust me.

And then, SwiftWave emerged – a PaaS solution that's a breeze to use and feather-light. 🌟

While other solutions are hogging over 2GB of RAM, the SwiftWave + HaProxy + Postgres combo only sips on a modest 180MB of RAM. You can run a couple of applications smoothly in a 1GB RAM VPS without breaking a sweat.

| Service   | Ram Usage  |
| --------- | ---------- |
| SwiftWave | ~40MB      |
| HaProxy   | ~80MB      |
| Postgres  | ~70MB      |

💸 Not to mention, most platforms charge a pretty penny for application deployment – think around $25 per month for a 512MB RAM. SwiftWave, on the other hand, lets you deploy in a 1GB RAM VPS for just $5 a month!

Here's the kicker! 🎓 For students, we've got you covered. Grab those free digitalocean credits, AWS credits, or tap into the GitHub education plan. Use those credits to deploy your application on a 1GB RAM VPS for free! Oracle Cloud even tosses in 4 OCPU and 24GB RAM for a lifetime – no need to open your wallet for your application deployment.

For all you startup warriors and side-hustlers, SwiftWave is your MVP-launching secret weapon. Save both money and time by grabbing AWS credits or other credits, installing SwiftWave on your server, and when the traffic starts rolling in, just hit that scale button – easy peasy.

In the world of hackathons, deploying your application scores you extra points. With SwiftWave, it's a blink-and-you're-done, 5-minute job. Now you can channel all that focus into developing your application, leaving the deployment worries to SwiftWave.

And hey, if your project lacks a Docker file, no problem! SwiftWave takes care of that for you. Just provide your source code, and voila, it'll generate the Docker file, deploy your application, and let you get back to what you do best – building awesome stuff! 🚀👩‍💻👨‍💻