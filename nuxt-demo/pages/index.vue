<template>
  <div>
    <h1>Nuxt Demo</h1>

    <ul class="list-group list-group-flush">
      <li
        v-for="(item, index) in projects"
        :key="index"
        class="list-group-item p-0"
      >
        <nuxt-link :to="urlize(item)" class="d-block link">{{
          item
        }}</nuxt-link>
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
        "Chart",
        "Google Maps",
        "Ionicons",
        "PostCSS",
        "Prism",
        "Vue Lazyload",
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

<style lang="scss" scoped>
.link {
  padding: 0.75rem 1.25rem;
}
</style>
