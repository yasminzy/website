---
title: Bagaimana Cara Menggunakan Ionicons dalam Proyek Vue/Nuxt
topic: Ionicons
meta:
  - name: description
    content: Langkah penggunaan Ionicons library dalam proyek Vue/Nuxt.
---

## :computer: Instalasi

### Vue

Masukkan [Ionicons](https://www.npmjs.com/package/ionicons) ke `public/index.html`.

<<< @/vue-demo/public/index.html{25}

### Nuxt

Masukkan Ionicons ke `nuxt.config.js`.

<<< @/nuxt-demo/nuxt.config.js{21}

## :arrow_right: Penggunaan

Untuk menggunakan ikon, masukkan komponen web `ion-icon` ke template-mu. Masukkan nama ikon di atribut `name`. Contohnya, untuk memasukkan ikon hati tulis `<ion-icon name="heart" />`.

Dalam `src/views/ionicons.vue` atau `pages/ionicons.vue`:

<<< @/vue-demo/src/views/ionicons.vue{21}

`src/assets/ionicons.js` atau `assets/ionicons.js` berisi nama-nama ikon.

```js
const appIcons = [
  "add-circle-outline",
  "add-circle",
  "add"
  // and so on
];

const logos = [
  "logo-android",
  "logo-angular",
  "logo-apple"
  // and so on
];

export { appIcons, logos };
```

Saya menggunakan file yang berbeda untuk demo karena saya ingin memasukkan semua ikon. Kamu mungkin tidak membutuhkan semuanya jadi masukkan yang kamu butuhkan saja.
