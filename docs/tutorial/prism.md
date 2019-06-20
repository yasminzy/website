---
title: How to Use Prism in a Vue/Nuxt Project
topic: Prism
meta:
  - name: description
    content: Steps to use Prism in a Vue/Nuxt project.
---

## :computer: Installation

### Vue

First, install:

- [Prism](https://www.npmjs.com/package/prismjs)
- [vue-prism-component](https://www.npmjs.com/package/vue-prism-component)

```bash{2}
cd vue-demo
npm install prismjs vue-prism-component
```

In `src/main.js`:

<<< @/vue-demo/src/main.js{36-42}

In this example, I use the funky theme. Here are the available themes:

- prism-coy
- prism-dark
- prism-funky
- prism-okaidia
- prism-solarizedlight
- prism-tomorrow
- prism-twilight
- prism

I also add an SCSS [component](https://prismjs.com/index.html#languages-list). Prims supports Markup, CSS, JavaScript, and C-like by default so we do not need to import them.

Prism supports some [plugins](https://prismjs.com/index.html#plugins). I use [autolinker](https://prismjs.com/plugins/autolinker) here to make the link in the code works.

### Nuxt

First, install the packages.

```bash{2}
cd nuxt-demo
npm install prismjs vue-prism-component
```

In `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{31}

In `plugins/prism.js`:

<<< @/nuxt-demo/plugins/prism.js

## :arrow_right: Usage

Now we can use the `prism` component. Specify the language in the `language` attribute. The default is markup.

In `src/views/prism.vue` or `pages/prism.vue`:

<<< @/vue-demo/src/views/prism.vue{6,10-13,17-22,30-33}
