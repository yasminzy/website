---
title: Bagaimana Cara Menggunakan Bootstrap Custom dalam proyek Vue/Nuxt
topic: Bootstrap
meta:
  - name: description
    content: Langkah penggunaan Bootstrap custom dalam proyek Vue/Nuxt (demo nav, jumbotron, dan form).
---

## :computer: Instalasi

### Vue

Pertama, instal:

- [bootstrap](https://www.npmjs.com/package/bootstrap)
- [jquery](https://www.npmjs.com/package/jquery)
- [popper.js](https://www.npmjs.com/package/popper.js)

```bash{2}
cd vue-demo
npm install bootstrap jquery popper.js
```

:::tip
Hanya sebagian [komponen yang membutuhkan JavaScript](https://getbootstrap.com/docs/4.3/getting-started/introduction/#js). Kamu tidak perlu memasukkan files JS kalau kamu tidak membutuhkannya.
:::

Dalam `src/main.js`:

<<< @/vue-demo/src/main.js{11-13}

### Nuxt

Pertama, instal packages-nya.

```bash{2}
cd nuxt-demo
npm install bootstrap jquery popper.js
```

Dalam `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{26,45-51}

Dalam `plugins/bootstrap.js`:

<<< @/nuxt-demo/plugins/bootstrap.js

## :arrow_right: Penggunaan

Buat file `.scss` untuk meng-override variabel-variabel default, misalnya `custom-bootstrap.scss` di `src/assets` atau `assets`. Path ke variabel default tersebut adalah `bootstrap/scss/_variables.scss`.

Kamu bisa menemukan `@import` default di `bootstrap/scss/bootstrap.scss`. Copy paste itu ke file-mu. Komen yang tidak kamu butuhkan.

Di `src/assets/custom-bootstrap.scss` atau `assets/custom-bootstrap.scss` saya:

<<< @/vue-demo/src/assets/custom-bootstrap.scss

Lalu, impor file-mu di `src/layouts/default.vue`:

<<< @/vue-demo/src/layouts/default.vue{2-18,22}

Breadcrumb diatas adalah salah satu [komponen](https://getbootstrap.com/docs/4.3/components/alerts/) dari Bootstrap.

Hanya ada beberapa perbedaan di Nuxt.

1. komponen `no-ssr` melingkupi konten dalam `template`.
2. Selain `$route.path`, kita juga punya `$route.name`, jadi kita pakai `$route.name`.
3. Kita menggunakan `nuxt-link`, bukan `router-link`.
4. Kita menggunakan `nuxt`, bukan `router-view`.
5.

Jadi dalam `layouts/default.vue`:

<<< @/nuxt-demo/layouts/default.vue{2,4,7,9,13,18,20}

Sekarang ayo coba komponen-komponen lain. Saya mau mempunyai halaman dengan bar navigasi, jumbotron, dan formulir kontak. Saya bagi mereka menjadi komponen-komponen agar kodenya lebih mudah dibaca.

Dalam `src/views/bootstrap.vue` atau `pages/bootstrap.vue`:

<<< @/vue-demo/src/views/bootstrap.vue

### Nav

Dalam `src/components/bootstrap-nav.vue` atau `components/bootstrap-nav.vue`:

<<< @/vue-demo/src/components/bootstrap-nav.vue{2-35}

Untuk Nuxt, kamu bisa mengganti `:src="require('../assets/logo.svg')"` dengan `src="~assets/logo.svg"` kalau kamu mau.

### Jumbotron

Dalam `src/components/bootstrap-about.vue` atau `components/bootstrap-about.vue`:

<<< @/vue-demo/src/components/bootstrap-about.vue{2-22}

### Form

Dalam `src/components/bootstrap-contact.vue` atau `components/bootstrap-contact.vue`:

<<< @/vue-demo/src/components/bootstrap-contact.vue{2-91}
