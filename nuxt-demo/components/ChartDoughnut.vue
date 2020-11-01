<template>
  <b-card title="Doughnut">
    <b-card img-bottom>
      <ChartDoughnutBase :chart-data="chartData" />
    </b-card>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      chartData: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: ["Foo", "Bar", "Baz"],
        datasets: [
          {
            backgroundColor: ["#f36e60", "#ffdb3b", "#185190"],
            hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"],
            data: [10, 20, 40]
          }
        ]
      };
    }
  }
};
</script>
