<template>
  <b-container>
    <b-breadcrumb
      v-if="this.$route.name != 'index'"
      :items="items"
      class="w-100"
    ></b-breadcrumb>

    <nuxt />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          to: "/"
        },
        {
          text: this.$route.name,
          active: true
        }
      ]
    };
  },
  watch: {
    $route() {
      this.items[1].text = this.$route.name;
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 992px;
  padding: 2rem 2.5rem;
}

h1 {
  margin-bottom: 2rem;
}
</style>
