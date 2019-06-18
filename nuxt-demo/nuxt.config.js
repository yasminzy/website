const webpack = require("webpack");
import pkg from "./package";

export default {
  mode: "universal",
  head: {
    title: "Nuxt Demo - Yasmin ZY",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [{ src: "https://unpkg.com/ionicons/dist/ionicons.js", body: true }]
  },
  loading: { color: "#2196F3" },
  css: ["~/assets/variables.css"],
  plugins: [
    "~/plugins/bootstrap",
    "~/plugins/google-maps",
    "~/plugins/vue-lazyload",
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/chart", ssr: false },
    { src: "~/plugins/prism", ssr: false }
  ],
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv"],
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
    postcss: {
      plugins: {
        "postcss-preset-env": {
          stage: 0,
          importFrom: "./assets/variables.css"
        },
        "rucksack-css": {}
      }
    }
  },
  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    VUE_APP_MARKDOWN_CLIENT_ID: process.env.VUE_APP_MARKDOWN_CLIENT_ID,
    VUE_APP_MARKDOWN_CLIENT_SECRET: process.env.VUE_APP_MARKDOWN_CLIENT_SECRET
  }
};
