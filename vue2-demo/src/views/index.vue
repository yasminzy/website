<template>
  <div>
    <h1>Vue 2 Demo</h1>

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
      projects: ["Bootstrap", "Chart", "Highlight", "Vue Lazyload"]
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
