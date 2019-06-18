---
title: How to Use Vue Charts in a Vue/Nuxt Project
meta:
  - name: description
    content: Steps to use Vue Charts in a Vue/Nuxt project (line, bar, and doughnut charts demo).
---

# {{ $page.title }}

<start-tutorial demo="chart" />

## Installation

### Vue

First, install:

- [chart.js](https://www.npmjs.com/package/chart.js)
- [Vue Charts](https://www.npmjs.com/package/hchs-vue-charts)

```bash{2}
cd vue-demo
npm install chart.js hchs-vue-charts
```

In `src/main.js`:

<<< @/vue-demo/src/main.js{15-17}

### Nuxt

First, install the packages.

```bash{2}
cd nuxt-demo
npm install chart.js hchs-vue-charts
```

In `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{23}

In `plugins/chart.js`:

<<< @/nuxt-demo/plugins/chart.js

## Usage

I want to use three kinds of charts. I split them into components to make the code easier to read.

In `src/views/chart.vue`:

<<< @/vue-demo/src/views/chart.vue

It is almost the same for Nuxt. The only difference is that a `no-ssr` component wraps the content inside `template` there. So the `pages/chart.vue` looks like this:

<<< @/nuxt-demo/pages/chart.vue{2,12}

### Bar

In `src/components/chart-bar.vue` or `components/chart-bar.vue`:

<<< @/vue-demo/src/components/chart-bar.vue{8,10-21,30-45}

To add many charts, in this case, bar charts, add a `canvas`.

- `backgroundcolor` changes the background color.
- `beginzero` makes the chart starts from zero if set to `true`.
- `bind` makes the chart [re-render](http://vue-charts.hchspersonal.tk/databinding) when the data changes, if set to `true`.
- `bordercolor` specifies the border color.
- `data` accepts an array of data.
- `datalabel` is for the data name.
- `labels` sets the x-axis labels.

### Doughnut

In `src/components/chart-doughnut.vue` or `components/chart-doughnut.vue`:

<<< @/vue-demo/src/components/chart-doughnut.vue{8-13,22-30}

- `datasets` is useful for changing many things at once.
- `hoverBackgroundColor` is for setting the background color when we hover over the chart.

There is also this [issue](https://github.com/hchstera/vue-charts/issues/33) so we need to add that empty object for the `option` as well.

### Line

In `src/components/chart-line.vue` or `components/chart-line.vue`:

<<< @/vue-demo/src/components/chart-line.vue{25-33,42-57}
