<template>
  <div class="home">
    <div class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero" />

      <h1>{{ data.heroText || $title || "Hello" }}</h1>

      <p class="description">
        {{
          data.description || $description || "Welcome to your VuePress site"
        }}
      </p>

      <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink" />
      </p>
    </div>

    <Content custom class="custom" />

    <div class="footer" v-if="data.footer">
      <p>{{ data.footer }}</p>

      <ul class="links" v-if="data.links && data.links.length">
        <li v-for="(links, index) in data.links" :key="index">
          <a :href="links.url">
            <ion-icon :name="links.name" class="action-button" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>

<style lang="stylus">
@import './styles/config.styl';

.home {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 960px;
  min-height: calc(100vh - 57.59px);
  padding: $navbarHeight 2rem 0;

  .hero {
    text-align: center;

    img {
      display: block;
      margin: 3rem auto 1.5rem;
      max-height: 280px;
      max-width: 100%;
    }

    h1 {
      font-size: 3rem;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      color: lighten($textColor, 40%);
      font-size: 1.6rem;
      line-height: 1.3;
      max-width: 35rem;
    }

    .action-button {
      background-color: $accentColor;
      border-bottom: 1px solid darken($accentColor, 10%);
      border-radius: 4px;
      box-sizing: border-box;
      color: #fff;
      display: inline-block;
      font-size: 1.2rem;
      padding: 0.8rem 1.6rem;
      transition: background-color 0.1s ease;

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .custom {
    text-align: center;
  }

  .footer {
    align-items: center;
    border-top: 1px solid $borderColor;
    color: lighten($textColor, 25%);
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding: 1.5rem;
    text-align: center;
  }

  .links {
    align-items: center;
    display: flex;
    list-style-type: none;
    margin: 0;
    padding-left: 0;

    li {
      border-bottom: none;
      color: lighten($textColor, 10%);
      font-size: 1.4rem;
      font-weight: 500;
      padding-left: 1rem;
      padding-right: 1rem;

      &:last-child {
        padding-right: 0;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .home {
    .footer {
      flex-direction: column-reverse;
    }

    .links {
      justify-content: center;
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        margin: 2rem auto 1.2rem;
        max-height: 210px;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .links {
      li {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
