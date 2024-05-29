---
id: danger_zone
title: Danger Zone
sidebar_position: 9
---

In **Danger Zone** section, you have some options which can lead to downtime of the application. So, be careful while using these options.

![Danger Zone](/assets/1.x.x/application-danger-zone.png)

### Restart Application

To restart the application, click on the **Restart Application** button. This action will restart all instances of the application.


### Rebuild Application

If you've updated your project's source code on GitHub/GitLab or in the Image Registry, tap on **Rebuild Application**. This will rebuild your application with the latest source code.

> Note: If your application is configured to run multiple instances in the **Deployment Configuration**, there won't be downtime. However, with only one instance, expect a brief downtime.


### Delete Application

To delete the application, tap on **Confirm & Delete Application**. This action deletes the application and all associated data.

Handle these options with care, as they can impact application availability. 🚨
