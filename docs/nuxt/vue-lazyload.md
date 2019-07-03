---
title: How to Use Vue Lazyload in a Nuxt Project
topic: Vue Lazyload
meta:
  - name: description
    content: Steps to use Vue Lazyload in a Nuxt project.
---

[Vue Lazyload](https://github.com/hilongjw/vue-lazyload) is a Vue.js plugin for lazyloading image or component.

## :footprints: Steps

1. Create a Nuxt project and install Vue Lazyload.

```bash
npx create-nuxt-app nuxt-demo
cd nuxt-demo
npm i vue-lazyload
```

2. Put a placeholder image to load while loading, e.g. `/assets/loading.svg`. Put another to load upon load fail, e.g. `/assets/error.svg`.

3. Create Vue Lazyload plugin in `plugins/vue-lazyload.js`.

<<< @/nuxt-demo/plugins/vue-lazyload.js

4. Register the plugin in `nuxt.config.js`.

```js
export default {
  plugins: ["@/plugins/vue-lazyload"]
};
```

5. Use Vue Lazyload, e.g. in `pages/vue-lazyload.vue`. I purposely made a typo in one of the link so you can see how an error is shown in the demo.

<<< @/nuxt-demo/pages/vue-lazyload.vue

## :book: Explanation

### Settings

- `attempt` limits the attempt to load images.
- `error` shows a replacement image upon load fail.
- `loading` shows another image while loading.
- `preLoad` makes the pre-loading height the same as the actual image.

### Usage

- [Lazyload](https://github.com/hilongjw/vue-lazyload#implementation) with `v-lazy` directive.
