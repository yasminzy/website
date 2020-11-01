---
title: How to Use AOS in a Nuxt Project
topic: AOS
meta:
  - name: description
    content: Steps to use AOS in a Nuxt project.
---

[AOS](https://github.com/michalsnik/aos) is a CSS-Driven “On Scroll” animation library.

## :footprints: Steps

1. Create a Nuxt project and install AOS.

```bash
npx create-nuxt-app nuxt-demo
cd nuxt-demo
npm i aos@next
```

2. Create AOS plugin and pass the [options](https://github.com/michalsnik/aos#1-initialize-aos) needed in `plugins/aos.client.js`.

<<< @/nuxt-demo/plugins/aos.client.js

3. Register the plugin in `nuxt.config.js`.

```js
export default {
  plugins: ["@/plugins/aos.client"]
};
```

4. Use AOS, e.g. in `pages/aos.vue`.

<<< @/nuxt-demo/pages/aos.vue

## :book: Explanation

- Use [animations](https://github.com/michalsnik/aos#animations) with `data-aos` attribute.
- Adjust the [behavior](https://github.com/michalsnik/aos#2-set-animation-using-data-aos-attribute) with `data-aos-*` attributes.
  - `delay` delays the animation start time. Both this and `duration` [accept values](https://github.com/michalsnik/aos#caveats) from 50 to 3000, with step 50ms.
  - `once` limits the animation to fire only once.
  - `duration` sets how long the animation lasts.
  - `easing` is for changing the transition function.
  - `anchor` makes another element triggers the animation.
