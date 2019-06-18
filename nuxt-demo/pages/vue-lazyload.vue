<template>
  <div>
    <h1>Vue Lazyload Demo</h1>

    <div class="grid">
      <div
        v-for="(item, index) in img"
        :key="index"
        class="border-primary card"
      >
        <img v-lazy="item" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        "https://placeimg.co/450/450/animals",
        "https://placeimg.com/450/450/arch",
        "https://placeimg.com/450/450/nature",
        "https://placeimg.com/450/450/people",
        "https://placeimg.com/450/450/tech"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2.5rem;
  }
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
