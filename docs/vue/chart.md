---
title: How to Use Vue Charts in a Vue Project
topic: Chart
meta:
  - name: description
    content: Steps to use Vue Charts in a Vue project.
---

[Vue Charts](https://github.com/hchstera/vue-charts) is a wrapper for ChartJs based on Vue 2.0.

## :footprints: Steps

1. Create a Vue project and install ChartJs and Vue Charts.

```bash
npm i -g @vue/cli
vue create vue-demo
cd vue-demo
npm i chart.js hchs-vue-charts
```

2. Register Vue Charts in `src/main.js`.

```js
import "chart.js";
import "hchs-vue-charts";
Vue.use(window.VueCharts);
```

3. Use Vue Charts, e.g. in `src/views/chart.vue`.

<<< @/vue-demo/src/views/chart.vue

In `src/components/chart-bar.vue`:

<<< @/vue-demo/src/components/chart-bar.vue

In `src/components/chart-doughnut.vue`:

<<< @/vue-demo/src/components/chart-doughnut.vue

In `src/components/chart-line.vue`:

<<< @/vue-demo/src/components/chart-line.vue

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
