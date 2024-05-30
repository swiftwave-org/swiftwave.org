---
id: actions
title: Actions
sidebar_position: 10
---

![Webhook CI](/assets/2.x.x/application-actions.png)


You can perform the following actions on the application from the **Actions** section.
 - Restart the application
 - Rebuild the application
 - SSH to the application


## Restart the Application

Click on **Restart** to restart the application.

## Rebuild the Application

Click on **Rebuild** to rebuild the application. If the application was deployed using any docker image, then while deployment it will try to fetch new image if it is available.

## SSH to the Application

Any point of time, if you need to SSH to the application, you can click on `Open Console` to open the SSH console.

![SSH Init](/assets/2.x.x/application-ssh-select-server.png)

After opening the web console, it will ask you to select the server. You need to provide the serial no of server to which you want to SSH.

![SSH Console](/assets/2.x.x/application-ssh-console.png)

After selecting the server, it will open the SSH console and you can run any command inside the application now.