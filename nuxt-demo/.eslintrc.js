module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    plugins: ["@babel"]
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {}
};
