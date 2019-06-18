module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/vue"
  ],
  plugins: ["prettier"],
  rules: { "vue/no-v-html": "off", "vue/v-bind-style": "off" }
};
