// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SwiftWave",
  tagline: "Self-hosted Open Source Lightweight PaaS solution",
  favicon: "img/favicon.ico",
  url: "https://swiftwave.org",
  baseUrl: "/",
  organizationName: "swiftwave-org",
  projectName: "swiftwave",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ docPath }) => {
            const nextVersionDocsDirPath = "docs";
            return `https://github.com/swiftwave-org/swiftwave.org/edit/main/${nextVersionDocsDirPath}/${docPath}`;
          },
          disableVersioning: false,
          versions: {
            current: {
              label: `Develop 🚧`,
            },
          },
          admonitions: {
            keywords: [
              'secondary',
              'info',
              'success',
              'danger',
              'note',
              'tip',
              'warning',
              'important',
              'caution',
            ],
          }
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  plugins: [
    require.resolve("@chatwoot/docusaurus-plugin"),
    require.resolve("docusaurus-plugin-image-zoom"),
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-XNGNG43806",
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'title', content: 'SwiftWave' },
        { name: 'description', content: 'SwiftWave is a self-hosted open source lightweight PaaS solution. It is designed to be easy to use and deploy applications.' },
        { name: 'og:image', content: '/img/banner.png' },
        { name: 'og:title', content: 'SwiftWave' },
        { name: 'og:description', content: 'SwiftWave is a self-hosted open source lightweight PaaS solution. It is designed to be easy to use and deploy applications.' },
        { name: 'keywords', content: 'deployment, application, hosting, vps, docker, swarm, ssl', },
        { name: 'twitter:card', content: '/img/banner.png' },
      ],
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      zoom: {
        selector: "figure[data-zoomable] > img",
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
      // announcementBar: {
      //     id: 'funding',
      //     content:
      //       '🚧 This website is under development',
      //   backgroundColor: '#FAF9F6',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      navbar: {
        title: "SwiftWave",
        logo: {
          alt: "SwiftWave Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/docs",
            label: "Docs",
            position: "left",
          },
          {
            to: "/docs/contribution_guideline",
            label: "Contribute",
            position: "left",
          },
          {
            to: "/docs/support_us",
            label: "Support Us",
            position: "left",
          },
          // {
          //   to: "blog/",
          //   activeBasePath: "blog/",
          //   label: "Blog",
          //   position: "left",
          // },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'custom-github-star-btn',
            position: 'right'
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Documentation",
                to: "/docs",
              },
              {
                label: "GraphQL API Reference",
                to: "https://graphql.docs.swiftwave.org/"
              },
              {
                label: "CLI Reference",
                to: "/docs/cli",
              },
              {
                label: "REST API Reference",
                to: "https://github.com/swiftwave-org/swiftwave/blob/develop/docs/rest_api.md"
              }
            ],
          },
          {
            title: "Important Service",
            items: [
              {
                label: "App Store Metadata",
                to: "https://github.com/swiftwave-org/app-store",
              },
              {
                label: "Stats Ninja",
                to: "https://github.com/swiftwave-org/stats-ninja",
              },
              {
                label: "Volume Toolkit",
                to: "https://github.com/swiftwave-org/volume-toolkit"
              },
              {
                label: "UDP Proxy",
                to: "https://github.com/swiftwave-org/udpproxy"
              }
            ],
          },
          {
            title: "Source Code",
            items: [
              {
                label: "SwiftWave Service",
                to: "https://github.com/swiftwave-org/swiftwave",
              },
              {
                label: "SwiftWave Dashboard",
                to: "https://github.com/swiftwave-org/dashboard",
              },
              {
                label: "Custom HAProxy Image",
                to: "https://github.com/swiftwave-org/haproxy"
              },
              {
                label: "Quick DNS",
                to: "https://github.com/swiftwave-org/dns"
              }
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                to: "https://slack.swiftwave.org/",
              },
              {
                label: "GitHub",
                to: "https://github.com/swiftwave-org",
              },
              {
                label: "Mail Us",
                to: "mailto:support@swiftwave.org",
              },
            ],
          },
        ],
        copyright: `Copyright © 2023 - ${new Date().getFullYear()} SwiftWave, All rights reserved.`,
      },
      prism: {
        additionalLanguages: ['bash']
      },
      chatwoot: {
        websiteToken: "fHNAVUAniYVj5DzwyRNxvxSC",
        baseURL: "https://app.chatwoot.com", // optional
        enableInDevelopment: false, // optional
        chatwootSettings: {
          hideMessageBubble: false,
          position: "right", // This can be left or right
          locale: "en", // Language to be set
          useBrowserLanguage: false, // Set widget language from user's browser
          darkMode: "auto", // [light, auto]
          type: "expanded_bubble",
          launcherTitle: "Need Help",
        },
      },
      algolia: {
        appId: '1PTIIXB1YZ',
        apiKey: '1693e450556e94deec27f9e7cd320d4c',
        indexName: 'swiftwave',
        insights: true,
        contextualSearch: true,
      },
    }),
};

module.exports = config;
