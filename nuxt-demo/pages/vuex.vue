<template>
  <client-only>
    <div>
      <h1>Vuex Demo</h1>

      <b-form-textarea
        id="result"
        v-model="input"
        class="bg-dark container mb-4 text-white"
        rows="10"
        autofocus
        @input="renderPreview"
      >
      </b-form-textarea>

      <b-container
        class="border border-primary"
        v-html="renderedMd"
      ></b-container>
    </div>
  </client-only>
</template>

<script>
export default {
  computed: {
    input: {
      get() {
        return this.$store.getters["markdown/input"];
      },
      set(value) {
        this.$store.commit("markdown/updateInput", value);
      }
    },
    renderedMd() {
      return this.$store.getters["markdown/renderedMd"];
    }
  },
  mounted() {
    this.renderPreview();
  },
  methods: {
    renderPreview() {
      this.$store.dispatch("markdown/renderPreview", this.input);
    }
  }
};
</script>
