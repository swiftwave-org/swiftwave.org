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


| Flag              | Type             | Default                  | Mandatory          | Description                                    |
| ----------------- | ---------------- | ------------------------ | ------------------ | ---------------------------------------------- |
| --domain          | string           |                          | <center>❌</center> | Domain name for management node                |
| --auto-domain     | `true` / `false` | <center>`false`</center> | <center>❌</center> | Use *.swiftwave.xyz domain for management node |
| --remote-postgres | `true` / `false` | <center>`false`</center> | <center>❌</center> | Opt out Local postgres database                |
| --overwrite       | `true` / `false` | <center>`false`</center> | <center>❌</center> | Overwrite existing configuration               |