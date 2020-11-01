<template>
  <div>
    <h1>Vuex Demo with Axios</h1>

    <b-form-input
      v-model="query"
      autofocus
      class="mb-4"
      placeholder="Search from Wikipedia"
      type="text"
      @input="getArticles"
    />

    <b-list-group class="list-unstyled">
      <b-list-group-item
        v-for="(item, index) in articles"
        v-show="item.title"
        :key="index"
        :href="item.url"
        target="_blank"
      >
        <h1>{{ item.title }}</h1>

        <p>{{ item.snippet }}</p>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  computed: {
    query: {
      get() {
        return this.$store.getters["wikipedia/query"];
      },
      set(value) {
        this.$store.commit("wikipedia/updateQuery", value);
      }
    },
    articles() {
      return this.$store.getters["wikipedia/articles"];
    }
  },
  methods: {
    getArticles() {
      if (this.query) {
        this.$store.dispatch("wikipedia/getArticles");
      }
    }
  }
};
</script>
