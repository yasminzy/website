---
title: Bagaimana Cara Menggunakan PostCSS dalam proyek Vue/Nuxt Project
meta:
  - name: description
    content: Langkah penggunaan tool PostCSS dalam proyek Vue/Nuxt.
---

# {{ $page.title }}

<start-tutorial demo="postcss" lang="id" />

Ada banyak [plugins](https://www.postcss.parts/) untuk PostCSS. Pada tutorial ini, saya akan menggunakan 2 plugins, yaitu:

- [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env)
- [rucksack-css](https://www.npmjs.com/package/rucksack-css)

## :computer: Instalasi

### Vue

Pertama, instal plugins-nya:

```bash{2}
cd vue-demo
npm install postcss-preset-env rucksack-css
```

Dalam `postcss.config.js`:

<<< @/vue-demo/postcss.config.js

Pada contoh ini, saya memasukkan 2 [options](https://github.com/csstools/postcss-preset-env#options).

- `stage` 0 mem-polyfill fitur CSS yang masih eksperimental. Saya membutuhkan stage ini karena saya mau menggunakan fitur [nesting rules](https://preset-env.cssdb.org/features#nesting-rules). Lihat [halaman fitur](https://preset-env.cssdb.org/features) untuk mengetahui stage berapa yang kamu butuhkan.
- `importFrom` memberitahukan sumber dari variabel-variabel yang akan kamu gunakan.

Dalam `src/assets/variables.css`:

<<< @/vue-demo/src/assets/variables.css

### Nuxt

Pertama, instal plugins-nya:

```bash{2}
cd nuxt-demo
npm install postcss-preset-env rucksack-css
```

Dalam `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{17,45-53}

Lalu saya taruh file `variables.css` yang sama di `assets`.

## :arrow_right: Penggunaan

Buat file `.css` untuk menulis variabel-variabelmu, dalam kasus ini `variables.css` di `src/assets` or `assets`.

Di `src/assets/variables.css` atau `assets/variables.css` saya:

<<< @/vue-demo/src/assets/variables.css

Kemudian, di `src/views/postcss.vue` atau `pages/postcss.vue`:

<<< @/vue-demo/src/views/postcss.vue{57-61,67-91}

Kita tidak perlu menulis `lang="postcss"` agar ini bisa jalan, tapi tanpa itu kita tidak akan melihat syntax highlighting yang baik.

Untuk `.container`, saya menggunakan 2 fitur dari Rucksack:

- [responsive typography](https://www.rucksackcss.org/docs#responsive-type)
- [all the easings](https://www.rucksackcss.org/docs#easings)

Coba ubah ukuran jendela browser demo diatas.

`font-family: system-ui;` adalah fitur dari postcss-preset-env's [system-ui font family](https://preset-env.cssdb.org/features#system-ui-font-family).

`& li`, `& a`, dan `&:hover` juga berasal dari postcss-preset-env. Mereka menggunakan nesting rules postcss-preset-env yang saya sebutkan sebelumnya.

`@media (--sm)` dan ukuran-ukuran lainnya adalah dari [custom media queries](https://preset-env.cssdb.org/features#custom-media-queries). Fitur ini membuat kode terasa lebih mudah dibaca.
