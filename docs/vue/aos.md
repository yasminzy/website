---
title: How to Use AOS in a Vue Project
topic: AOS
meta:
  - name: description
    content: Steps to use AOS in a Vue project.
---

[AOS](https://github.com/michalsnik/aos) is a CSS-Driven “On Scroll” animation library.

## :footprints: Steps

1. Create a Vue project and install AOS.

```bash
npm i -g @vue/cli
vue create vue-demo
cd vue-demo
npm i aos@next
```

2. Initialize AOS and pass the [options](https://www.npmjs.com/package/aos#1-initialize-aos) needed in `src/main.js`.

```js
import AOS from "aos";
import "aos/dist/aos.css";

new Vue({
  created() {
    AOS.init({ disable: "phone" });
  },
  router,
  render: h => h(App)
}).$mount("#app");
```

3. Use AOS, e.g. in `src/views/aos.vue`.

<<< @/vue-demo/src/views/aos.vue

## :book: Explanation

- Use [animations](https://www.npmjs.com/package/aos#animations) with `data-aos` attribute.
- Adjust the [behavior](https://github.com/michalsnik/aos#2-set-animation-using-data-aos-attribute) with `data-aos-*` attributes.

  - `delay` delays the animation start time. Both this and `duration` [accept values](https://www.npmjs.com/package/aos#setting-duration-delay) from 50 to 3000, with step 50ms.
  - `once` limits the animation to fire only once.
  - `duration` sets how long the animation lasts.
  - `easing` is for changing the transition function.

  - `anchor` makes another element triggers the animation.
