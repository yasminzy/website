<template>
  <ul>
    <li v-for="(item, index) in projects" :key="index">
      <a :href="item.url" target="_blank">
        {{ item.title }}
        <img :src="require('../../img/' + item.img)" :alt="item.title" />
      </a>

      <div>
        <h2>
          <a :href="item.url" target="_blank">
            {{ item.title }}
          </a>
        </h2>

        <p v-if="lang == 'id'">{{ item.description.id }}</p>
        <p v-else>{{ item.description.en }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { projects } from "../../data.js";

export default {
  props: {
    lang: {
      type: String,
      default: "en"
    }
  },
  data() {
    return {
      projects
    };
  }
};
</script>

<style lang="stylus" scoped>
ul {
  display: grid;
  list-style-type: none;
  padding-left: 0;
  row-gap: 2rem;

  @media (min-width: 576px) {
    column-gap: 2.5rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    column-gap: 5rem;
    grid-template-columns: repeat(3, 1fr);
  }
}

a {
  cursor: pointer;
}
</style>