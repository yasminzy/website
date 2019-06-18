<template>
  <div>
    <h1>Vuex Demo with Axios</h1>

    <input
      v-model="query"
      autofocus
      class="form-control mb-4"
      placeholder="Search from Wikipedia"
      type="text"
      @input="getArticles"
    />

    <ul class="list-group list-unstyled">
      <li v-for="(item, index) in articles" :key="index">
        <a
          :href="item.url"
          class="list-group-item list-group-item-action"
          target="_blank"
        >
          <h1>{{ item.title }}</h1>

          <p>{{ item.snippet }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    query: {
      get() {
        return this.$store.getters.query;
      },
      set(value) {
        this.$store.commit("updateQuery", value);
      }
    },
    articles() {
      return this.$store.getters.articles;
    }
  },
  methods: {
    getArticles() {
      if (this.query) {
        this.$store.dispatch("getArticles");
      }
    }
  }
};
</script>
