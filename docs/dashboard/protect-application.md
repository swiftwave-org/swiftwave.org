---
id: protect-application
title: 🛡️ Protect Application
sidebar_position: 13
---

In **Protect Application** section you can manage and configure all the methods available to protect your application via ingress rules or SSO.

**Supported Authentication Methods:**
- [Basic Authentication](#basic-authentication)
  - [Add ACL](#add-acl)
  - [Delete ACL](#delete-acl)
  - [Add User](#add-user)
  - [Change Password](#change-password)
  - [Delete User](#delete-user)

**🚧 Upcoming Authentication Methods:**
- **Authelia**
- **Authentik**

### Basic Authentication

![Basic Authentication](/assets/2.1.x/protect-application-basic-auth.png)

**Terminology**

- **ACL** or **User List** - Both signifies a group of users. You can assign this to a ingress rule for authentication. In that case, all the users in this group will be able to access the application behind this ingress rule.
- **User** - A user is a single person who is allowed to access the application behind this ingress rule. Usually, you will need a ACL, under which you can add users.

#### Add ACL

Click on **Add New ACL** button and in the form provide a name for the ACL and submit it. That's all.

#### Delete ACL

Click on **Delete** button and the ACL will be deleted.

> ⚠️ Note: You need to detach ACL from all the ingress rules before deleting it. For that, you can visit the **Ingress Rules** and disable/update authentication for the ingress rules. Then, delete the ACL.

#### Add User

On each ACL record, you will find a button **Add User**. Click on it and provide a username and password for the user. That's all.

#### Change Password

On each User record, you will find icon 🔑. Click on it and provide a new password for the user.

#### Delete User

On each User record, you will find icon 🗑️. Click on it and the user will be deleted. The user will not be able to access the application anymore.