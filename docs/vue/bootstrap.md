---
title: How to Use Custom Bootstrap in a Vue Project
topic: Bootstrap
meta:
  - name: description
    content: Steps to use Bootstrap a Vue project.
---

[Bootstrap](https://github.com/twbs/bootstrap) is an open source toolkit for developing with HTML, CSS, and JS.

## :footprints: Steps

1. Create a Vue project and install Bootstrap, jQuery, and Popper.js. If your components do not [need JavaScript](https://getbootstrap.com/docs/4.3/getting-started/introduction/#js), jQuery an Popper.js can be omitted.

```bash
npm i -g @vue/cli
vue create vue-demo
cd vue-demo
npm i bootstrap jquery popper.js
```

2. Register Bootstrap in `src/main.js`.

```js
import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
```

3. Customize Bootstrap, e.g. in `src/assets/custom-bootstrap.scss`. The path to the default variables is `bootstrap/scss/_variables.scss`.

<<< @/vue-demo/src/assets/custom-bootstrap.scss

4. Import the style in `src/layouts/default.vue`:

```scss
@import "../assets/custom-bootstrap";
```

5. Use Bootstrap, e.g. in `src/views/bootstrap.vue`.

<<< @/vue-demo/src/views/bootstrap.vue

In `src/components/bootstrap-nav.vue`:

<<< @/vue-demo/src/components/bootstrap-nav.vue

In `src/components/bootstrap-about.vue`:

<<< @/vue-demo/src/components/bootstrap-about.vue

In `src/components/bootstrap-contact.vue`:

<<< @/vue-demo/src/components/bootstrap-contact.vue
