<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="w-100">
    <b-navbar-brand to="/">
      <b-img
        class="d-inline-block align-top"
        src="~assets/logo.svg"
        alt="Logo"
        width="30"
        height="30"
      />
      <span class="font-weight-bold">Unordinary</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-for="(item, index) in menu" :key="index" :href="item.to">
          {{ item.label }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
  }
};
</script>
