---
title: How to Use Vue Charts in a Nuxt Project
topic: Chart
meta:
  - name: description
    content: Steps to use Vue Charts in a Nuxt project.
---

[Vue Charts](https://github.com/hchstera/vue-charts) is a wrapper for ChartJs based on Vue 2.0.

## :footprints: Steps

1. Create a Nuxt project and install ChartJs and Vue Charts..

```bash
npx create-nuxt-app nuxt-demo
cd nuxt-demo
npm i chart.js hchs-vue-charts
```

2. Create Vue Charts plugin in `plugins/chart.js`.

<<< @/nuxt-demo/plugins/chart.js

3. Register the plugin in `nuxt.config.js`.

```js
export default {
  plugins: [{ src: "@/plugins/chart", ssr: false }]
};
```

4. Use Vue Charts, e.g. in `pages/chart.vue`.

<<< @/nuxt-demo/pages/chart.vue

In `components/chart-bar.vue`:

<<< @/nuxt-demo/components/chart-bar.vue

In `components/chart-doughnut.vue`:

<<< @/nuxt-demo/components/chart-doughnut.vue

In `components/chart-line.vue`:

<<< @/nuxt-demo/components/chart-line.vue

## :book: Explanation

### Bar

- Use `canvas` to add many charts.
- `backgroundcolor` changes the background color.
- `beginzero` makes the chart starts from zero if set to `true`.
- `bind` makes the chart [re-render](http://vue-charts.hchspersonal.tk/databinding) when the data changes, if set to `true`.
- `bordercolor` specifies the border color.
- `data` accepts an array of data.
- `datalabel` is for the data name.
- `labels` sets the x-axis labels.

### Doughnut

- `datasets` is useful for changing many things at once.
- `hoverBackgroundColor` is for setting the background color when it is hovered over.
- `option` with empty object is needed due to this [issue](https://github.com/hchstera/vue-charts/issues/33).
