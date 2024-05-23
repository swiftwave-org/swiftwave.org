---
id: domains
title: 🌐 Domains
sidebar_position: 7
---

In **Domains** section, you can manage all the custom domains you have added to swiftwave.

![Domains List](/assets/custom-domain-list.png)

### Register a new domain
You can click on `Register New` button and fill in the required details to register a new domain.

### Delete a domain
You can click on `Delete` button to delete a domain.
> Note : You can only delete a domain if
> - it is not being used by any application
> - no ingress rules linked to it
> - no redirect rules linked to it

### Verify DNS
You can click on `Verify DNS` button to verify if domain is correctly pointing to swiftwave.
> Note: You shouldn't use any DNS proxy service like Cloudflare, etc. for your domain. If you are using any such service, you should disable it before verifying DNS.


### Issue SSL Certificate 🛡️
Swiftwave has Let's Encrypt integration. You can issue a SSL certificate for your domain by clicking on `Issue SSL` button.

### SSL Auto Renewal
Swiftwave does not support SSL auto renewal yet. You will have to manually renew your SSL certificate every 90 days. You can do so by clicking on `Issue SSL` button. We will be adding SSL auto renewal feature soon.
