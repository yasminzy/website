---
title: Bagaimana Cara Menggunakan Vue Charts dalam Proyek Vue/Nuxt
topic: Chart
meta:
  - name: description
    content: Langkah menggunakan Vue Charts dalam proyek Vue/Nuxt (demo grafik garis, bar, dan donat).
---

## :computer: Instalasi

### Vue

Pertama, instal:

- [chart.js](https://www.npmjs.com/package/chart.js)
- [Vue Charts](https://www.npmjs.com/package/hchs-vue-charts)

```bash{2}
cd vue-demo
npm install chart.js hchs-vue-charts
```

Dalam `src/main.js`:

<<< @/vue-demo/src/main.js{15-17}

### Nuxt

Pertama, instal packages-nya.

```bash{2}
cd nuxt-demo
npm install chart.js hchs-vue-charts
```

Dalam `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{30}

Dalam `plugins/chart.js`:

<<< @/nuxt-demo/plugins/chart.js

## :arrow_right: Penggunaan

Saya mau menggunakan tiga macam grafik. Saya bagi mereka menjadi komponen-komponen agar kodenya lebih mudah dibaca.

Dalam `src/views/chart.vue`:

<<< @/vue-demo/src/views/chart.vue

Untuk Nuxt hampir sama. Satu-satunya yang berbeda adalah komponen `no-ssr` melingkupi konten dalam `template`. Jadi `pages/chart.vue` menjadi seperti ini:

<<< @/nuxt-demo/pages/chart.vue{2,12}

### Bar

Dalam `src/components/chart-bar.vue` atau `components/chart-bar.vue`:

<<< @/vue-demo/src/components/chart-bar.vue{8,10-21,30-45}

Untuk memasukkan lebih dari satu grafik, dalam contoh ini bar charts, tambahkan `canvas`.

- `backgroundcolor` mengubah warna latar.
- `beginzero` membuat grafik mulai dari nol jika di-set `true`.
- `bind` membuat grafik [re-render](http://vue-charts.hchspersonal.tk/databinding) ketika ada perubahan data, jika di-set `true`.
- `bordercolor` mengatur warna border.
- `data` menerima array data.
- `datalabel` adalah untuk nama data.
- `labels` mengatur label di sumbu-x.

### Donat

Dalam `src/components/chart-doughnut.vue` atau `components/chart-doughnut.vue`:

<<< @/vue-demo/src/components/chart-doughnut.vue{8-13,22-30}

- `datasets` berguna untuk mengganti beberapa hal sekaligus.
- `hoverBackgroundColor` adalah untuk mengatur latar warna ketika kita hover over grafik.

Disini ada [isu](https://github.com/hchstera/vue-charts/issues/33) jadi kita perlu menambahkan objek kosong di `option` juga.

### Garis

Dalam `src/components/chart-line.vue` atau `components/chart-line.vue`:

<<< @/vue-demo/src/components/chart-line.vue{25-33,42-57}
