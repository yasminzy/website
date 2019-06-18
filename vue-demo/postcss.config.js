module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 0,
      importFrom: "./src/assets/variables.css"
    },
    "rucksack-css": {}
  }
};
