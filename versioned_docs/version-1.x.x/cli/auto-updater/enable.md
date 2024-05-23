---
id: enable
title: swiftwave auto-updater enable
tags:
  - CLI
  - Auto Updater
sidebar_position: 1
---

Enable Swiftwave Auto Updater Service.
> Note: It will check for updates every 5 minutes to apply minor version updates and hotfixes to keep SwiftWave up to date and secure.

### Pre-requisites
You should keep automated database migration enabled to avoid any issues and use SwiftWave Auto Updater.

If you have disabled automated database migration, you can enable it by
- Run `swiftwave config -e vim` or `swiftwave config -e nano` to open SwiftWave configuration file in editor. [See more](/docs/cli/config)
- Set `service.auto_migrate_database` to `false`
- Save and close the file

### Usage

```
swiftwave auto-updater enable
```
