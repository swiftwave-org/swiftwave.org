---
id: persistent-volumes
title: 📦 Persistent Volumes
sidebar_position: 4
---

In **Persistent Volumes** section, you can see all the persistent volumes created across your cluster for your applications.

![Persistent Volume List](/assets/persistent-volumes.png)

### Create a Persistent Volume
1. Click on `Add New` button.
2. Put a name for the persistent volume.
   > Note : The name should be unique and can't contain spaces.
3. Submit.

### Delete a Persistent Volume
Just click on `Delete` button to delete a persistent volume.

### Analyze Size of Persistent Volume
You can click on `Fetch Size` button to fetch size of the persistent volume.

### Backup Volume
1. You can backup and take snapshot of the persistent volume by clicking on `Create Backup` button.
2. You can choose type of backup.
    - **Local** : The backup will be stored locally in the server itself.
    - **S3** : The backup will be stored in S3 bucket. You need to configure S3 beforehand to avail this feature.
      > You can open  swiftwave config by [`swiftwave config -e vim`](/docs/cli/config) command
3. Submit to create backup.
4. You can open the backup history by `Show Backups` button to see the status of the backup.

### Backup History
You can click on `Show Backups` button to see the backup history of the volume.

![Backup History](/assets/backup-history.png)

- You can check status of old backups.
- You can also download the backup file by clicking on `Download Backup` button.


### Restore Volume
1. You can upload a backup file to restore the volume by clicking on `Restore Now` button.
2. Upload the backup file.
3. Submit to restore the volume.
4. You can open the restore history by `Show Restores` button to see the status of the restore.

### Restore History
You can click on `Restore History` button to see the restore history of the volume.

![Restore History](/assets/restore-history.png)

- You can check status of all restores.