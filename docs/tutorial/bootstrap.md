---
title: How to Use Custom Bootstrap in a Vue/Nuxt Project
topic: Bootstrap
meta:
  - name: description
    content: Steps to use Bootstrap library in a Vue/Nuxt project (nav, jumbotron, and form demo).
---

## :computer: Installation

### Vue

First, install:

- [bootstrap](https://www.npmjs.com/package/bootstrap)
- [jquery](https://www.npmjs.com/package/jquery)
- [popper.js](https://www.npmjs.com/package/popper.js)

```bash{2}
cd vue-demo
npm install bootstrap jquery popper.js
```

:::tip
Only some [components require JavaScript](https://getbootstrap.com/docs/4.3/getting-started/introduction/#js). You do not need to include the JS files if you do not use them.
:::

In `src/main.js`:

<<< @/vue-demo/src/main.js{11-13}

### Nuxt

First, install the packages.

```bash{2}
cd nuxt-demo
npm install bootstrap jquery popper.js
```

In `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{26,45-51}

In `plugins/bootstrap.js`:

<<< @/nuxt-demo/plugins/bootstrap.js

## :arrow_right: Usage

Create a `.scss` file to override the default variables. For example, `custom-bootstrap.scss` in `src/assets` or `assets`. The path to the default variables is `bootstrap/scss/_variables.scss`.

You can find the default `@import` in `bootstrap/scss/bootstrap.scss`. Copy and paste it to your file. Comment out what you do not need.

In my `src/assets/custom-bootstrap.scss` or `assets/custom-bootstrap.scss`:

<<< @/vue-demo/src/assets/custom-bootstrap.scss

Then, import your file in `src/layouts/default.vue`:

<<< @/vue-demo/src/layouts/default.vue{2-18,22}

The breadcrumb above is one of the Bootstrap's [components](https://getbootstrap.com/docs/4.3/components/alerts/).

There are only some differences in Nuxt.

1. A `no-ssr` component wraps the content inside `template` there.
2. We have `$route.name` in addition to `$route.path`, so we use it instead.
3. We use `nuxt-link` instead of `router-link`.
4. We use `nuxt` instead of `router-view`.

So in `layouts/default.vue`:

<<< @/nuxt-demo/layouts/default.vue{2,4,7,9,13,18,20}

Now let's try other components. I want to have a page with a navigation bar, a jumbotron, and a contact form. I split them into components to make the code easier to read.

In `src/views/bootstrap.vue` or `pages/bootstrap.vue`:

<<< @/vue-demo/src/views/bootstrap.vue

### Nav

In `src/components/bootstrap-nav.vue` or `components/bootstrap-nav.vue`:

<<< @/vue-demo/src/components/bootstrap-nav.vue{2-35}

For Nuxt, instead of writing `:src="require('../assets/logo.svg')"`, you can write `src="~assets/logo.svg"` if you want.

### Jumbotron

In `src/components/bootstrap-about.vue` or `components/bootstrap-about.vue`:

<<< @/vue-demo/src/components/bootstrap-about.vue{2-22}

### Form

In `src/components/bootstrap-contact.vue` or `components/bootstrap-contact.vue`:

<<< @/vue-demo/src/components/bootstrap-contact.vue{2-91}
