<template>
  <h1 v-if="$page.frontmatter.topic">
    {{ $page.frontmatter.title }}

    <a
      :href="$page.frontmatter.demo || url('demo')"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Badge text="demo" vertical="middle" />
    </a>

    <a
      :href="$page.frontmatter.repo || url('repo')"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Badge text="repo" type="warn" vertical="middle" />
    </a>
  </h1>

  <h1 v-else-if="!$page.frontmatter.topic">{{ $page.frontmatter.title }}</h1>
</template>

<script>
export default {
  methods: {
    url(type) {
      const pathWithoutMd = this.$page.relativePath.replace(".md", "");
      const version = this.$page.frontmatter.version;

      if (type == "demo") {
        if (pathWithoutMd.includes("nuxt")) {
          return `https://nuxtdemo.netlify.app/${pathWithoutMd.replace(
            "nuxt/",
            ""
          )}`;
        } else if (pathWithoutMd.includes("vue")) {
          return version === 2
            ? `https://vue2demo.netlify.app/${pathWithoutMd.replace(
                "vue/",
                ""
              )}`
            : `https://vuedemo.netlify.app/${pathWithoutMd.replace(
                "vue/",
                ""
              )}`;
        } else {
          console.log("vue or nuxt is not in the path.");
        }
      } else if (type == "repo") {
        if (pathWithoutMd.includes("nuxt")) {
          return "https://github.com/yasminzy/website/tree/master/nuxt-demo";
        } else if (pathWithoutMd.includes("vue")) {
          return version === 2
            ? "https://github.com/yasminzy/website/tree/master/vue2-demo"
            : "https://github.com/yasminzy/website/tree/master/vue-demo";
        } else {
          console.log("vue or nuxt is not in the path.");
        }
      } else {
        console.log("type is not demo nor repo.");
      }
    }
  }
};
</script>
