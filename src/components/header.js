import { CloudIcon } from "@heroicons/react/24/outline";
import React from "react";


export default function Header() {
    return (
        <div className="mt-20 md:mt-40 mb-10 w-full flex flex-col items-center">
            {/* micro announcement bar */}
            <div className="text-sm md:text-lg text-black px-4 md:px-6 py-1.5 border border-solid border-gray-300 rounded-full font-Poppins mb-14">
                🚀  v2.x released. <span className="font-bold">Check here</span>
            </div>
            {/* tagline */}
            <div className="font-Pacifico text-center text-2xl md:text-6xl leading-loose md:leading-loose">
                <span className="text-primary-700">Simple Lightweight</span> PaaS<br />
                for self-hosting
            </div>
            {/* cta */}
            <div className="mt-20 flex flex-row justify-center gap-3 border-[3px] border-solid border-primary-500 rounded-lg px-6 md:px-12 py-3 md:py-4 text-lg cursor-pointer font-Roboto font-medium hover:bg-primary-500 hover:text-white duration-300">
                <CloudIcon className="w-6 h-6" /><span>Self-host Swiftwave</span>
            </div>
        </div>
    );
}
