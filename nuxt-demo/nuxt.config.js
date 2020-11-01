export default {
  target: "static",

  head: {
    title: "Nuxt Demo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Fira+Mono&family=Fira+Sans:wght@400;600&display=swap"
      }
    ],
    script: [
      {
        type: "module",
        src: "https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"
      },
      {
        nomodule: "",
        src: "https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"
      }
    ]
  },

  css: [
    { src: "@/assets/custom-bootstrap", lang: "scss" },
    "@/assets/variables.css"
  ],

  plugins: [
    "@/plugins/aos.client",
    "@/plugins/highlight",
    "@/plugins/ionicons",
    "@/plugins/vue-lazyload"
  ],

  components: true,

  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/stylelint-module"],

  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios"],

  axios: {},

  content: {},

  build: {
    postcss: {
      plugins: {
        "postcss-preset-env": {
          stage: 1,
          importFrom: "./assets/variables.css"
        },
        "rucksack-css": {}
      }
    }
  }
};
