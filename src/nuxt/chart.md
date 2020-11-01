---
title: How to Use Chart.js in a Nuxt Project
topic: Chart
meta:
  - name: description
    content: Steps to use Chart.js in a Nuxt project.
---

[Chart.js](https://github.com/chartjs/Chart.js) is a simple HTML5 Charts using the `<canvas>` tag.

[vue-chartjs](https://github.com/apertureless/vue-chartjs) is a wrapper for Chart.js in Vue.

::: warning Note
Before, I used [vue-charts](https://github.com/GimmyHchs/vue-charts) as the wrapper. But since it is now deprecated, I use another wrapper and updated this page.
:::

## :footprints: Steps

1. Create a Nuxt project and install Chart.js and vue-chartjs.

```bash
npx create-nuxt-app nuxt-demo
cd nuxt-demo
npm i chart.js vue-chartjs
```

2. Create a page for the chart, e.g. in `pages/chart.vue`. Here I will create bar, doughnut, and line charts.

<<< @/nuxt-demo/pages/chart.vue

3. Create a `.js` components for the base charts in `components`.

In `components/ChartBarBase.js`:

<<< @/nuxt-demo/components/ChartBarBase.js

In `components/ChartDoughnutBase.js`:

<<< @/nuxt-demo/components/ChartDoughnutBase.js

In `components/ChartLineBase.js`:

<<< @/nuxt-demo/components/ChartLineBase.js

4. Create the wrapper component for each chart in `components`.

In `components/ChartBar.vue`:

<<< @/nuxt-demo/components/ChartBar.vue

In `components/ChartDoughnut.vue`:

<<< @/nuxt-demo/components/ChartDoughnut.vue

In `components/ChartLine.vue`:

<<< @/nuxt-demo/components/ChartLine.vue

## :book: Explanation

### Base

- `extends` extends the imported base chart.
- `reactiveProp` watches changes to the prop, so the chart can update or re-render if the data has changed.
- `props` registers the prop for passing data to the chart base.
- `options` is for storing options that will be used by the respective chart. You can pass them as a prop in each chart component instead if you need to use unique options in every chart.
  - `beginAtZero` makes the chart starts from zero if set to `true`.
  - `responsive` makes the chart responsive if set to `true`.
- Calling `this.renderChart()` creates the chart instance.

:::tip INFO
Separating the base from the wrapper component makes the component reusable because you can use one base for multiple charts with the same type but with different data. But if you only need one chart, you can input the data directly inside the base component. Not that I recommend it.
:::

### Bar

- `chartData` is initially `null`. After `mounted`, the `fillData` method is called and fill the data.
- `labels` sets the x-axis labels.
- `datasets` is an array for dataset objects.
  - `backgroundcolor` changes the background color.
  - `bordercolor` specifies the border color.
  - `data` accepts an array of data.
  - `label` is for the data name.

### Doughnut

- `hoverBackgroundColor` is for setting the background color when it is hovered over.

### Line

- `updateChart` is called instead of `fillData` because `@change` can precede `v-model`, meaning the chart sees the radio value just before it changes, making it show the wrong data. I heard it is different for different browsers, but it happens in Firefox. To be safe, just wait for the next tick before re-filling the data.
