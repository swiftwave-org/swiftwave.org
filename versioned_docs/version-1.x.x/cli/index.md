---
id: cli
title: 💻 CLI Reference
tags:
  - CLI
sidebar_position: 6
---

SwiftWave CLI acts like a management panel for SwiftWave.
It provides some administrative control as root user of your system.

**Feature List**
- Edit Configuration
- Generate SSL certificate for primary domain
- Migrate Database Tables
- Create/Delete Admin user
- Manage HaProxy Service
- Manage Local Postgres Database
- Manage Swiftwave Service
- Print Swiftwave Service Info

### Global Flags

| Flag   |       Type       | Default |     Mandatory       |          Description              |
|--------|------------------|---------|---------------------|-----------------------------------|
| --dev  | `true` / `false` | `false` | <center>❌</center> | Run swiftwave in development mode (This will enable some extra features) <ul><li>GraphQL playground will be available</li><li>Logs will be more detailed</li></ul> |
| --help |                  |         | <center>❌</center> | Show information for any command  |
