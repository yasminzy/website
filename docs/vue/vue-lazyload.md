---
title: How to Use Vue Lazyload in a Vue Project
topic: Vue Lazyload
meta:
  - name: description
    content: Steps to use Vue Lazyload in a Vue project.
---

[Vue Lazyload](https://github.com/hilongjw/vue-lazyload) is a Vue.js plugin for lazyloading image or component.

## :footprints: Steps

1. Create a Vue project and install Vue Lazyload.

```bash
npm i -g @vue/cli
vue create vue-demo
cd vue-demo
npm i vue-lazyload
```

2. Put a placeholder image to load while loading, e.g. `src/assets/loading.svg`. Put another to load upon load fail, e.g. `src/assets/error.svg`.

3. Register Vue Lazyload and pass the [options](https://github.com/hilongjw/vue-lazyload#constructor-options) needed in `src/main.js`.

```js
import error from "./assets/error.svg";
import loading from "./assets/loading.svg";
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  preLoad: 1,
  error: error,
  loading: loading,
  attempt: 1
});
```

4. Use Vue Lazyload, e.g. in `src/views/vue-lazyload.vue`. I purposely made a typo in one of the link so you can see how an error is shown in the demo.

<<< @/vue-demo/src/views/vue-lazyload.vue

## :book: Explanation

### Settings

- `attempt` limits the attempt to load images.
- `error` shows a replacement image upon load fail.
- `loading` shows another image while loading.
- `preLoad` makes the pre-loading height the same as the actual image.

### Usage

- [Lazyload](https://github.com/hilongjw/vue-lazyload#implementation) with `v-lazy` directive.
