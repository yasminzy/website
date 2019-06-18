---
title: Bagaimana Cara Menggunakan Vuex dalam Proyek Vue/Nuxt
meta:
  - name: description
    content: Langkah penggunaan Vuex dalam proyek Vue/Nuxt.
---

# {{ $page.title }}

<start-tutorial demo="vuex" lang="id" />

Sederhananya, [Vuex](https://vuex.vuejs.org/) adalah sesuatu yang bisa kita gunakan untuk mengatur state di proyek Vue/Nuxt kita. **Store** adalah kontainernya. Store ini terdiri dari 4 bagian:

- [state](https://vuex.vuejs.org/guide/state.html)
- [actions](https://vuex.vuejs.org/guide/actions.html)
- [mutations](https://vuex.vuejs.org/guide/mutations.html)
- [getters](https://vuex.vuejs.org/guide/getters.html)

Komponen Vue kita me-`render` **state** awal. Lalu, ketika kita mau menggantinya, mungkin setelah tombol ditekan, komponen memanggil sebuah action dengan `dispatch`. **actions** dalam Vuex berisi actions yang bisa kita gunakan.

Action yang dipanggil melakukan sesuatu, contohnya, melakukan API call. Action tadi menghasilkan sesuatu yang bisa digunakan untuk mengganti state. Jadi diakhir action, kita `commit` hasil tersebut. **mutations** dalam Vuex berisi perubahan atau mutasi yang bisa kita lakukan.

Ketika perubahannya sudah committed, mutations `mutate` atau melakukan mutasi pada state. Komponen kita bisa mengakses state dengan **getters**. Getters itu seperti prosesor akhir dari state-mu, jadi komponenmu bisa mendapatkan state siap pakai.

Komponen juga bisa mengakses state tanpa getters. Kamu bisa tidak menggunakan getter kalau kamu tidak perlu memproses state terlebih dahulu.

Akhirnya, komponen akan render ulang. Selesai.

Pada tutorial ini, saya mau menggunakan [API Markdown](https://developer.github.com/v3/markdown/) dari Github. Dengan ini, kita bisa menulis Markdown dan melihat hasilnya di HTML.

[Daftarkan](https://github.com/settings/apps/new) aplikasi GitHub baru untuk mendapatkan client ID dan client secret karena kita akan membutuhkan mereka nanti.

## Instalasi

### Vue

Pertama, tambahkan Vuex.

```bash{2}
cd vue-demo
vue add vuex
```

Buat file bernama `.env` di root folder dan paste client ID dan client secret-mu. Contohnya:

```env
VUE_APP_MARKDOWN_CLIENT_ID=a1b2c3d4e5f6g7h8i9j0
VUE_APP_MARKDOWN_CLIENT_SECRET=a1b2c3d4e5f6g7h8i9j0a1b2c3d4e5f6g7h8i9j0
```

Dalam `src/main.js`:

<<< @/vue-demo/src/main.js{1,6,51}

### Nuxt

Vuex sudah ada di Nuxt jadi tidak perlu diinstal lagi.

Seperti sebelumnya, buat file bernama `.env` di root folder dan paste client ID dan client secret-mu.

Dalam `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{57-58}

## Penggunaan

Dalam `src/views/vuex.vue`:

<<< @/vue-demo/src/views/vuex.vue

`@input="renderPreview"` berarti ketika kita membuat perubahan, metode `renderPreview` akan dieksekusi.

Markdown yang di-render akan masuk ke `div` dibawah `textarea`.

`textarea` terhubung dengan `input` di bagian `computed`. Ketika kita menginput sesuatu, bagian `set` akan meng-`commit` perubahan itu. Bagian `get` adalah yang akan ditampilkan oleh `input`.

Dari awal saya mempunyai input Markdown sebagai contoh, tapi metodenya tidak akan dipanggil tanpa ada perubahan di input. Karena itu, di bagian `mounted` saya panggil metodenya.

Akhirnya, `methods` berisi metode `renderPreview`. Ini men-dispatch action `renderPreview`, sambil membawa input.

Untuk Nuxt hampir sama. Satu-satunya yang berbeda adalah komponen `no-ssr` melingkupi konten dalam `template`. Jadi `pages/vuex.vue` menjadi seperti ini:

<<< @/nuxt-demo/pages/vuex.vue{2,18}

Sekarang, ayo lanjut ke store. Saya menggunakan modul `markdown.js`.

Dalam `src/store/index.js`:

<<< @/vue-demo/src/store/index.js

Untuk Nuxt, dalam `store/index.js`:

<<< @/nuxt-demo/store/index.js

OK, akhirnya dalam `src/store/markdown.js` atau `store/markdown.js`:

<<< @/vue-demo/src/store/markdown.js

`input` mempunyai contoh yang saya sebutkan sebelumnya. Ketika ada perubahan, action `renderPreview` dipanggil. Kita perlu menyiapkan URL dan `body` disini.

Masukkan client ID dan client secret ke URL dengan `process.env.`. `stringify` `input` untuk `body`.

Dari responnya kita mendapatkan `renderedMd`. `commit` itu dengan `commit("renderedMd", renderedMd);`. `renderedMd` yang pertama adalah nama item di mutations, sedangkan yang kedua adalah hasil yang akan dibawa ke item tersebut.

Ada 2 items di mutations. Kita menggunakan `updateInput` untuk mengganti state dari `input` dan `renderedMd` untuk memperbarui hasil.

`getters` disini hanya me-return state tanpa perubahan, jadi sebenarnya kamu bisa mendapatkan state-nya langsung di komponen. Menggunakan getter hanyalah default saya jadi kalau saya perlu mengedit state, saya tidak perlu membuat banyak perubahan.
