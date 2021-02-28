---
title: How to Use Highlight.js in a Nuxt Project
topic: Highlight
meta:
  - name: description
    content: Steps to use highlight.js in a Nuxt project.
---

[Highlight.js](https://highlightjs.org/) is a syntax highlighting tool for the Web.

[Vue Highlight.js](https://github.com/gluons/vue-highlight.js/) is a syntax highlighter component for Vue.

> Before, I used [Prism](https://github.com/PrismJS/prism) for syntax highlighting with [vue-prism-component](https://github.com/egoist/vue-prism-component) as the wrapper. But I find the plugin, e.g. [Autolinker](https://prismjs.com/plugins/autolinker/) does not always work, so I switched to this.

## :footprints: Steps

1. Create a Nuxt project and install highlight.js and Vue Highlight.js. To use highlight.js v10, use the next version of Vue Highlight.js.

```bash
npx create-nuxt-app nuxt-demo
cd nuxt-demo
npm i highlight.js vue-highlight.js@next
```

2. Create Highlight.js plugin in `plugins/highlight.js`. Import and register the languages, as well the style you want to use. I do not see `html` in the folder so I use `xml` instead.

<<< @/nuxt-demo/plugins/highlight.js

3. Register the plugin in `nuxt.config.js`.

```js
export default {
  plugins: ["@/plugins/highlight"]
};
```

4. Use Highlight.js, e.g. in `pages/highlight.vue`.

<<< @/nuxt-demo/pages/highlight.vue

## :book: Explanation

- Highlight code with `highlight-code` component.
- Specify the [language](https://github.com/highlightjs/highlight.js/blob/master/SUPPORTED_LANGUAGES.md) in the `lang` attribute.
- It does not apply a [style](https://github.com/highlightjs/highlight.js/tree/master/src/styles) by default so you need to import one for this to work.
