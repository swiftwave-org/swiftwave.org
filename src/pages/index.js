import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "@theme/Footer";
import InfoGroup from "../components/info-group";
import { ArchiveBoxArrowDownIcon, ArrowUturnDownIcon, BuildingStorefrontIcon, CircleStackIcon, CodeBracketIcon, CommandLineIcon, CubeIcon, CursorArrowRippleIcon, FireIcon, PresentationChartBarIcon, ServerStackIcon, ShieldCheckIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";


export default function Home() {
  return (
    <>
      <div className="py-4 px-4 md:px-8 mb-10">
        <Navbar />
        <Header />
        {/* USP */}
        <InfoGroup
          title="Why Swiftwave ?"
          subtitle="Another Orchestrator ? Not of-course 🫡"
          infos={[
            {
              title: "🎈 Lightweight",
              content: <>
                SwiftWave has very low memory footprint. If you have a tiny server (1GB Ram 1vCPU), you can still run SwiftWave with 3~4 applications.<br /><br />

                SwiftWave + HaProxy + Local Postgres = ~180MB<br /><br />

                <i>If you can use any remote postgresql server, you can run more applications.</i>
              </>
            },
            {
              title: "🔋 Batteries Included",
              content: <>
                ➡️ Deploy from Git / Docker Image / Local folder <br />
                ➡️ Automated Docker Config Generator <br />
                ➡️ Managed TCP / UDP Ingress <br />
                ➡️ Managed Domain + SSL Management<br />
                ➡️ Persistent Volume Backup & Restore Support<br />
                ➡️ Server Management <br />
                ➡️ Console Access <br />
                ➡️ Resource Monitoring <br />
              </>
            },
            {
              title: "📈 Scalable",
              content: <>
                SwiftWave is designed to be scalable as well as lightweight. It's possible due to it's separate working architecture.<br /><br />
                ➡️ <b>Standalone :</b> Best for single server installation<br />
                ➡️ <b>Cluster :</b> Suitable for high traffic applications in a multi-server cluster environment.
              </>
            }
          ]}
        />
        {/* Features */}
        <InfoGroup
          title="Available Features"
          subtitle="Let's know a bit about core features"
          infos={[
            {
              icon: <ServerStackIcon className="w-6 h-6 text-primary-700" />,
              title: "Any Server",
              content: "Swiftwave can be installed on any bare metal, Raspberry Pi, any VPS such as Hetzner, Linode, AWS, GCP, DigitalOcean, or anything that can run docker."
            },
            {
              icon: <CursorArrowRippleIcon className="w-6 h-6 text-primary-700" />,
              title: "Deploy from Anywhere",
              content: "You can deploy your app from any git repository or Docker image repository. You can even deploy the application by uploading the source code from your computer."
            },
            {
              icon: <CodeBracketIcon className="w-6 h-6 text-primary-700" />,
              title: "Docker Config Generator",
              content: "Swiftwave handles Dockerfile-less projects. Automatically detects programming language and framework and generates Dockerfile. Still unsatisfied? Change or select another config."
            },
            {
              icon: <BuildingStorefrontIcon className="w-6 h-6 text-primary-700" />,
              title: "Integrated App Store",
              content: "It is an integrated app store within Swiftwave that allows users to select an app and fill out the necessary information to deploy and make the app ready for use in a matter of minutes."
            },
            {
              icon: <ArrowUturnDownIcon className="w-6 h-6 text-primary-700" />,
              title: "Managed Ingress",
              content: "Swiftwave uses HAProxy to handle TCP/HTTP/HTTPS traffic and a custom-built UDP proxy for UDP traffic. Both proxies are managed by Swiftwave itself."
            },
            {
              icon: <ShieldCheckIcon className="w-6 h-6 text-primary-700" />,
              title: "Domain + SSL Management",
              content: "Swiftwave allows you to register a custom domain and receive a free SSL certificate from Lets Encrypt. It also supports auto-renewing SSL certificates before they expire."
            },
            {
              icon: <CircleStackIcon className="w-6 h-6 text-primary-700" />,
              title: "Persistent Volume",
              content: "Swiftwave allows you to create persistent volumes that can be mounted in your application. You have the option of adding local, NFS, CIFS, or Samba share as a persistent volume."
            },
            {
              icon: <ArchiveBoxArrowDownIcon className="w-6 h-6 text-primary-700" />,
              title: "Persistent Volume Snapshot",
              content: "Swiftwave lets you take snapshots of persistent volumes and store them locally or upload them to S3. You can later restore the Persistent volume from the saved snapshot."
            },
            {
              icon: <CommandLineIcon className="w-6 h-6 text-primary-700" />,
              title: "Web Console",
              content: "Anytime from the Swiftwave dashboard, you can SSH into any registered server or any application from the browser to troubleshoot problems."
            },
            {
              icon: <PresentationChartBarIcon className="w-6 h-6 text-primary-700" />,
              title: "Resource Monitoring",
              content: "Swiftwave Stats-Ninja tool tracks server and all hosted application resource (cpu, memory, network i/o, disk) usage. Dashboard allows end user to view all analytics."
            },
            {
              icon: <FireIcon className="w-6 h-6 text-primary-700" />,
              title: "Webhook CI",
              content: "If you want to auto-deploy an app based on new changes in source code hosted in Git, a new Docker image released, or any custom Github actions. You can use the webhook endpoint to re-deploy apps."
            },
            {
              icon: <WrenchScrewdriverIcon className="w-6 h-6 text-primary-700" />,
              title: "Automation in Core",
              content: "Swiftwave manages all servers and runs periodic operations to keep configurations in sync. So, once you've successfully onboarded your server, you probably won't need to touch it again."
            }
          ]}
        />
        {/* Outro */}
        <InfoGroup
          title="We ❤️ Open Source"
          subtitle="We want to make SwiftWave better day by day"
          infos={[]}
        />
      </div>

      <Footer />
    </>
  );
}
