---
title: Bagaimana Cara Memasukkan Google Maps dalam Proyek Vue/Nuxt
meta:
  - name: description
    content: Langkah memasukkan Google Maps dalam proyek Vue/Nuxt.
---

# {{ $page.title }}

<start-tutorial demo="google-maps" lang="id" />

## Mendapatkan API Key

Pertama, dapatkan API key dari [Google Maps Platform](https://cloud.google.com/maps-platform/). Klik **Get Started**.

1.  Pilih produk ![Pilih produk](../../img/gmaps-1-pick-product.png)

2.  Pilih proyek ![Pilih proyek](../../img/gmaps-2-select-project.png)

3.  Buat akun billing ![Buat akun billing](../../img/gmaps-3-create-billing-account.png)

4.  Setujui persyaratan ![Setujui persyaratan](../../img/gmaps-4-accept-terms.png)

5.  Buat profil pembayaran ![Buat profil pembayaran](../../img/gmaps-5-create-payment-profile.png)

6.  Enable API ![Enable API](../../img/gmaps-6-enable-api.png)

7.  Dapatkan API key ![Dapatkan API key](../../img/gmaps-7-get-api-key.png)

## Instalasi

### Vue

Sekarang, instal:

- [dotenv](https://www.npmjs.com/package/dotenv)
- [vue-google-maps](https://www.npmjs.com/package/vue-google-maps)

```bash{2-3}
cd vue-demo
npm install -D dotenv
npm install vue2-google-maps
```

Buat file bernama `.env` di root folder dan paste API key-mu. Contohnya:

```env
VUE_APP_GOOGLE_MAPS_API_KEY=ABcdEfGhIjklmNOpqrsTUvWXyzAbcD1EfGhiJKl
```

Dalam `src/main.js`:

<<< @/vue-demo/src/main.js{1,19-22}

### Nuxt

Sekarang, instal:

- [@nuxtjs/dotenv](https://www.npmjs.com/package/@nuxtjs/dotenv)
- [vue-google-maps](https://www.npmjs.com/package/vue-google-maps)

```bash{2-3}
cd nuxt-demo
npm install -D @nuxtjs/dotenv
npm install vue2-google-maps
```

Seperti sebelumnya, buat file bernama `.env` di root proyek dan paste API key-mu.

Dalam `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{20,26,56}

Dalam `plugins/vue2-google-maps.js`:

<<< @/nuxt-demo/plugins/google-maps.js

## Penggunaan

Sekarang kita bisa mulai menambahkan Google Maps.

Dalam `src/views/google-maps.vue` atau `pages/google-maps.vue`:

<<< @/vue-demo/src/views/google-maps.vue{5-12,20-25}

Kita bisa mengatur posisi tengah peta dengan `center`. Untuk membuat peta menunjukkan gambar yang lebih diperbesar, masukkan angka yang lebih tinggi di `zoom`.

Terdapat empat jenis peta yang bisa kita gunakan di `map-type-id`:

- roadmap
- hybrid
- satellite
- terrain

`gmap-marker` adalah salah satu komponen yang didukung `vue-google-maps`. Dalam contoh ini, kita mempunyai dua lokasi yang ditandai dengan markers.
