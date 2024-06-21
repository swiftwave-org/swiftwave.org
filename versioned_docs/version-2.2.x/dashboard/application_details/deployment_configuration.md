---
id: deployment_configuration
title: Deployment Configuration
sidebar_position: 9
---

In **Deployment Configuration** section, you can *scale up* or *scale down* the application.

![Deployment Configuration](/assets/2.2.x/application-deployment-configuration.png)

### Deployment Modes
- **Replicated Mode** - In this mode, you can specify the number of instances you want to run for the application.
- **Global Mode** - In this mode, each server registered under swiftwave will run one instance of the application.

:::note

Currently you can't change the deployment strategy of the application. **Replicated** mode is suitable for most of the applications. If you don't know what to choose, then choose **Replicated** mode.

:::


### Deployment Preferred Servers
If you want that your application should be deployed on specific servers, then you can select the servers from the dropdown list.

### Memory Configuration

![Memory Configuration](/assets/2.2.x/application-deployment-memory-configuration.png)

- **Memory Limit** - The maximum amount of memory that a programme within the container can use. If the program inside container exceeds the limit, the program will be killed.
- **Reserved Memory** - The amount of memory that will be allocated for the container. For this container, Swarm will attempt to allocate this amount of memory in a node.

:::info

- If you want to keep memory as unlimited, then set the **Memory Limit** to `0`.
- Provide, at least **6MB** of memory for the container.

:::

### Custom Health Check
![Custom Health Check](/assets/2.2.x/application-deployment-custom-healthcheck-configuration.png)

You can specify the custom health check for the application.

#### Terminologies -
- **Health Check Test Command** - This is the command that will be executed inside the container to check the health of the application. If the exit code of the command is `0`, then the application is considered healthy.
- **Check Interval (Seconds)** - The interval in seconds between two health checks.
- **Check Timeout (Seconds)** - Maximum time in seconds to allow one check to run.
- **Start Period (Seconds)** - The time in seconds to wait before the first health check.
- **Start Interval (Seconds)** -  Start period in seconds for the container to initialize before starting health-retries countdown.
- **Retries** - The number of times to retry the health check before considering the container unhealthy.

### Docker Socket Proxy

![Docker Socket Proxy](/assets/2.2.x/application-deployment-docker-proxy-configuration.png)

If your app has any requirement of mounting docker socket, you can use this feature to deploy your application.

#### Usage Guide -

- First, enable docker socket proxy.
  - `Enable` docker socket proxy from the **Deployment Configuration** section.
  - Choose the permission of the docker socket. **Please don't provide more than required features to the application. Because that cause security issue.**
  - Click on **`Apply Changes`** button to update the source of the application.
  - Refresh the page.
- Then, you can use the docker socket proxy in your application. There are multiple ways to use docker socket proxy.
  1. If your app support remote docker host by environment variable, you can configure that like this.
     - Env Variable Name - `DOCKER_HOST` Value - `{{DOCKER_PROXY_HOST}}`
  2. If your app required a full endpoint for docker socket, you can use like this.
     - For example, env variable name - `DOZZLE_REMOTE_HOST`, set the value as `tcp://{{DOCKER_PROXY_HOST}}:2375`.
  3. If your app doesn't support remote docker host via environment variable, you can copy the hostname from the **Docker Proxy Configuration** section and use it in your application.
      
      ![Docker Socket Proxy](/assets/2.2.x/application-deployment-docker-proxy-endpoint-configuration.png)