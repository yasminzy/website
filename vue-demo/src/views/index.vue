<template>
  <div>
    <h1>Vue Demo</h1>

    <ul class="list-group list-group-flush">
      <li v-for="(item, index) in projects" :key="index" class="list-unstyled">
        <router-link
          :to="urlize(item)"
          class="list-group-item list-group-item-action"
          >{{ item }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        "AOS",
        "Bootstrap",
        "Ionicons",
        "PostCSS",
        "Vuex",
        "Vuex Axios"
      ]
    };
  },
  methods: {
    urlize(input) {
      if (input) {
        return (
          "/" +
          input
            .toLowerCase()
            .replace(/\s/g, "-")
            .replace(/[^-a-z0-9A-Z_]/g, "")
        );
      }
    }
  }
};
</script>

<style scoped>
.list-group-item {
  border-width: 0 0 1px;
}
</style>
