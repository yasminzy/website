<template>
  <div id="about" class="bg-white rounded-0 jumbotron mb-0 row">
    <div
      class="col-md-4 order-md-2 d-flex align-items-center justify-content-center"
    >
      <img
        :src="require('../assets/john-doe.jpeg')"
        alt="John Doe"
        class="img-fluid"
      />
    </div>

    <div class="col-md-8 order-md-1 container">
      <h2 class="display-4">John Doe</h2>

      <p class="lead">
        I am also known as joker, <del>shadow</del> king, and
        &#647;n&#477;sp&#592;&#654;.<br />I hate the hierarchy, so I broke it.
      </p>
    </div>
  </div>
</template>

<style scoped>
img {
  max-height: 300px;
}
</style>
