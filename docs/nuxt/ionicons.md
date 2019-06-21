---
title: How to Use Ionicons in a Nuxt Project
topic: Ionicons
meta:
  - name: description
    content: Steps to use Ionicons in a Nuxt project.
---

[Ionicons](https://github.com/ionic-team/ionicons) is an icon set for Ionic Framework and web apps.

## :footprints: Steps

1. Create a Nuxt project with `npx create-nuxt-app nuxt-demo`.

2. Register the script in `nuxt.config.js`.

```js
export default {
  head: {
    script: [{ src: "https://unpkg.com/ionicons/dist/ionicons.js", body: true }]
  }
};
```

3. Use Ionicons, e.g. in `pages/ionicons.vue`.

<<< @/nuxt-demo/pages/ionicons.vue

In `assets/ionicons.js`:

<<< @/nuxt-demo/assets/ionicons.js

## :book: Explanation

- Use [icons](https://ionicons.com/) with `ion-icon`.
- Specify the icon with `name` attribute.
- For example, to insert a heart icon write `<ion-icon name="heart" />`.
