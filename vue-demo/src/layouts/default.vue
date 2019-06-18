<template>
  <div class="container">
    <nav v-if="this.$route.path != '/'" aria-label="breadcrumb">
      <ol class="breadcrumb align-items-center">
        <li class="breadcrumb-item">
          <router-link to="/" class="d-flex align-items-center">
            <ion-icon name="home" />
          </router-link>
        </li>

        <li class="breadcrumb-item active" aria-current="page">
          {{ this.$route.path.replace("/", "") }}
        </li>
      </ol>
    </nav>

    <router-view />
  </div>
</template>

<style lang="scss">
@import "../assets/custom-bootstrap";

.container {
  margin: 0 auto;
  max-width: 992px;
  padding: 2rem 2.5rem;
}

h1 {
  margin-bottom: 2rem;
}
</style>
