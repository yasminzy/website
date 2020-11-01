<template>
  <b-jumbotron id="about" bg-variant="white" class="rounded-0 mb-0">
    <b-row>
      <b-col
        md="4"
        order-md="2"
        class="d-flex align-items-center justify-content-center"
      >
        <b-img fluid src="~assets/john-doe.jpeg" alt="John Doe" class="img" />
      </b-col>

      <b-col md="8" order-md="1">
        <b-container>
          <h2 class="display-4">John Doe</h2>

          <p class="lead">
            I am also known as joker, <del>shadow</del> king, and
            &#647;n&#477;sp&#592;&#654;.<br />I hate the hierarchy, so I broke
            it.
          </p>
        </b-container>
      </b-col>
    </b-row>
  </b-jumbotron>
</template>

<style scoped>
.img {
  max-height: 300px;
}
</style>
