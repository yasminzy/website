---
title: How to Embed Google Maps in a Vue/Nuxt Project
meta:
  - name: description
    content: Steps to embed Google Maps in a Vue/Nuxt project.
---

# {{ $page.title }}

<start-tutorial demo="google-maps" />

## Get API Key

First, get an API key from the [Google Maps Platform](https://cloud.google.com/maps-platform/). Click **Get Started**.

1.  Pick a product ![Pick product](../img/gmaps-1-pick-product.png)

2.  Select a project ![Select project](../img/gmaps-2-select-project.png)

3.  Create a billing account ![Create billing account](../img/gmaps-3-create-billing-account.png)

4.  Accept the terms of service ![Accept terms](../img/gmaps-4-accept-terms.png)

5.  Create a payment profile ![Create payment profile](../img/gmaps-5-create-payment-profile.png)

6.  Enable the API ![Enable API](../img/gmaps-6-enable-api.png)

7.  Get the API key ![Get API key](../img/gmaps-7-get-api-key.png)

## Installation

### Vue

Now, install:

- [dotenv](https://www.npmjs.com/package/dotenv)
- [vue-google-maps](https://www.npmjs.com/package/vue-google-maps)

```bash{2-3}
cd vue-demo
npm install -D dotenv
npm install vue2-google-maps
```

Create a file named `.env` in the project root and paste your API key. For example:

```env
VUE_APP_GOOGLE_MAPS_API_KEY=ABcdEfGhIjklmNOpqrsTUvWXyzAbcD1EfGhiJKl
```

In `src/main.js`:

<<< @/vue-demo/src/main.js{1,19-22}

### Nuxt

Now, install:

- [@nuxtjs/dotenv](https://www.npmjs.com/package/@nuxtjs/dotenv)
- [vue-google-maps](https://www.npmjs.com/package/vue-google-maps)

```bash{2-3}
cd nuxt-demo
npm install -D @nuxtjs/dotenv
npm install vue2-google-maps
```

Like before, create a file named `.env` in the project root and paste your API key.

In `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{20,26,56}

In `plugins/vue2-google-maps.js`:

<<< @/nuxt-demo/plugins/google-maps.js

## Usage

Now we can start embedding Google Maps.

In `src/views/google-maps.vue` or `pages/google-maps.vue`:

<<< @/vue-demo/src/views/google-maps.vue{5-12,20-25}

We can specify the center of the map with `center`. To make the map zoomed in more, increase the value of `zoom`.

There are four map types we can use for `map-type-id`:

- roadmap
- hybrid
- satellite
- terrain

`gmap-marker` is one of the components supported by `vue-google-maps`. In this example, we have two locations with markers.
