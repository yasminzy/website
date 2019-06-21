<template>
  <h1 v-if="$page.frontmatter.topic">
    {{ $page.frontmatter.title }}
    <a
      :href="demo ? demo : url('demo')"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Badge text="demo" vertical="middle" />
    </a>
    <a
      :href="repo ? repo : url('repo')"
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
  props: {
    demo: {
      type: String,
      default: ""
    },
    repo: {
      type: String,
      default: ""
    }
  },
  methods: {
    url(type) {
      const pathWithoutMd = this.$page.relativePath.replace(".md", "");

      if (type == "demo") {
        if (pathWithoutMd.includes("nuxt")) {
          return `https://nuxtdemo.netlify.com/${pathWithoutMd.replace(
            "nuxt/",
            ""
          )}`;
        } else if (pathWithoutMd.includes("vue")) {
          return `https://vuedemo.netlify.com/${pathWithoutMd.replace(
            "vue/",
            ""
          )}`;
        } else {
          console.log("vue or nuxt is not in the path.");
        }
      } else if (type == "repo") {
        if (pathWithoutMd.includes("nuxt")) {
          return "https://github.com/yasminzy/yasminzy/tree/master/nuxt-demo";
        } else if (pathWithoutMd.includes("vue")) {
          return "https://github.com/yasminzy/yasminzy/tree/master/vue-demo";
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
