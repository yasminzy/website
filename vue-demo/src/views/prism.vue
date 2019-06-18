<template>
  <div>
    <h1>Prism Demo</h1>

    <h2>HTML</h2>
    <prism>{{ html }}</prism>

    <h2>JavaScript</h2>
    <!-- prettier-ignore -->
    <prism language="js">const me = {
  name: "Yasmin ZY",
  country: "Indonesia"
}</prism>

    <h2>SCSS</h2>
    <!-- prettier-ignore -->
    <prism language="scss">.grid {
  display: grid;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
}</prism>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html: `<article>
  <h1 class="title">How to Use Prism in a Vue/Nuxt Project</h1>
  <p>Go to https://www.yasminzy.com/tutorial/prism.html</p>
</article>`
    };
  }
};
</script>

<style lang="scss" scoped>
pre:not(:last-of-type) {
  margin-bottom: 2rem;
}
</style>
