---
id: init
title: swiftwave init
tags:
  - CLI
sidebar_position: 2
---

Initialize the configuration for Swiftwave on the system. 

### Usage

```
swiftwave init [flags]
```

### Flags


| Flag       |   Type   |  Default |  Mandatory |     Description           |
|------------|----------|----------|------------|---------------------------|
| --mode     | `standalone` / `cluster` | <center>`standalone`</center> | <center>❌</center> | Mode of operation |
| --letsencrypt-email | string | <center>--</center> | <center>❌</center> | Email address for Let's Encrypt |
| --haproxy-user | string | <center>`admin`</center> | <center>❌</center> | Username for HAProxy (Can't be modified once set) |
| --haproxy-password | string | <center>`admin`</center> | <center>❌</center> | Password for HAProxy (Can't be modified once set) |
| --auto-domain | `true` / `false` | <center>`false`</center> | <center>❌</center> | Resolve domain name automatically |
| --overwrite | `true` / `false` | <center>`false`</center> | <center>❌</center> | Overwrite existing configuration |