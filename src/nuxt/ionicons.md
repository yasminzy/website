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
    script: [
      {
        type: "module",
        src: "https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"
      },
      {
        nomodule: "",
        src: "https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"
      }
    ]
  }
};
```

3. Use Ionicons, e.g. in `pages/ionicons.vue`.

<<< @/nuxt-demo/pages/ionicons.vue

In `assets/ionicons.js`:

```js
const icons = [
  "add",
  "add-circle",
  "airplane",
  ...
]

export { icons };
```

## :book: Explanation

- Use [icons](https://ionicons.com/) with `ion-icon`.
- Specify the icon with `name` attribute.
- For example, to insert a heart icon write `<ion-icon name="heart" />`. The default is `filled` style. Except for the logo, you can use `outline` and `sharp` variants by appending `-outline` or `-sharp` to the `name`.
