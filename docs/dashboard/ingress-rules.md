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
- **HTTP**: You can choose any port for your application. It's recommended to use port 80 for HTTP.
- **HTTPS**: Currently, only port 443 is supported.
  > Note: To enable, **HTTPS Redirection**, you will have to create a redirect rule. You can follow [**this docs**](/docs/dashboard/redirect-rules#https-redirect) section to create a redirect rule.
- **TCP**: If your application relies on TCP protocol, you can choose this option. You can choose any port for your application.
  > NOTE : In case of TCP, You don't need any domain. You can directly connect your application to your server's IP and port (you choose).
- **UDP**: If your application relies on UDP protocol, you can choose this option. You can choose any port for your application.
  > NOTE : In case of UDP, You don't need any domain. You can directly connect your application to your server's IP and port (you choose).

Then, you can choose the domain you want to connect to your application. If you don't have any domain, you can add it in [**Domains**](/docs/dashboard/domains) section.

**Finally**, you can choose the application you want to connect to your domain. If you don't have any application, you can deploy one by following [**this docs**](/docs/dashboard/deploy_new_application) section.

Hurrah! You have successfully created an ingress rule. Now, you can access your application via your domain.
It takes upto 1 minute to apply the changes.

> **Note :** If you have created an ingress rule for port except 80 and 443, you will have to wait for upto ~30 seconds to apply the changes. This is because, we have to reload HAProxy or UDPProxy and other services to expose the port. You should open the port in your server's firewall too.

### Delete Ingress Rule
To delete an ingress rule, click on **Delete** button. You will see a confirmation dialog. Confirm it and your ingress rule will be deleted.