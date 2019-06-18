<template>
  <nav class="bg-dark navbar navbar-expand-lg navbar-dark w-100">
    <router-link class="navbar-brand" to="/">
      <img
        :src="require('../assets/logo.svg')"
        class="d-inline-block align-top"
        alt="Logo"
        width="30"
        height="30"
      />
      <span class="font-weight-bold">Unordinary</span>
    </router-link>

    <button
      class="border-0 navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto w-auto">
        <li v-for="(item, index) in menu" :key="index" class="nav-item">
          <a class="nav-link" :href="item.to">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { to: "#about", label: "About" },
        { to: "#contact", label: "Contact" }
      ]
    };
  },
  methods: {
    to(input) {
      if (input.label) {
        return input.to;
      } else {
        return `/${input.toLowerCase()}`;
      }
    }
  }
};
</script>
