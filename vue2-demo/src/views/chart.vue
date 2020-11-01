<template>
  <div>
    <h1>Chart Demo</h1>

    <div class="grid">
      <ChartBar />
      <ChartDoughnut />
      <ChartLine />
    </div>
  </div>
</template>

<script>
import ChartBar from "@/components/ChartBar";
import ChartDoughnut from "@/components/ChartDoughnut";
import ChartLine from "@/components/ChartLine";

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
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
