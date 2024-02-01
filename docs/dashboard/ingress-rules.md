---
id: ingress-rules
title: 🚪 Ingress Rules
sidebar_position: 8
---

In **Ingress Rules** section you can manage your ingress rules. You can add or delete ingress rules.

![Ingress Rules](/assets/ingress-rule-list.png)

### 😅 Don't know what ingress rules are ?
In layman's terms, ingress rules are the rules that will connect your domain to your application.

For example, you have an web application (named **myapp**) running on port 3000 and you want people can access it via `https://myapp.com`. You can do that by creating an ingress rule that will connect your domain to your application.

```
myapp.com [https] -> myapp:3000
```

### Add Ingress Rule
To add an ingress rule, click on **Add New** button. You will see a form like this:
![Add Ingress Rule](/assets/add-ingress-rule.png)

You can choose the protocol your application required.
- **HTTP**: Currently, only port 80 is supported.
- **HTTPS**: Currently, only port 443 is supported.
  > Note: To enable, **HTTPS Redirection**, you will have to create a redirect rule. You can follow [**this docs**](/docs/dashboard/redirect-rules#https-redirect) section to create a redirect rule.
- **TCP**: If your application requires a custom port, you can choose this protocol. 
  > **NOTE : ** In case of TCP, You can't create more than one ingress rule with the same port. The domain will be ignored in this case, you can just put your server IP address in the domain field.

Then, you can choose the domain you want to connect to your application. If you don't have any domain, you can add it in [**Domains**](/docs/dashboard/domains) section.

Finally, you can choose the application you want to connect to your domain. If you don't have any application, you can deploy one by following [**this docs**](/docs/dashboard/deploy_new_application) section.

Hurrah! You have successfully created an ingress rule. Now, you can access your application via your domain.
It takes upto 1 minute to apply the changes.

> **Note :** If you have created an TCP ingress rule, you will have to manually open the port in your server's firewall (if you have any). Also, during apply the changes, you may face a downtime of ~10 seconds.

### Delete Ingress Rule
To delete an ingress rule, click on **Delete** button. You will see a confirmation dialog. Confirm it and your ingress rule will be deleted.