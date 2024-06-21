---
id: why_swiftwave
title: 🌊 Why SwiftWave ?
sidebar_position: 2
---

Let us learn a little bit about the motivation behind the creation of a product like Swiftwave.

To deploy your apps, you will have usually two choices: either deploy using any PaaS (Netlify / Vercel / Heroku / Render) or do deployments manually in a VPS.

The first choice is simple but has a cost tag. Second one takes more time to set up and maintain even if it is less expensive and requires Linux and reverse proxy knowledge.

You can run three to four apps in parallel using Swiftwave Stack on a five dollar Hetzner instance. The cost of doing the same on Proprietary PaaS will be at least 10x higher.

Some great PaaS systems use K8s and K3s, which are expensive to operate and demand a lot of resources (the master node alone needed 2GB of RAM and 2vCPU). It might not be appropriate for small businesses, hobbyists, or students.

So, we plan to develop a PaaS that is as easy to use as a proprietary PaaS while also being lightweight and simple to use and manage.

Yup ! **Swiftwave** is the result of that initiative.

**Swiftwave** has very less memory footprint and has all important features that you would expect from a PaaS.

![benchmark](/assets/2.0.x/benchmark.png)

*In idle condition, Swiftwave takes 40\~80MB RAM and 1\~2% CPU of a single vCPU. While onboarding new server, the CPU usage can increase upto 20%. But that's one time process.*
