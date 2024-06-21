---
id: static_app_config
title: Static App Config
sidebar_position: 7
---

If your deployed application has any requirement of read-only configuration, then you can use the **Static App Config**. This will mount the static configuration file to the application and you can update it anytime from the dashboard.

![Static App Config](/assets/2.1.x/application-static-app-config.png)

### Add Static App Config

To add a static app config, click on **Add Config Mount** button. You will see a form like this:

![Add Static App Config](/assets/2.1.x/application-add-static-app-config.png)

- Put the path inside the container where you wish to mount the configuration.
- You can configure UID and GID of the config file.

### Delete Static App Config

To delete a static app config, click on **Delete** button and then click on **Apply Changes**.

### Modify Static App Config

To modify a static app config, click on **Edit Config** button, do the changes and then click on **Apply Changes**.