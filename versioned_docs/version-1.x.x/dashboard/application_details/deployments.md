---
id: deployments
title: Deployments
sidebar_position: 1
---

In **Deployments** section, you can see all the deployments of the application. You can check the status of the deployment and time of deployment at a glance.

![Deployment List](/assets/deployment-list.png)

But, you want to see more details about the deployment, you can click on the **Deployment Card** to see more details about the deployment.

Once you click on the **Deployment Card**, you will see the **Deployment Details** page like this:

![Deployment Details](/assets/deployment-details.png)

Here, you can see complete details about the deployment. You can also check deployment logs to figure out what went wrong.

> 📌 While deployment is live,
- The *Deployment Logs* will be updated in realtime.
- **Request Cancellation** button will be available to cancel the deployment, if due to any reason docker build stuck, you can cancel the deployment.
  ![Deployment Cancel](/assets/cancel-deployment.png)