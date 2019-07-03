---
title: How to Use Prism in a Nuxt Project
topic: Prism
meta:
  - name: description
    content: Steps to use Prism in a Nuxt project.
---

[Prism](https://github.com/PrismJS/prism) is a lightweight, robust, elegant syntax highlighting library.

## :footprints: Steps

1. Create a Nuxt project and install Prism and Vue Prism Component.

```bash
npx create-nuxt-app nuxt-demo
cd nuxt-demo
npm i prismjs vue-prism-component
```

2. Create Prism plugin in `plugins/prism.js`.

<<< @/nuxt-demo/plugins/prism.js

3. Register the plugin in `nuxt.config.js`.

```js
export default {
  plugins: [{ src: "@/plugins/prism", ssr: false }]
};
```

4. Use Prism, e.g. in `pages/prism.vue`.

<<< @/nuxt-demo/pages/prism.vue

## :book: Explanation

- Highlight code with `prism` component.
- Specify the language in the `language` attribute. It is markup by default.
- Available themes:
  - prism-coy
  - prism-dark
  - prism-funky
  - prism-okaidia
  - prism-solarizedlight
  - prism-tomorrow
  - prism-twilight
  - prism
- Prims supports Markup, CSS, JavaScript, and C-like by default. Other [component](https://prismjs.com/index.html#languages-list), e.g. SCSS need to be imported.
- [Plugin](https://prismjs.com/index.html#plugins) used:
  - [autolinker](https://prismjs.com/plugins/autolinker) to make the link in the code works.<Badge text="broken" type="error" vertical="middle" />
