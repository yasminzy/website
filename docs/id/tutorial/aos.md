---
title: Bagaimana Cara Menggunakan AOS Library dalam Proyek Vue/Nuxt
meta:
  - name: description
    content: Langkah penggunaan library Animation on Scroll (AOS) dalam proyek Vue/Nuxt.
---

# {{ $page.title }}

<start-tutorial demo="aos" lang="id" />

## :computer: Instalasi

### Vue

Pertama, instal [AOS](https://www.npmjs.com/package/aos).

```bash{2}
cd vue-demo
npm install aos@next
```

Dalam `src/main.js`:

<<< @/vue-demo/src/main.js{8-9,47-49}

Pada contoh ini, saya juga memasukkan [pengaturan](https://www.npmjs.com/package/aos#1-initialize-aos) opsional untuk menonaktifkan AOS di ponsel.

### Nuxt

Pertama, instal package-nya.

```bash{2}
cd nuxt-demo
npm install aos@next
```

Dalam `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{29}

Dalam `plugins/aos.js`:

<<< @/nuxt-demo/plugins/aos.js

Seperti sebelummya, saya juga memasukkan [setting](https://www.npmjs.com/package/aos#1-initialize-aos) opsional untuk menonaktifkan AOS di ponsel.

## :arrow_right: Penggunaan

Sekarang kita bisa mulai mengatur [animasi](https://www.npmjs.com/package/aos#animations) dengan atribut `data-aos`. Kita juga bisa mengatur perilakunya dengan atribut `data-aos-*`.

Dalam `src/views/aos.vue` atau `pages/aos.vue`:

<<< @/vue-demo/src/views/aos.vue{3,5,7,13,17,29-31}

- `delay` menunda waktu mulai animasi. Ini dan `duration` [menerima nilai](https://www.npmjs.com/package/aos#setting-duration-delay) mulai dari 50 sampai 3000, dengan langkah 50ms.
- `once` membatasi jumlah animasi berjalan menjadi hanya sekali.
- `duration` mengatur berapa lama animasi berlangsung.
- `easing` adalah untuk mengatur fungsi transisi.
- `anchor` membuat elemen lain menjadi pemicu mulainya animasi.
