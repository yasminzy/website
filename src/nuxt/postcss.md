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

2. I want to use [custom properties](https://preset-env.cssdb.org/features#custom-properties) and [custom media queries](https://preset-env.cssdb.org/features#custom-media-queries) so I will create a .css file to store the variables, e.g. in `assets/variables.css`.

<<< @/nuxt-demo/assets/variables.css

3. Register the variables and plugins in `nuxt.config.js`. Pass the [options](https://github.com/csstools/postcss-preset-env#options) as well.

```js
export default {
  css: ["@/assets/variables.css"],
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
```

4. Use PostCSS, e.g. in `pages/postcss.vue`.

<<< @/nuxt-demo/pages/postcss.vue

## :book: Explanation

### Settings

- I use [`stage`](https://github.com/csstools/postcss-preset-env#stage) 1 because I want to use a couple features that are still at stage 1. The default is stage 2. Instead of using lower stage, you can also add the [`features`](https://github.com/csstools/postcss-preset-env#features) you want to use.
- [Features page](https://preset-env.cssdb.org/features) show the stage of each feature.

### Usage

- Rucksack features used by `.wrapper`:
  - [responsive typography](https://www.rucksackcss.org/docs#responsive-type)
  - [all the easings](https://www.rucksackcss.org/docs#easings)
- `font-family: system-ui;` is from the postcss-preset-env's [system-ui font family](https://preset-env.cssdb.org/features#system-ui-font-family) feature.
- `& li`, `& a`, and `&:hover` use the [nesting rules](https://preset-env.cssdb.org/features#nesting-rules).
