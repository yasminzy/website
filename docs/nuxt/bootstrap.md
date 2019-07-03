---
title: How to Use Custom Bootstrap in a Nuxt Project
topic: Bootstrap
meta:
  - name: description
    content: Steps to use Bootstrap a Nuxt project.
---

[Bootstrap](https://github.com/twbs/bootstrap) is an open source toolkit for developing with HTML, CSS, and JS.

## :footprints: Steps

1. Create a Nuxt project and install Bootstrap, jQuery, and Popper.js. If your components do not [need JavaScript](https://getbootstrap.com/docs/4.3/getting-started/introduction/#js), jQuery an Popper.js can be omitted.

```bash
npx create-nuxt-app nuxt-demo
cd nuxt-demo
npm i bootstrap jquery popper.js
```

2. Customize Bootstrap, e.g. in `assets/custom-bootstrap.scss`. The path to the default variables is `bootstrap/scss/_variables.scss`.

<<< @/nuxt-demo/assets/custom-bootstrap.scss

3. Create Bootstrap plugin in `plugins/bootstrap.js`.

<<< @/nuxt-demo/plugins/bootstrap.js

4. Register the variables and plugin in `nuxt.config.js`.

```js
const webpack = require("webpack");

export default {
  css: [{ src: "@/assets/custom-bootstrap", lang: "scss" }],
  plugins: ["@/plugins/bootstrap"],
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  }
};
```

5. Use Bootstrap, e.g. in `pages/bootstrap.vue`.

<<< @/nuxt-demo/pages/bootstrap.vue

In `components/bootstrap-nav.vue`:

<<< @/nuxt-demo/components/bootstrap-nav.vue

In `components/bootstrap-about.vue`:

<<< @/nuxt-demo/components/bootstrap-about.vue

In `components/bootstrap-contact.vue`:

<<< @/nuxt-demo/components/bootstrap-contact.vue
