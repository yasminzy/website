<template>
  <no-ssr>
    <div class="container">
      <nav v-if="this.$route.name != 'index'" aria-label="breadcrumb">
        <ol class="breadcrumb align-items-center">
          <li class="breadcrumb-item">
            <nuxt-link to="/" class="d-flex align-items-center">
              <ion-icon name="home" />
            </nuxt-link>
          </li>

          <li class="breadcrumb-item active" aria-current="page">
            {{ this.$route.name }}
          </li>
        </ol>
      </nav>

      <nuxt />
    </div>
  </no-ssr>
</template>

<style lang="scss">
.container {
  margin: 0 auto;
  max-width: 992px;
  padding: 2rem 2.5rem;
}

h1 {
  margin-bottom: 2rem;
}
</style>
