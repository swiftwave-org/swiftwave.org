---
id: deploy_new_application
title: 🔨 Deploy New Application
sidebar_position: 3
---


In **SwiftWave** you can deploy your application from various sources.
- 📦 Git Repository (Supports both HTTP and SSH)
- 🐳 Docker Image Repository
- If your code isn't on a Git or Image Repository, worry not! Simply choose your code folder and upload it. 📂

### 🚀 Deploy Application
1. Click on the `Deploy New Application` button on the *Sidebar* of the **Dashboard**.
2. Choose your application source (Git Repository, Docker Image, or Upload Code Folder) option.
3. Fill in the required details.
4. Click on `Generate Configuration` button.
5. You can choose to edit generated Dockerfile by clicking on `View/Modify Dockerfile` button. If you feel it detected some wrong services, you can change the detected service and choose another template.
6. Edit Build Arguments, if required.
7. Put the command, if you need to override the default command of dockerfile.
8. Click on `Confirm & Proceed to Next Step` button.
9. At top, you can configure no of application instances you require. (You can also configure this later.)
10. Configure your application's environment variables. (You can also configure this later.)
11. You can also configure persistent storage for your application. (You can also configure this later.)
12. Click on `Click to Confirm & Deploy` button.
13. Your application will be deployed in a few minutes. 🚀
14. You can check the build logs and status in the same page.


### 📚 Next Steps
- [**How to check details and manage a deployed application**](/docs/dashboard/application_details/)
- [**How to expose application to internet ?**](/docs/dashboard/ingress-rules)
- [**How to configure persistent storage ?**](/docs/dashboard/application_details/persistent_volumes)
- [**How to configure environment variables ?**](/docs/dashboard/application_details/environment_variables)
