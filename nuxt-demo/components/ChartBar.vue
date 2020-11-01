<template>
  <b-card title="Bar">
    <b-card img-bottom>
      <ChartBarBase :chart-data="chartData" />
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
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            backgroundColor: "#de98ab",
            borderColor: "#0c0306",
            data: [1, 3, 5, 7, 2, 4, 6],
            label: "Bar"
          },
          {
            backgroundColor: "#98ddde",
            borderColor: "#030c0c",
            data: [1, 5, 2, 6, 3, 7, 4],
            label: "Baz"
          }
        ]
      };
    }
  }
};
</script>
