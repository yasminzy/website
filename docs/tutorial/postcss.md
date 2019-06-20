---
title: How to Use PostCSS in a Vue/Nuxt Project
topic: PostCSS
meta:
  - name: description
    content: Steps to use PostCSS tool in a Vue/Nuxt project.
---

There are lots of [plugins](https://www.postcss.parts/) for PostCSS. In this tutorial, I will use 2 plugins, which are:

- [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env)
- [rucksack-css](https://www.npmjs.com/package/rucksack-css)

## :computer: Installation

### Vue

First, install the plugins:

```bash{2}
cd vue-demo
npm install postcss-preset-env rucksack-css
```

In `postcss.config.js`:

<<< @/vue-demo/postcss.config.js

In this example, I passed 2 [options](https://github.com/csstools/postcss-preset-env#options).

- `stage` 0 polyfills experimental CSS features. I need this stage because I want to use the [nesting rules](https://preset-env.cssdb.org/features#nesting-rules) feature. Check out the [features page](https://preset-env.cssdb.org/features) to know what stage you need.
- `importFrom` specifies the source of the variables you will use.

In `src/main.js`:

<<< @/vue-demo/src/main.js{34}

### Nuxt

First, install the plugins:

```bash{2}
cd nuxt-demo
npm install postcss-preset-env rucksack-css
```

In `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{17,45-53}

## :arrow_right: Usage

Create a `.css` file to write your variables, in my case `variables.css` in `src/assets` or `assets`.

In my `src/assets/variables.css` or `assets/variables.css`:

<<< @/vue-demo/src/assets/variables.css

Then, in `src/views/postcss.vue` or `pages/postcss.vue`:

<<< @/vue-demo/src/views/postcss.vue{64-66,69-88}

We do not need to write `lang="postcss"` to make this work, but without it, we will not have a proper syntax highlighting.

For the `.container`, I use 2 features from Rucksack:

- [responsive typography](https://www.rucksackcss.org/docs#responsive-type)
- [all the easings](https://www.rucksackcss.org/docs#easings)

Try changing the browser window size in the demos above.

`font-family: system-ui;` is from the postcss-preset-env's [system-ui font family](https://preset-env.cssdb.org/features#system-ui-font-family) feature.

The `& li`, `& a`, and `&:hover` are also from postcss-preset-env. They use the nesting rules I mentioned earlier.

`@media (--sm)` and other sizes are from the [custom media queries](https://preset-env.cssdb.org/features#custom-media-queries). This feature makes the code feels easier to read.
