---
title: How to Use Bootstrap in a Vue Project
topic: Bootstrap
meta:
  - name: description
    content: Steps to use Bootstrap a Vue project.
---

[Bootstrap](https://github.com/twbs/bootstrap) is an open source toolkit for developing with HTML, CSS, and JS.

[BootstrapVue](https://github.com/bootstrap-vue/bootstrap-vue) is an implementation of the Bootstrap v4.5 component and grid system available for Vue.js v2.6, complete with extensive and automated WAI-ARIA accessibility markup.

::: warning
BootstrapVue is not compatible with Vue 3 at the time of this writing, so it will only be used for Vue 2.
:::

## :footprints: Steps

1. Create a Vue project and install Bootstrap and BootstrapVue for v2. Install Bootstrap, jQuery, and Popper.js instead for v3.

<code-group>
<code-block title="Vue 2">
```bash
npm i -g @vue/cli
vue create vue2-demo
cd vue2-demo
npm i bootstrap bootstrap-vue
```
</code-block>

<code-block title="Vue 3">
```bash
npm i -g @vue/cli
vue create vue-demo
cd vue-demo
npm i bootstrap jquery popper.js
```
</code-block>
</code-group>

2. Register Bootstrap in `src/main.js`.

<code-group>
<code-block title="Vue 2">
```js
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);
```
</code-block>

<code-block title="Vue 3">
```js
import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
````

</code-block>
</code-group>

3. Customize Bootstrap, e.g. in `src/assets/custom-bootstrap.scss`. The path to the default variables is `bootstrap/scss/_variables.scss`.

<<< @/vue-demo/src/assets/custom-bootstrap.scss

4. Import the style in `src/App.vue`:

```scss
@import "./assets/custom-bootstrap.scss";
```

5. Create a page, e.g. in `src/views/bootstrap.vue`. Here I will create a page with nav, about, and contact sections.

<<< @/vue-demo/src/views/bootstrap.vue

In `src/components/BootstrapNav.vue`:

<code-group>
<code-block title="Vue 2">
<<< @/vue2-demo/src/components/BootstrapNav.vue
</code-block>

<code-block title="Vue 3">
<<< @/vue-demo/src/components/BootstrapNav.vue
</code-block>
</code-group>

In `src/components/BootstrapAbout.vue`:

<code-group>
<code-block title="Vue 2">
<<< @/vue2-demo/src/components/BootstrapAbout.vue
</code-block>

<code-block title="Vue 3">
<<< @/vue-demo/src/components/BootstrapAbout.vue
</code-block>
</code-group>

In `src/components/BootstrapContact.vue`:

<code-group>
<code-block title="Vue 2">
<<< @/vue2-demo/src/components/BootstrapContact.vue
</code-block>

<code-block title="Vue 3">
<<< @/vue-demo/src/components/BootstrapContact.vue
</code-block>
</code-group>
