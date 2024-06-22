---
id: swiftwave_app_store
title: 🏪 Swiftwave App Store
sidebar_position: 2
---

import React, { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


<div style={{
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem'
}}>
    <img src="/assets/2.2.x/app-store.png" alt="app-store.png" width="70%"/>
</div>



From Swiftwave App Store, you can install any app in few clicks.

## Available Apps

<BrowserOnly fallback={null}>
    {() => {
        const [availableApps, setAvailableApps] = useState([]);

        const fetchAvailableApps = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/swiftwave-org/app-store/main/store.json');
                const data = await response.json();
                setAvailableApps(data);
            } catch (error) {
                console.log(error);
            }
        }

        useEffect(() => {
            fetchAvailableApps();
        }, []);

        return (
            <table>
            <thead>
                <tr>
                    <th>Logo</th>
                    <th>App Name</th>
                    <th>Description</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {availableApps.map((app) => (
                    <tr key={app.title}>
                        <td>
                        <img src={app.logo} alt={app.title} style={{
                            height: '30px',
                            width: '30px',
                        }}/>
                        </td>
                        <td>{app.title}</td>
                        <td>{app.description}</td>
                        <td style={{
                            textAlign: 'center'
                        }}>{app.category}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        )
    }}
</BrowserOnly>

## How to install any app from Swiftwave App Store ?
1. Go to Swiftwave App Store
   ![Swiftwave App Store](/assets/2.2.x/app-store.png)
2. For instance, we are installing NextCloud. So tap on that.
3. You will see the variants available for installation.
   
   ![NextCloud Variants](/assets/2.0.x/app-store-nexcloud-variant.png)
4. For now, we want to install with a postgres database. So tap on that.
5. Then you will find the app installation wizard.
   
   ![NextCloud Installation Wizard](/assets/2.0.x/app-store-nextcloud-installation-wizard.png)
6. Click on the `Install Now` button at the bottom.
7. You will be asked to fill up the required details.
   
   ![NextCloud Installation Wizard](/assets/2.0.x/app-store-nextcloud-install-form.png)

8. Provide application name and other details.
   
   ![NextCloud Installation Wizard](/assets/2.0.x/app-store-nextcloud-filled-form.png)

   :::tip

    If you want to ignore configuring any ingress rule, you can do that by tapping on the red cross ❌ icon.

   :::

9. Click on the `Install Now` button to start the installation.
10. On confirmation, you will get a success message with all the info.
    
    ![NextCloud Installation Success](/assets/2.0.x/app-store-nextcloud-deployment-success.png)

11. You can click on the `View` button to see the deployment status.
12. Or, back to dashboard, you will see a group of apps with their status.
    
    ![NextCloud Deployment Status](/assets/2.0.x/app-store-nextcloud-app-grp.png)

13. Let's open the app details of NextCloud.

    ![NextCloud App Details](/assets/2.0.x/app-store-nextcloud-app-details.png)

14. Let's go to the url of the app and see the app in action.

    ![NextCloud App](/assets/2.0.x/app-store-nextcloud-deployed.png)

15. Yup it's working!