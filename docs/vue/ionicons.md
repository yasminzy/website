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

2. Place Ionicons script in `public/index.html` just before `</body>`.

```html
<script src="https://unpkg.com/ionicons/dist/ionicons.js"></script>
```

3. Use Ionicons, e.g. in `src/views/ionicons.vue`.

<<< @/vue-demo/src/views/ionicons.vue

In `src/assets/ionicons.js`:

<<< @/vue-demo/src/assets/ionicons.js

## :book: Explanation

- Use [icons](https://ionicons.com/) with `ion-icon`.
- Specify the icon with `name` attribute.
- For example, to insert a heart icon write `<ion-icon name="heart" />`.
