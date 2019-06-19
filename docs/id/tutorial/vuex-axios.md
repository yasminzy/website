---
title: Bagaimana Cara Menggunakan klien HTTP Axios dalam Proyek Vue/Nuxt
meta:
  - name: description
    content: Langkah penggunaan klien HTTP Axios dalam proyek Vue/Nuxt.
---

# {{ $page.title }}

<start-tutorial demo="axios" lang="id" />

Pada tutorial ini, saya mau menggunakan [API Opensearch](https://www.mediawiki.org/wiki/API:Opensearch) dari Wikipedia. Dengan ini, kita bisa memasukkan kata kunci lalu mendapatkan artikel terkait dari Wikipedia.

## :computer: Instalasi

### Vue

Pertama, tambahkan [Vuex](https://vuex.vuejs.org/) dan instal [axios](https://www.npmjs.com/package/prismjs)

```bash{2-3}
cd vue-demo
vue add vuex
npm install axios
```

Dalam `src/main.js`:

<<< @/vue-demo/src/main.js{6,51}

### Nuxt

Vuex sudah ada di Nuxt jadi tidak perlu diinstal lagi.

Instal [@nuxtjs/axios](https://www.npmjs.com/package/@nuxtjs/axios).

```bash{2}
cd nuxt-demo
npm install @nuxtjs/axios
```

Dalam `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{33}

Kamu bisa memasukkan [options](https://axios.nuxtjs.org/options) dengan section `axios` di file diatas kalau kamu mau. Contohnya: `axios: { proxy: true }`

## :arrow_right: Penggunaan

Dalam `src/views/vuex-axios.vue`:

<<< @/vue-demo/src/views/vuex-axios.vue

`@input="getArticles"` berarti ketika kita membuat perubahan, metode `getArticles` akan dieksekusi.

Artikel akan masuk ke `ul` dibawah `input`.

`input` terhubung dengan `query` di bagian `computed`. Ketika kita menginput sesuatu, bagian `set` akan meng-`commit` perubahan itu. Bagian `get` adalah yang akan ditampilkan oleh `input`.

Akhirnya, `methods` berisi metode `getArticles`. Kalau search bar tidak kosong, metode ini men-dispatch action `getArticles`.

Sekarang, ayo lanjut ke store. Saya menggunakan modul `wikipedia.js`.

Dalam `src/store/index.js`:

<<< @/vue-demo/src/store/index.js

For Nuxt, dalam `store/index.js`:

<<< @/nuxt-demo/store/index.js

OK, terakhir dalam `src/store/wikipedia.js`:

<<< @/vue-demo/src/store/wikipedia.js

Awalnya, `query` kosong dan tidak ada artikel.

Masukkan `query` dari state ke url. Gunakan `axios.get(url)` untuk memakai Axios.

Format respon agar mudah digunakan, lalu `commit` itu. `articles` pertama dalam `commit("articles", articles);` adalah item dalam mutations, sedangkan yang kedua adalah hasilnya.

Ada 2 items di mutations. Kita menggunakan `updateQuery` untuk mengubah state `query` dan `articles` untuk memperbarui hasil.

`getters` disini hanya mengembalikan state tanpa mengubahnya sama sekali, jadi sebenarnya kamu bisa langsung mendapatkan state tanpa getters di komponen.

Untuk Nuxt hampir sama, dalam `store/wikipedia.js`:

<<< @/nuxt-demo/store/wikipedia.js{10}

Perhatikan bahwa kita tidak mengimpor Axios, melainkan memanggilnya dengan `this.$axios`.
