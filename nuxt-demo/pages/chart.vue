<template>
  <no-ssr>
    <div>
      <h1>Chart Demo</h1>

      <div class="grid">
        <ChartBar />
        <ChartDoughnut />
        <ChartLine />
      </div>
    </div>
  </no-ssr>
</template>

<script>
import ChartBar from "@/components/chart-bar";
import ChartDoughnut from "@/components/chart-doughnut";
import ChartLine from "@/components/chart-line";

export default {
  components: {
    ChartBar,
    ChartDoughnut,
    ChartLine
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  row-gap: 2rem;
}
</style>
