<template>
  <div id="contact" class="bg-primary container-fluid mh-100 px-0 text-white">
    <div class="container-fluid content py-3 mh-100">
      <div class="container">
        <h3 class="mb-4">Contact Me</h3>

        <p>
          You know I am busy beating up high-tiers while keeping Sera in the
          dark. So reach me out through my sidekick Cecile.
        </p>

        <hr class="bg-white" />

        <div class="row">
          <div class="col-md-7 mb-5 mb-md-0 py-3">
            <form
              action="https://formspree.io/yasmin@yasminzy.com"
              method="POST"
            >
              <div class="form-group">
                <input
                  id="name"
                  class="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>

              <div class="form-group">
                <input
                  id="email"
                  class="form-control"
                  type="email"
                  name="_replyto"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  required
                />
              </div>

              <div class="form-group">
                <textarea
                  id="message"
                  class="form-control"
                  rows="3"
                  name="message"
                  placeholder="Message"
                  required
                />
              </div>

              <input type="hidden" name="_subject" value="Bootstrap Demo" />
              <input
                type="hidden"
                name="_next"
                value="https://www.yasminzy.com"
              />

              <button
                type="submit"
                class="bg-white btn d-flex align-items-center text-dark"
              >
                SEND
                <ion-icon name="send" class="pl-1 text-primary" />
              </button>
            </form>
          </div>

          <div class="col-md-3 offset-md-1">
            <ul class="list-group mb-5 wrapper">
              <li
                v-for="(item, index) in contact"
                :key="index"
                class="bg-transparent border-left-0 border-right-0 border-top-0 list-group-item px-0"
              >
                <div>
                  <p class="font-weight-bold mb-2 text-uppercase">
                    {{ item.label }}
                  </p>

                  <small>{{ item.content }}</small>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: [
        {
          label: "Telephone",
          content: "(12) 345-6789"
        },
        {
          label: "Email",
          content: "cecile[at]welston.com"
        },
        {
          label: "Address",
          content: "2019 Black Speech Bubble, ID"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;

  @media (min-width: 768px) {
    text-align: initial;
  }
}

li {
  text-align: center;

  @media (min-width: 768px) {
    text-align: initial;
  }
}

li:last-child {
  border-bottom: 0;
}
</style>
