<template>
  <div>
    <h1>Highlight Demo</h1>

    <h2>HTML</h2>
    <highlight-code lang="xml">{{ html }}</highlight-code>

    <h2>JavaScript</h2>
    <!-- prettier-ignore -->
    <highlight-code lang="js">
      const me = {
        name: "Yasmin ZY", country: "Indonesia"
      }
    </highlight-code>

    <h2>SCSS</h2>
    <!-- prettier-ignore -->
    <highlight-code lang="scss">
      .grid {
        display: grid;
        @media (min-width: 576px) {
          grid-template-columns: 1fr 1fr;
        }
      }
  </highlight-code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html: `<article>
  <h1 class="title">How to Use Highlight.js in a Vue/Nuxt Project</h1>
  <p>Go to https://yasminzy.com/nuxt/highlight/</p>
</article>`
    };
  }
};
</script>

<style scoped>
pre:not(:last-of-type) {
  margin-bottom: 2rem;
}
</style>
