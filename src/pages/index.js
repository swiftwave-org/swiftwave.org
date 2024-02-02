import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeaderImage from "../img/swiftwave-header.png"

// max-w-screen-xl

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout wrapperClassName="bg-gray-900" description="Description will go into a meta tag in <head />">
      <main className="flex flex-col items-center justify-center px-4">
        {/* Header */}
        <section className="max-w-screen-xl flex flex-col items-center justify-center py-8">
          <img src={HeaderImage} />
          {/* Tagline */}
          <p className="text-2xl lg:text-4xl mt-12 mb-6"><b className="text-[#805AD5]">SwiftWave :</b> Your self-hosted lightweight PaaS solution</p>
          {/* Buttons */}
          <div className="flex flex-col lg:flex-row flex-wrap	gap-4 mt-5 w-full lg:w-fit">
            <a className="button button--outline button--secondary button--lg" href="/docs/getting_started">🚀 Getting Started</a>
            <a className="button button--outline button--secondary button--lg" href="https://github.com/swiftwave-org/swiftwave" target="_blank">⭐ Star in GitHub</a>
          </div>
        </section>
        {/* For Whom ? */}
        <section className="max-w-screen-xl flex flex-col items-center justify-center mt-8 mb-6">
          <p className="text-xl lg:text-4xl font-semibold">For Whom ?</p>
          <div className="row gap-4 lg:gap-0">
            <div className="col col--4">
              <div className="card h-full">
                <div className="card__header">
                  <h3>🎓 Student</h3>
                </div>
                <div className="card__body">
                  <p>
                    Deploy your project and bring your side hustle to life in an instant.<br></br>
                    ✅ No Linux knowledge required.<br></br>
                    ✅ No Networking knowledge required.<br></br>
                    ✅ No Time wasted.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card h-full">
                <div className="card__header">
                  <h3>👷‍♂️ Builder</h3>
                </div>
                <div className="card__body">
                  <p>
                    Whether you're building on weekends, participating in hackathons, or conducting experiments, Swiftwave has you covered. Deploying takes just 5 minutes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card h-full">
                <div className="card__header">
                  <h3>🏢 Small Business</h3>
                </div>
                <div className="card__body">
                  <p>
                    Launch your product, host a couple of applications, and minimize cloud expenses. Swiftwave lets you host your applications without the need for a dedicated devops team.                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Swiftwave ? */}
        <section className="max-w-screen-xl flex flex-col items-center justify-center mt-8 mb-6">
          <p className="text-2xl lg:text-4xl font-semibold mb-0">Why Swiftwave ?</p>
          <p className="mt-3 font-medium">😂 Another Orchestrator ? <b>No of-course 🫡</b></p>
          <div className="row gap-4 lg:gap-0">
            <div className="col col--4">
              <div className="card h-full">
                <div className="card__header">
                  <h3>🎈 Lightweight</h3>
                </div>
                <div className="card__body">
                  <p>
                    SwiftWave has very low memory footprint. If you have a tiny server (1GB Ram 1vCPU), you can still run SwiftWave with 2~3 applications.<br></br><br></br>
                    SwiftWave + HaProxy + Local Postgres = ~250MB<br></br><br></br>
                    <i>If you can use any remote postgresql server, you can run more applications.</i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card h-full">
                <div className="card__header">
                  <h3>🔋 Batteries Included</h3>
                </div>
                <div className="card__body">
                  <p>
                  ➡️ Dockerfile Generation Support<br></br>
                  ➡️ Custom Domain Support<br></br>
                  ➡️ Auto SSL Certificate Generation (Through Let's Encrypt)<br></br>
                  ➡️ Private Git & OCI Registry Support<br></br>
                  ➡️ Persistent Storage<br></br>
                  ➡️ Webhook Based Continuous Deployment<br></br>
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card h-full">
                <div className="card__header">
                  <h3>📈 Scalable</h3>
                </div>
                <div className="card__body">
                  <p>
                  SwiftWave is designed to be scalable as well as lightweight. It's possible due to it's separate working architecture.<br></br>
                  ➡️ <b>Standalone :</b> Suitable for installation on a single server.<br></br>
                  ➡️ <b>Cluster :</b> Suitable for high traffic applications in a multi-server environment. [Experimental]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End */}
        <section className="flex flex-row max-w-screen-xl flex flex-col my-16 text-center">
          <p className="text-2xl lg:text-4xl font-semibold ">We ❤️ Open Source</p>
          <p className="text-xl lg:text-2xl">We want to make SwiftWave better day by day</p>
        </section>
      </main>
    </Layout>
  );
}
