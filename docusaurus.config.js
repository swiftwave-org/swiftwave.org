// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SwiftWave",
  tagline: "Self-hosted Open Source Lightweight PaaS solution",
  favicon: "img/favicon.ico",
  url: "https://swiftwave.org",
  baseUrl: "/",
  organizationName: "swiftwave-org", // Usually your GitHub org/user name.
  projectName: "swiftwave", // Usually your repo name.
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
        },
        blog: {
          showReadingTime: true,
        },
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
      colorMode: {
        defaultMode: "dark",
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
      announcementBar: {
          id: 'funding',
          content:
            '🚧 This website is under development',
        backgroundColor: '#FAF9F6',
        textColor: '#091E42',
        isCloseable: false,
      },
      navbar: {
        title: "SwiftWave",
        logo: {
          alt: "SwiftWave Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/docs",
            label: "Introduction",
            position: "left",
          },
          {
            to: "/docs/why_swiftwave",
            label: "Why SwiftWave?",
            position: "left",
          },
          {
            to: "/docs/cli",
            label: "CLI Docs",
            position: "left",
          },
          // {
          //   to: "blog/",
          //   activeBasePath: "blog/",
          //   label: "Blog",
          //   position: "left",
          // },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
          {
            type: 'custom-github-star-btn',
            position: 'right'
          }
        ],
      },
      footer: {
        style: "dark",
        links: [
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
                label: "Quick DNS",
                to: "https://github.com/swiftwave-org/dns"
              }
            ],
          },
          {
            title: "Documentation",
            items: [
              {
                label: "CLI Reference",
                to: "/docs/cli",
              },
              {
                label: "GraphQL API Reference",
                to: "https://graphql.docs.swiftwave.org/"
              },
              {
                label: "REST API Reference",
                to: "https://github.com/swiftwave-org/swiftwave/blob/develop/docs/rest_api.md"
              }
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Join on Slack",
                to: "https://join.slack.com/t/swiftwave-team/shared_invite/zt-21n86aslx-aAvBi3hv1GigVA_XoXiu4Q",
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
        copyright: `Copyright © ${new Date().getFullYear()} SwiftWave, All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
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
    }),
};

module.exports = config;
