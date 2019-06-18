---
title: How to Use Vue Lazyload in a Vue/Nuxt Project
meta:
  - name: description
    content: Steps to use vue-lazyload module in a Vue/Nuxt project.
---

# {{ $page.title }}

<start-tutorial demo="vue-lazyload" />

## Installation

### Vue

First, install [vue-lazyload](https://github.com/hilongjw/vue-lazyload).

```bash{2}
cd vue-demo
npm install vue-lazyload
```

In `src/main.js`:

<<< @/vue-demo/src/main.js{24-32}

In this example, I also passed optional [settings](hhttps://www.npmjs.com/package/vue-lazyload).

- `attempt` limits the attempt to load images.
- `error` shows a replacement image upon load fail.
- `loading` shows another image while loading.
- `preLoad` makes the pre-loading height the same as the actual image.

### Nuxt

First, install the package.

```bash{2}
cd nuxt-demo
npm install vue-lazyload
```

In `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{21}

In `plugins/vue-lazyload.js`:

<<< @/nuxt-demo/plugins/vue-lazyload.js

I passed the same optional [settings](https://github.com/hilongjw/vue-lazyload#constructor-options) here.

## Usage

Now we can start [implementing](https://github.com/hilongjw/vue-lazyload#implementation) vue-lazyload using `v-lazy` directive.

In `src/views/vue-lazyload.vue` or `pages/vue-lazyload.vue`:

<<< @/vue-demo/src/views/vue-lazyload.vue{11}
