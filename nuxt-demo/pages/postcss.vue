<template>
  <div>
    <h1>PostCSS Demo</h1>

    <p>Articles about PostCSS:</p>

    <ul class="list-group">
      <li
        v-for="(item, index) in articles"
        :key="index"
        class="list-group-item p-0"
      >
        <a
          :href="item.url"
          target="_blank"
          class="d-block d-md-flex align-items-center"
        >
          <img
            :src="item.img"
            :alt="item.title"
            class="d-block img-thumbnail mr-md-3"
          />

          <h2>{{ item.title }}</h2>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          title:
            "Some things you may think about PostCSS... and you might be wrong",
          url:
            "http://julian.io/some-things-you-may-think-about-postcss-and-you-might-be-wrong/",
          img: "https://placeimg.com/900/300/tech"
        },
        {
          title:
            "It's Time for Everyone to Learn About PostCSS What It Really Is; What It Really Does",
          url:
            "https://davidtheclark.com/its-time-for-everyone-to-learn-about-postcss/",
          img: "https://placeimg.com/900/300/tech/grayscale"
        },
        {
          title: "PostCSS Deep Dive",
          url:
            "https://webdesign.tutsplus.com/series/postcss-deep-dive--cms-889",
          img: "https://placeimg.com/900/300/tech/sepia"
        }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
.container {
  font-family: system-ui;
  font-size: responsive;
  transition: all 250ms ease-in-cubic;
}

a {
  color: var(--turkish-sea);
  padding: 0.75rem 1.25rem;

  @media (--sm) {
    color: var(--viridian-green);
  }

  @media (--md) {
    color: var(--turtle-green);
  }

  @media (--xl) {
    color: var(--living-coral);
  }

  &:hover {
    background-color: #f6f7fb;
  }
}

img {
  @media (min-width: 768px) {
    max-width: 225px;
  }
}
</style>
