---
title: Bagaimana Cara Menggunakan Prism dalam Proyek Vue/Nuxt
topic: Prism
meta:
  - name: description
    content: Langkah Penggunaan Prism dalam Proyek Vue/Nuxt.
---

## :computer: Instalasi

### Vue

Pertama, instal:

- [Prism](https://www.npmjs.com/package/prismjs)
- [vue-prism-component](https://www.npmjs.com/package/vue-prism-component)

```bash{2}
cd vue-demo
npm install prismjs vue-prism-component
```

Dalam `src/main.js`:

<<< @/vue-demo/src/main.js{36-42}

Pada contoh ini, saya menggunakan tema funky. Berikut adalah tema yang tersedia:

- prism-coy
- prism-dark
- prism-funky
- prism-okaidia
- prism-solarizedlight
- prism-tomorrow
- prism-twilight
- prism

Saya juga menambahkan [komponen](https://prismjs.com/index.html#languages-list) SCSS. Prism mendukung Markup, CSS, JavaScript, dan C-like secara default jadi kita tidak perlu mengimpor mereka.

Prism mendukung beberapa [plugins](https://prismjs.com/index.html#plugins). Saya menggunakan [autolinker](https://prismjs.com/plugins/autolinker) disini untuk membuat link dalam kode bekerja.

### Nuxt

Pertama, instal packages-nya.

```bash{2}
cd nuxt-demo
npm install prismjs vue-prism-component
```

Dalam `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{31}

Dalam `plugins/prism.js`:

<<< @/nuxt-demo/plugins/prism.js

## :arrow_right: Penggunaan

Sekarang kita bisa menggunakan komponen `prism`. Masukkan bahasa di atribut `language`. Default-nya adalah markup.

Dalam `src/views/prism.vue` atau `pages/prism.vue`:

<<< @/vue-demo/src/views/prism.vue{6,10-13,17-22,30-33}
