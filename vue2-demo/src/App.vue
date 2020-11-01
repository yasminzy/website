<template>
  <b-container>
    <b-breadcrumb
      v-if="this.$route.path != '/'"
      :items="items"
      class="w-100"
    ></b-breadcrumb>

    <router-view />
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
          text: this.$route.path.replace("/", ""),
          active: true
        }
      ]
    };
  },
  watch: {
    $route() {
      this.items[1].text = this.$route.path.replace("/", "");
    }
  }
};
</script>

<style lang="scss">
@import "./assets/custom-bootstrap.scss";

::selection {
  background-color: $primary;
  color: #fff;
}

.container {
  margin: 0 auto;
  max-width: 992px;
  padding: 2rem 2.5rem;
}

h1 {
  margin-bottom: 2rem;
}
</style>
