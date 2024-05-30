---
id: webhook_ci
title: Webhook CI
sidebar_position: 9
---

You can manage the webhook CI of the application from the **Webhook CI** section.

This **Webhook** can be used to trigger re-deployment of the application when the source code of the application is updated.

![Webhook CI](/assets/2.0.x/application-configure-webhook.png)

**Regenerate Webhook Token** - You can regenerate the webhook URL by tapping on **Regenerate Webhook** button. If you have exposed the webhook URL to the public by mistake, then you can regenerate the webhook URL to make the old webhook URL invalid.

---

### 🚀 Setting Up Auto Deployment on GitHub

1. Open your GitHub repository
2. Click on **Settings** ⚙️
3. Go to **Webhooks** from the left menu
4. Press the **Add webhook** button 🤖
5. Copy and paste the webhook URL in the **Payload URL** field
6. Choose **Just the push event** from the options
7. Click **Add webhook** to save 🚀
8. Hooray! 🎉 Whenever you push changes, the webhook triggers, and your app auto-redeploys! 🔄

---

### 🚀 Setting Up Auto Deployment on GitLab

1. Open your GitLab repository
2. Click on **Settings** ⚙️
3. Navigate to **Webhooks** from the left menu
4. Hit the **Add New webhook** button 🤖
5. Copy-paste the webhook URL into the **URL** field
6. Check **Push events** from the **Triggers** section
7. Click **Add webhook** to save 🚀
8. Fantastic! 🎉 Push changes, trigger the webhook, and your app auto-redeploys! 🔄

---

### Auto Deployment on Docker Hub

> Note: Make sure you have a Docker Hub account, and you need administrative access to the project.

1. Open your Docker Hub account
2. Go to the specific repository 📦
3. Click on **Webhooks** 🌐
4. Add the webhook URL
5. Ensure you have administrative access to the project
6. Click on **Create** 🚀
7. Done! 🎉 Push changes, trigger the webhook, and your app auto-redeploys! 🔄