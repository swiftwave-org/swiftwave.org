---
id: manage-users
title: 👥 Manage Users
sidebar_position: 15
---

In **Manage Users** section, you can manage all the users of your organization.

![Manage Users](/assets/2.0.x/manage-users.png)

### ➕ Create User
**Create** a new user by clicking on `Create User` button.
:::note

Currently, you can only create a user with `admin` role, so new user will have all the permissions.
We will be adding more roles for granular permission control soon.

:::


  After clicking on `Create User` button, you will see a form like this:

  ![Create User](/assets/1.x.x/create-user.png)

  Enter the required details and click on `Create` button. The user will be created.

### ⛔ Delete User
**Delete** a user by clicking on `Delete` button.

:::note

 You can't delete current logged in user.

:::

### 🔐 Enable Two Factor Authentication [2FA]

1. Click on `Manage Users` from the `Administration` section's sidebar.
   
   ![Manage Users](/assets/2.0.x/manage-users-2fa-enable.png)

2. Click on `Enable TOTP` button.

   ![Enable TOTP](/assets/2.0.x/enable-2fa-modal.png)

   You can use `Google Authenticator`, `Authy`, `Microsoft Authenticator` , `Bitwarden` , `Ente Auth` or any other 2FA app to register the 2FA request and generate the QR code.

3. After adding the record in 2FA App, take the TOTP from app and submit it in the form to enable 2FA.
4. Logout and try to login again.
5. After providing the `username` and `password`, you will see an extra input field for `TOTP`.
   
   ![Enable TOTP](/assets/2.0.x/log-in-with-totp-enabled.png)

6. Congratulations 🥳! You have enabled 2FA for your account.

### 🔒 Disable Two Factor Authentication [2FA]

1. Click on `Manage Users` from the `Administration` section's sidebar.
   
   ![Manage Users](/assets/2.0.x/manage-users-2fa-disable.png)

2. Click on `Disable TOTP` button.
3. That's it! You have disabled 2FA for your account.