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
          '🚧 This website is under development. All the documentation will be released soon.',
      backgroundColor: '#FAF9F6',
      textColor: '#091E42',
      isCloseable: false,
    },
      algolia: {
        appId: "WY65BML5H8",
        apiKey: "a97eb71e909eda795440b5f86cd42381",
        indexName: "docs",
        contextualSearch: true,
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },
      },
      navbar: {
        title: "SwiftWave",
        logo: {
          alt: "SwiftWave Logo",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "docSidebar",
          //   label: "Docs",
          //   position: "left",
          // },
          // {
          //   to: "blog/",
          //   activeBasePath: "blog/",
          //   label: "Blog",
          //   position: "left",
          // },
          {
            href: "https://github.com/swiftwave-org/swiftwave",
            label: "GitHub",
            position: "right",
          },
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
