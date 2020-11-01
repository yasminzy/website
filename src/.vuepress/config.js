require("dotenv").config();
const webpack = require("webpack");

const developmentSidebar = [
  {
    title: "Tutorial",
    collapsable: false,
    children: [
      ["aos", "AOS"],
      ["bootstrap", "Bootstrap"],
      ["chart", "Chart.js"],
      ["highlight", "Highlight.js"],
      ["ionicons", "Ionicons"],
      ["postcss", "PostCSS"],
      ["vue-lazyload", "Vue Lazyload"],
      ["vuex", "Vuex"],
      ["vuex-axios", "Vuex Axios"]
    ]
  }
];

module.exports = {
  configureWebpack: () => {
    return { plugins: [new webpack.EnvironmentPlugin({ ...process.env })] };
  },

  title: "Yasmin ZY",

  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Fira+Mono&family=Fira+Sans:wght@400;600&display=swap"
      }
    ]
  ],

  locales: {
    "/": {
      lang: "en",
      title: "Yasmin ZY",
      description: "Front-end web developer based in Bandung."
    }
  },

  cache: false,

  themeConfig: {
    logo: "/logo.png",
    locales: {
      "/": {
        nav: [
          { text: "Home", link: "/" },
          { text: "Portfolio", link: "/portfolio" },
          {
            text: "Tutorial",
            items: [
              { text: "Vue.js", link: "/vue/" },
              { text: "Nuxt.js", link: "/nuxt/" }
            ]
          },
          {
            text: "YouTube",
            link: "http://www.youtube.com/c/YasminZulfatiYusrina",
            target: "_blank"
          }
        ],
        sidebar: { "/vue/": developmentSidebar, "/nuxt/": developmentSidebar },
        lastUpdated: "Last updated"
      }
    },
    repo: "yasminzy/website",
    smoothScroll: true
  },

  plugins: [
    "@vuepress/plugin-back-to-top",
    ["@vuepress/google-analytics", { ga: "UA-90535731-3" }],
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github",
        owner: "yasminzy",
        repo: "website",
        clientId: process.env.VUE_APP_CLIENT_ID,
        clientSecret: process.env.VUE_APP_CLIENT_SECRET
      }
    ],
    [
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "/",
        indexSuffix: "/",
        notFoundPath: "/404.html"
      }
    ],
    ["sitemap", { hostname: "https://yasminzy.com" }]
  ],

  evergreen: true
};
