import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout wrapperClassName="bg-gray-900" description="Description will go into a meta tag in <head />">
      <main>
        {/* Header Section */}
        <section>
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-xl mb-4 text-3xl font-extrabold tracking-wide lg:tracking-tight leading-none lg:text-5xl text-white">Self-hosted Lightweight PaaS solution</h1>
              <p className="max-w-xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">Easily simplify your application deployment and VPS management, all without the hassle</p>
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 mt-10">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-900 no-underline hover:no-underline">
                  Get started
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border-solid border-2 border-white rounded-lg hover:bg-gray-700 focus:ring-8 text-white no-underline hover:no-underline">
                  <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  Star on GitHub
                </a>
              </div>
            </div>
            <div className="mt-5 lg:mt-0 lg:col-span-5 lg:flex">
              <img src="/img/architecture.gif" className="w-fit h-fit rounded-md" alt="mockup" />
            </div>
          </div>
        </section>
        {/* Features Section */}
        <div className="py-6 sm:py-8 lg:py-12 mt-10">
          <div className="mx-auto px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">Our competitive advantage</h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="grid gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 max-w-screen-xl">
                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">Growth</h3>
                    <p className="mb-2 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                    <a href="#" className="font-bold text-primary-500 transition duration-100 hover:text-primary-600 active:text-primary-700">
                      More
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">Security</h3>
                    <p className="mb-2 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                    <a href="#" className="font-bold text-primary-500 transition duration-100 hover:text-primary-600 active:text-primary-700">
                      More
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">Cloud</h3>
                    <p className="mb-2 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                    <a href="#" className="font-bold text-primary-500 transition duration-100 hover:text-primary-600 active:text-primary-700">
                      More
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">Speed</h3>
                    <p className="mb-2 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                    <a href="#" className="font-bold text-primary-500 transition duration-100 hover:text-primary-600 active:text-primary-700">
                      More
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">Support</h3>
                    <p className="mb-2 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                    <a href="#" className="font-bold text-primary-500 transition duration-100 hover:text-primary-600 active:text-primary-700">
                      More
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">Dark Mode</h3>
                    <p className="mb-2 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                    <a href="#" className="font-bold text-primary-500 transition duration-100 hover:text-primary-600 active:text-primary-700">
                      More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter Section */}
        <section className="bg-white dark:bg-gray-900 mb-7">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
              <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
              <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
              <form action="#">
                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Email address
                    </label>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <input
                      className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      required=""
                    ></input>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="text-center mx-auto max-w-screen-sm text-sm text-gray-500 newsletter-form-footer dark:text-gray-300">
                  We dont send spam so dont worry. Unsubscribe at any time.
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
