---
title: How to Use AOS Library in a Vue/Nuxt Project
meta:
  - name: description
    content: Steps to use Animation on Scroll (AOS) library in a Vue/Nuxt project.
---

# {{ $page.title }}

<start-tutorial demo="aos" />

## :computer: Installation

### Vue

First, install [AOS](https://www.npmjs.com/package/aos).

```bash{2}
cd vue-demo
npm install aos@next
```

In `src/main.js`:

<<< @/vue-demo/src/main.js{8-9,47-49}

In this example, I also passed an optional [setting](https://www.npmjs.com/package/aos#1-initialize-aos) to disable AOS on the phone.

### Nuxt

First, install the package.

```bash{2}
cd nuxt-demo
npm install aos@next
```

In `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{29}

In `plugins/aos.js`:

<<< @/nuxt-demo/plugins/aos.js

Like before, I also passed an optional [setting](https://www.npmjs.com/package/aos#1-initialize-aos) to disable AOS on the phone.

## :arrow_right: Usage

Now we can start setting [animations](https://www.npmjs.com/package/aos#animations) using `data-aos` attribute. We can also adjust the behavior with the `data-aos-*` attributes.

In `src/views/aos.vue` or `pages/aos.vue`:

<<< @/vue-demo/src/views/aos.vue{3,5,7,13,17,29-31}

- `delay` delays the animation start time. Both this and `duration` [accept values](https://www.npmjs.com/package/aos#setting-duration-delay) from 50 to 3000, with step 50ms.
- `once` limits the animation to fire only once.
- `duration` sets how long the animation lasts.
- `easing` is for changing the transition function.
- `anchor` makes another element triggers the animation.
