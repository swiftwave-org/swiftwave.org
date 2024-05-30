---
id: deploy_stack
title: 🔨 Deploy Stack
sidebar_position: 4
---

![Deploy Stack](/assets/2.x.x/deploy-stack.png)

In **SwiftWave**, you have also support to deploy multiple applications using stack file.

This stack file has same format as docker stack file. Still it doesn't support all the features of docker stack file.

#### Available Features

| Name                  | Supported |
| --------------------- | --------- |
| services              | Yes       |
| image name            | Yes       |
| deploy mode           | Yes       |
| command               | Yes       |
| replicas              | Yes       |
| volumes               | Yes       |
| environment variables | Yes       |
| cap_add               | Yes       |
| sysctls               | Yes       |
| ports                 | No        |
| networks              | No        |
| depends_on            | No        |
| healthcheck           | No        |

:::tip

You can use ingress rules to expose your application to internet.

:::