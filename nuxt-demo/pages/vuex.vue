<template>
  <no-ssr>
    <div>
      <h1>Vuex Demo</h1>

      <textarea
        id="result"
        v-model="input"
        class="bg-dark container mb-4 text-white"
        rows="10"
        autofocus
        @input="renderPreview"
      >
      </textarea>

      <div class="border border-primary container" v-html="renderedMd"></div>
    </div>
  </no-ssr>
</template>

<script>
export default {
  computed: {
    input: {
      get() {
        return this.$store.getters.input;
      },
      set(value) {
        this.$store.commit("updateInput", value);
      }
    },
    renderedMd() {
      return this.$store.getters.renderedMd;
    }
  },
  mounted() {
    this.renderPreview();
  },
  methods: {
    renderPreview() {
      this.$store.dispatch("renderPreview", this.input);
    }
  }
};
</script>
