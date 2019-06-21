require("dotenv").config();
const webpack = require("webpack");

const developmentSidebar = [
  {
    title: "Tutorial",
    collapsable: false,
    children: [
      ["aos", "AOS"],
      ["bootstrap", "Bootstrap"],
      ["chart", "Chart"],
      ["google-maps", "Google Maps"],
      ["ionicons", "Ionicons"],
      ["postcss", "PostCSS"],
      ["prism", "Prism"],
      ["vue-lazyload", "Vue Lazyload"],
      ["vuex", "Vuex"],
      ["vuex-axios", "Vuex Axios"]
    ]
  }
];

module.exports = {
  configureWebpack: config => {
    return { plugins: [new webpack.EnvironmentPlugin({ ...process.env })] };
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Fira+Mono|Fira+Sans:400,600&display=swap"
      }
    ],
    ["script", { src: "https://unpkg.com/ionicons/dist/ionicons.js" }]
  ],
  locales: {
    "/": {
      lang: "en",
      title: "Yasmin ZY",
      description: "Front-end web developer based in Bandung."
    }
  },
  plugins: [
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github",
        owner: "yasminzy",
        repo: "yasminzy",
        clientId: process.env.VUE_APP_CLIENT_ID,
        clientSecret: process.env.VUE_APP_CLIENT_SECRET
      }
    ],
    ["@vuepress/google-analytics", { ga: "UA-90535731-3" }],
    ["sitemap", { hostname: "https://www.yasminzy.com" }]
  ],
  themeConfig: {
    docsDir: "docs",
    locales: {
      "/": {
        label: "English",
        lastUpdated: "Last updated",
        nav: [
          { text: "Home", link: "/" },
          { text: "Portfolio", link: "/portfolio" },
          {
            text: "Tutorial",
            items: [
              { text: "Vue.js", link: "/vue/" },
              { text: "Nuxt.js", link: "/nuxt/" }
            ]
          }
        ],
        sidebar: { "/vue/": developmentSidebar, "/nuxt/": developmentSidebar }
      }
    },
    logo: "/logo.png",
    repo: "yasminzy/yasminzy"
  }
};
