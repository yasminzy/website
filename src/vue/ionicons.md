---
title: How to Use Ionicons in a Vue Project
topic: Ionicons
meta:
  - name: description
    content: Steps to use Ionicons in a Vue project.
---

[Ionicons](https://github.com/ionic-team/ionicons) is an icon set for Ionic Framework and web apps.

## :footprints: Steps

1. Create a Vue project.

```bash
npm i -g @vue/cli
vue create vue-demo
```

2. Place Ionicons scripts in `public/index.html` just before `</body>`.

```html
<script
  type="module"
  src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"
></script>

<script
  nomodule=""
  src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"
></script>
```

3. Use Ionicons, e.g. in `src/views/ionicons.vue`.

<<< @/vue-demo/src/views/ionicons.vue

In `src/assets/ionicons.js`:

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
