---
title: How to Use Bootstrap in a Nuxt Project
topic: Bootstrap
meta:
  - name: description
    content: Steps to use Bootstrap a Nuxt project.
---

[Bootstrap](https://github.com/twbs/bootstrap) is an open source toolkit for developing with HTML, CSS, and JS.

[BootstrapVue](https://github.com/bootstrap-vue/bootstrap-vue) is an implementation of the Bootstrap v4.5 component and grid system available for Vue.js v2.6, complete with extensive and automated WAI-ARIA accessibility markup.

## :footprints: Steps

1. Create a Nuxt project and install Bootstrap and Bootstrap Vue.

```bash
npx create-nuxt-app nuxt-demo
cd nuxt-demo
npm i bootstrap bootstrap-vue
```

2. Customize Bootstrap, e.g. in `assets/custom-bootstrap.scss`. The path to the default variables is `bootstrap/scss/_variables.scss`.

<<< @/nuxt-demo/assets/custom-bootstrap.scss

3. Import the style and module in `nuxt.config.js`.

```js
export default {
  css: [{ src: "@/assets/custom-bootstrap", lang: "scss" }],
  modules: ["bootstrap-vue/nuxt"]
};
```

4. Create a page, e.g. in `pages/bootstrap.vue`. Here I will create a page with nav, about, and contact sections.

<<< @/nuxt-demo/pages/bootstrap.vue

In `components/BootstrapNav.vue`:

<<< @/nuxt-demo/components/BootstrapNav.vue

In `components/BootstrapAbout.vue`:

<<< @/nuxt-demo/components/BootstrapAbout.vue

In `components/BootstrapContact.vue`:

<<< @/nuxt-demo/components/BootstrapContact.vue
