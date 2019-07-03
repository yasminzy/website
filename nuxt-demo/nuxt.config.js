const webpack = require("webpack");

export default {
  mode: "universal",
  head: {
    title: process.env.npm_package_name || "Nuxt Demo - Yasmin ZY",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Fira+Mono|Fira+Sans:400,600&display=swap"
      }
    ],
    script: [{ src: "https://unpkg.com/ionicons/dist/ionicons.js", body: true }]
  },
  loading: { color: "#Hex	2196F3" },
  css: [
    "@/assets/variables.css",
    { src: "@/assets/custom-bootstrap", lang: "scss" }
  ],
  plugins: [
    "@/plugins/bootstrap",
    "@/plugins/google-maps",
    "@/plugins/vue-lazyload",
    { src: "@/plugins/aos", ssr: false },
    { src: "@/plugins/chart", ssr: false },
    { src: "@/plugins/prism", ssr: false }
  ],
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv"],
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      },
      plugins: {
        "postcss-preset-env": {
          stage: 0,
          importFrom: "./assets/variables.css"
        },
        "rucksack-css": {}
      }
    },
    extend(config, ctx) {},
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  },
  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    VUE_APP_MARKDOWN_CLIENT_ID: process.env.VUE_APP_MARKDOWN_CLIENT_ID,
    VUE_APP_MARKDOWN_CLIENT_SECRET: process.env.VUE_APP_MARKDOWN_CLIENT_SECRET
  }
};
