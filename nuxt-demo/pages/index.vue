<template>
  <div>
    <h1>Nuxt Demo</h1>

    <b-list-group flush>
      <b-list-group-item
        v-for="(item, index) in projects"
        :key="index"
        :to="urlize(item)"
      >
        {{ item }}
      </b-list-group-item>
    </b-list-group>
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
        "Highlight",
        "Ionicons",
        "PostCSS",
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
