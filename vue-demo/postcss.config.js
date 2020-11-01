module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 1,
      importFrom: "./src/assets/variables.css"
    },
    "rucksack-css": {}
  }
};
