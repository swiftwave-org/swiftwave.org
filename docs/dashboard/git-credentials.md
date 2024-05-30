---
id: git-credentials
title: 🐙 Git Credentials
sidebar_position: 8
---

In **Git Credentials** section, you can check all the saved Git Credentials. You can use these credentials while deploying an application from a Git Repository.

![Git Credentials List](/assets/2.x.x/git-credential-list.png)

Git Credentials vault now supports both HTTP and SSH authentication key.

**You can**
- **Add** a new Git Credential by clicking on `Add New` button.
- **View** a Git Credential by clicking on `View Details` button.
- **Edit** a Git Credential by clicking on `Edit Details` button.
- **Delete** a Git Credential by clicking on `Delete` button.
  > Note : You can only delete a Git Credential if it is not being used by any application.

#### Add HTTP Credential

![Add HTTP Credential](/assets/2.x.x/add-http-credential.png)

Choose the type as `HTTP` and fill in the required details.

#### Add SSH Credential

![Add SSH Credential](/assets/2.x.x/add-ssh-credential.png)

Choose the type as `SSH` and fill in the required details.
- If you like to use your own private key, put that in OpenSSH format in the `Private Key` field.
- Else, leave that field empty and a new key will be generated for you.

**View the public key**

To view the public key, hit the `View Details` button after creating your SSH Git credential.

![View SSH Credential](/assets/2.x.x/ssh-git-credential-details.png)

You can add this key to your GitHub account and use it to access the private repository.