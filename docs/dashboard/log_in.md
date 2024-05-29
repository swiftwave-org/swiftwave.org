---
id: log_in
title: 🔒 Log In
sidebar_position: 1
---

When you will visit the dashboard for the first time, you will be asked to log in.

![Log In](/assets/1.x.x/log-in.png)

You can log in using the credentials of the user you created while installing the application.

You can also **Create New User** from the CLI (if you have access to the server where you have installed swiftwave).

**Steps -**
1. SSH into the server where you have installed swiftwave.
2. Run the following command to create a new user.
    ```bash
    sudo swiftwave create-user --username <any_username> --password <any_password>
    ```

    For more information, check out [**CLI Reference**](/docs/cli/create-user).
