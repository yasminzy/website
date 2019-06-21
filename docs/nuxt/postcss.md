---
title: How to Use PostCSS in a Nuxt Project
topic: PostCSS
meta:
  - name: description
    content: Steps to use PostCSS in a Nuxt project.
---

[PostCSS](https://github.com/postcss/postcss) is a tool for transforming styles with JS plugins.

> [Plugins](https://www.postcss.parts/) used in this tutorial:
>
> - [postcss-preset-env](https://preset-env.cssdb.org/)
> - [rucksack-css](https://www.rucksackcss.org/)

## :footprints: Steps

1. Create a Nuxt project and install PostCSS Preset Env and Rucksack..

```bash
npx create-nuxt-app nuxt-demo
cd nuxt-demo
npm i postcss-preset-env rucksack-css
```

2. Create a file to store variables, e.g. `assets/variables.css`.

<<< @/nuxt-demo/assets/variables.css

3. Register the plugins and and pass the [options](https://github.com/csstools/postcss-preset-env#options) in `nuxt.config.js`.

```js
export default {
  build: {
    postcss: {
      plugins: {
        "postcss-preset-env": {
          stage: 0,
          importFrom: "./assets/variables.css"
        },
        "rucksack-css": {}
      }
    }
  }
};
```

4. Use PostCSS, e.g. in `pages/postcss.vue`.

<<< @/nuxt-demo/pages/postcss.vue

## :book: Explanation

### Settings

- `stage` 0 polyfills experimental CSS features i.e. [nesting rules](https://preset-env.cssdb.org/features#nesting-rules).
- [Features page](https://preset-env.cssdb.org/features) show the stage of each feature.
- `importFrom` specifies the source of the variables.

### Usage

- Rucksack features used by `.container`:
  - [responsive typography](https://www.rucksackcss.org/docs#responsive-type)
  - [all the easings](https://www.rucksackcss.org/docs#easings)
- `font-family: system-ui;` is from the postcss-preset-env's [system-ui font family](https://preset-env.cssdb.org/features#system-ui-font-family) feature.
- `& li`, `& a`, and `&:hover` use the nesting rules from postcss-preset-env.
- `@media (--sm)` and other sizes are from the [custom media queries](https://preset-env.cssdb.org/features#custom-media-queries).
