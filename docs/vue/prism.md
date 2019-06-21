---
title: How to Use Prism in a Vue Project
topic: Prism
meta:
  - name: description
    content: Steps to use Prism in a Vue project.
---

[Prism](https://github.com/PrismJS/prism) is a lightweight, robust, elegant syntax highlighting library.

## :footprints: Steps

1. Create a Vue project and install Prism and Vue Prism Component.

```bash
npm i -g @vue/cli
vue create vue-demo
cd vue-demo
npm i prismjs vue-prism-component
```

2. Register Prism in `src/main.js`.

```js
import "prismjs";
import "prismjs/themes/prism-funky.css";
import "prismjs/components/prism-scss.min";
import "prismjs/plugins/autolinker/prism-autolinker.min";
import "prismjs/plugins/autolinker/prism-autolinker.css";
import Prism from "vue-prism-component";
Vue.component("prism", Prism);
```

3. Use Prism, e.g. in `src/views/prism.vue`.

<<< @/vue-demo/src/views/prism.vue

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
