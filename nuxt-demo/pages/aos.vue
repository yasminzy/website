<template>
  <div>
    <h1 data-aos="fade">AOS Demo</h1>

    <p data-aos="flip-up" data-aos-duration="1000">
      AOS is awesome! Thank you
      <a class="anchor" href="https://twitter.com/michalsnik">
        Michał Sajnóg
      </a>
      😄
    </p>

    <p data-aos="slide-up" data-aos-easing="ease">
      Paragraph with fade up animation and <code>ease</code> easing.
    </p>

    <p data-aos="zoom-in" data-aos-anchor=".anchor">
      Paragraph with fade down animation with the above link as anchor. This
      makes this paragraph animate before the previous paragraph starts
      animating.
    </p>

    <hr class="my-5" />

    <b-row class="list-unstyled">
      <b-col
        v-for="(item, index) in img"
        :key="index"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
        sm="6"
        class="
          align-items-center
          d-flex
          flex-column
          justify-content-center
          mb-5
        "
      >
        <b-img fluid :src="getImg(item)" class="mb-3 mr-3" />

        <h2 class="h4">{{ item }}</h2>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: ["Animals", "Arch", "Nature", "People", "Tech"]
    };
  },
  methods: {
    getImg(name) {
      return "https://placeimg.com/400/225/" + name.toLowerCase();
    }
  }
};
</script>
