---
title: How to Use Highlight.js in a Vue Project
topic: Highlight
version: 2
meta:
  - name: description
    content: Steps to use Highlight.js in a Vue project.
---

[Highlight.js](https://highlightjs.org/) is a syntax highlighting tool for the Web.

[Vue Highlight.js](https://github.com/gluons/vue-highlight.js/) is a syntax highlighter component for Vue.

> Before, I used [Prism](https://github.com/PrismJS/prism) for syntax highlighting with [vue-prism-component](https://github.com/egoist/vue-prism-component) as the wrapper. But I find the plugin, e.g. [Autolinker](https://prismjs.com/plugins/autolinker/) does not always work, so I switched to this.

## :footprints: Steps

1. Create a Vue project and install highlight.js and Vue Highlight.js. Vue Highlight.js does not support highlight.js v10 at the time of this writing so just install the latest v9 version.

```bash
npm i -g @vue/cli
vue create vue2-demo
cd vue2-demo
npm i highlight.js@9.18.3 vue-highlight.js
```

2. Register Highlight.js in `src/main.js`. Import and register the languages, as well the style you want to use. I do not see `html` in the folder so I use `xml` instead.

```js
import VueHighlightJS from "vue-highlight.js";

import javascript from "highlight.js/lib/languages/javascript";
import scss from "highlight.js/lib/languages/scss";
import xml from "highlight.js/lib/languages/xml";

import "highlight.js/styles/dracula.css";

Vue.use(VueHighlightJS, {
  languages: {
    javascript,
    scss,
    xml
  }
});
```

3. Use Highlight.js, e.g. in `src/views/highlight.vue`.

<<< @/vue2-demo/src/views/highlight.vue

## :book: Explanation

- Highlight code with `highlight-code` component.
- Specify the [language](https://github.com/highlightjs/highlight.js/blob/master/SUPPORTED_LANGUAGES.md) in the `lang` attribute.
- It does not apply a [style](https://github.com/highlightjs/highlight.js/tree/master/src/styles) by default so you need to import one for this to work.
