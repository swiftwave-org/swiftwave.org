---
id: domains
title: 🌐 Domains
sidebar_position: 8
---

In **Domains** section, you can manage all the custom domains you have added to swiftwave.

![Domains List](/assets/2.x.x/domain-list.png)

### Register a new domain
You can click on `Register New` button and fill in the required details to register a new domain.

### Delete a domain
You can click on `Delete` button to delete a domain.
> Note : You can only delete a domain if
> - it is not being used by any application
> - no ingress rules linked to it
> - no redirect rules linked to it

### Verify DNS
You can click on `Verify DNS` button to verify if domain is correctly pointing to the proxy server.

:::tip

- If you are using cloudflare as your DNS provider, it is recommended to use DNS only mode while mapping your domain to the proxy server IP.
- If you want to use Cloudflare Proxy Mode, go to `Domain SSL/TLS Mode` section and mark `Encryption Mode` to `Full`. After this, all your application hosted on swiftwave should use `https` protocol in all ingress rules.

:::


### Issue SSL Certificate 🛡️
Swiftwave has Let's Encrypt integration. You can issue a SSL certificate for your domain by clicking on `Issue SSL` button.

### SSL Auto Renewal
From V2, Swiftwave supports SSL auto renewal. You don't need to worry about renewing your SSL certificate manually.
