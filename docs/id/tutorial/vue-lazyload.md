---
title: How to Use Vue Lazyload in a Vue/Nuxt Project
topic: Vue Lazyload
meta:
  - name: description
    content: Langkah penggunaan modul vue-lazyload dalam proyek Vue/Nuxt.
---

## :computer: Instalasi

### Vue

Pertama, instal [vue-lazyload](https://www.npmjs.com/package/vue-lazyload).

```bash{2}
cd vue-demo
npm install vue-lazyload
```

Dalam `src/main.js`:

<<< @/vue-demo/src/main.js{24-32}

Pada contoh ini, saya juga memasukkan [pengaturan](https://github.com/hilongjw/vue-lazyload#constructor-options) opsional.

- `attempt` membatasi percobaan untuk memuat gambar.
- `error` menunjukkan gambar pengganti jika gagal dimuat.
- `loading` menunjukkan gambar lain saat gambar sedang dimuat.
- `preLoad` membuat tinggi pre-loading sama dengan gambar sebenarnya.

### Nuxt

Pertama, instal package-nya.

```bash{2}
cd nuxt-demo
npm install vue-lazyload
```

Dalam `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{30}

Dalam `plugins/vue-lazyload.js`:

<<< @/nuxt-demo/plugins/vue-lazyload.js

Saya memasukkan [pengaturan](https://github.com/hilongjw/vue-lazyload#constructor-options) opsional yang sama disini.

## :arrow_right: Penggunaan

Sekarang kita bisa mulai [mengimplementasikan](https://github.com/hilongjw/vue-lazyload#implementation) vue-lazyload dengan directive `v-lazy`.

Dalam `src/views/vue-lazyload.vue` atau `pages/vue-lazyload.vue`:

<<< @/vue-demo/src/views/vue-lazyload.vue{11}
