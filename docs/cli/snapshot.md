---
id: snapshot
title: swiftwave snapshot
tags:
  - CLI
sidebar_position: 14
---

Take snapshot of Swiftwave. Can be helpful in disaster recovery.

It will backup
- Swiftwave configuration
- Swiftwave data
- Swiftwave logs
- Swiftwave database
- Images of locally running image registry
- Uploaded codebases
- Data and configuration of Ingress Proxy

### Usage

```
swiftwave snapshot
```

This will print the filename of the snapshot file.