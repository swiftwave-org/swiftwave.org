import React from "react";
import Logo from "../img/logo.png"
import Link from "@docusaurus/Link";
import GithubStarBtn from "./github-star-btn";
import { Bars4Icon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = React.useState(false);
  const links = [
    { name: "Docs", href: "/docs" },
    { name: "App Store", href: "/docs/dashboard/swiftwave_app_store"},
    { name: "Community", href: "http://community.swiftwave.org/" },
    { name: "Contribute", href: "/docs/contribution_guideline" },
    { name: "Support", href: "/docs/support_us" },
  ]

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
          <img src={Logo} className="w-12 h-12" />
          <div className="max-h-full flex flex-col items-start justify-center">
            <div className="text-2xl font-Comfortaa font-bold p-0 m-0 leading-tight">swiftwave</div>
            <p className="p-0 m-0 text-sm leading-tight">open source paas</p>
          </div>
        </div>
        {/* Desktop Links */}
        <div className="flex-row gap-8 items-center hidden md:flex">
          {
            links.map((link) => (
              <Link className="custom-navbar-link" key={link.name} href={link.href}>{link.name}</Link>
            ))
          }
        </div>
        {/* Github btn */}
        <GithubStarBtn />
        {/* Mobile Hamburger */}
        <div className="h-8 w-8 p-0.5 text-gray-600 rounded-md transition-all block md:hidden" onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}>
          {
            isMobileNavbarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars4Icon className="h-6 w-6" />
          }
        </div>
      </div>
      {/* Mobile Links */}
      {
        isMobileNavbarOpen && (
          <div className="flex flex-col gap-2 mt-4 mb-2 bg-gray-50 p-2 rounded-md">
            {
              links.map((link) => (
                <Link className="custom-navbar-link" key={link.name} href={link.href}>{link.name}</Link>
              ))
            }
          </div>
        )
      }
    </>
  );
}
