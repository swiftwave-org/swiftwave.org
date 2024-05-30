---
id: deploy_new_application
title: 🔨 Deploy New Application
sidebar_position: 2
---

### 📝 Pre-requisites
Deploying with SwiftWave is a breeze – just bring your application's source code, and SwiftWave handles everything else.

**SwiftWave** effortlessly accommodates various application sources:
- 📦 Git Repository
- 🐳 Docker Image
- If your code isn't on a Git or Image Repository, worry not! Simply choose your code folder and upload it. 📂

### 🚀 Deploy Application
1. Click on the `Deploy New Application` button on the *Sidebar* of the **Dashboard**.
2. Choose your application source (Git Repository, Docker Image, or Upload Code Folder) option.
3. Fill in the required details.
4. Click on `Generate Configuration` button.
5. You can choose to edit generated Dockerfile by clicking on `View/Modify Dockerfile` button.
6. Edit Build Arguments, if required.
7. Click on `Confirm & Proceed to Next Step` button.
8. At top, you can configure no of application instances you require. (You can also configure this later.)
9. Configure your application's environment variables. (You can also configure this later.)
10. You can also configure persistent storage for your application. (You can also configure this later.)
11. Click on `Confirm & Proceed to Next` button.
12. Click on `Click to Deploy` button.
13. Your application will be deployed in a few minutes. 🚀
14. You can check the build logs and status in the same page.


### 📚 Next Steps
- [**How to check details and manage a deployed application**](./application_details/)
- [**How to expose application to internet ?**](./ingress-rules)
- [**How to configure persistent storage ?**](./application_details/persistent_volumes)
- [**How to configure environment variables ?**](./application_details/environment_variables)
