<template>
  <div class="container">
    <ol v-if="$route.path != '/'" class="breadcrumb w-100">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{ active: item.active }"
        class="breadcrumb-item"
      >
        <router-link v-if="item.to" :to="item.to">
          {{ item.text }}
        </router-link>

        <span v-else>{{ item.text }}</span>
      </li>
    </ol>

    <router-view />
  </div>
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
