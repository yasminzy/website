<template>
  <div>
    <blockquote>
      <p v-if="lang == 'id'">
        <a class="router-link-active" href="./">Pertama kali kesini? 😁</a>
      </p>

      <p v-else>
        <a class="router-link-active" href="./">First visit? 😁</a>
      </p>
    </blockquote>

    <ul v-show="demo">
      <li v-for="(item, index) in links" :key="index">
        <a :href="item.url + demo" target="_blank" rel="noopener noreferrer">
          {{ item.label }}
          <OutboundLink />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    demo: {
      type: String,
      default: ""
    },
    lang: {
      type: String,
      default: "en"
    }
  },
  data() {
    return {
      links: [
        {
          label: "Vue demo",
          url: "https://vuedemo.netlify.com/"
        },
        {
          label: "Nuxt demo",
          url: "https://nuxtdemo.netlify.com/"
        }
      ]
    };
  }
};
</script>
