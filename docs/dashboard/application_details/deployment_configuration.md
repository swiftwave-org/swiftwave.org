---
id: deployment_configuration
title: Deployment Configuration
sidebar_position: 8
---

In **Deployment Configuration** section, you can *scale up* or *scale down* the application.

![Deployment Configuration](/assets/2.0.x/application-deployment-configuration.png)

### Deployment Modes
- **Replicated Mode** - In this mode, you can specify the number of instances you want to run for the application.
- **Global Mode** - In this mode, each server registered under swiftwave will run one instance of the application.

:::note

Currently you can't change the deployment strategy of the application. **Replicated** mode is suitable for most of the applications. If you don't know what to choose, then choose **Replicated** mode.

:::

### Memory Configuration
- **Memory Limit** - The maximum amount of memory that a programme within the container can use. If the program inside container exceeds the limit, the program will be killed.
- **Reserved Memory** - The amount of memory that will be allocated for the container. For this container, Swarm will attempt to allocate this amount of memory in a node.

:::info

- If you want to keep memory as unlimited, then set the **Memory Limit** to `0`.
- Provide, at least **6MB** of memory for the container.

:::