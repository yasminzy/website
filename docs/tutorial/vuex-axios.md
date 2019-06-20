---
title: How to Use Axios HTTP Client in a Vue/Nuxt Project
topic: Vuex Axios
meta:
  - name: description
    content: Steps to use Axios HTTP client in a Vue/Nuxt project.
---

In this tutorial, I want to use Wikipedia's [Opensearch API](https://www.mediawiki.org/wiki/API:Opensearch). With this, we can enter keywords and get related articles from Wikipedia.

## :computer: Installation

### Vue

First, add [Vuex](https://vuex.vuejs.org/) and install [axios](https://www.npmjs.com/package/prismjs)

```bash{2-3}
cd vue-demo
vue add vuex
npm install axios
```

In `src/main.js`:

<<< @/vue-demo/src/main.js{6,51}

### Nuxt

Vuex is already included in Nuxt so there is no need to install it.

Install [@nuxtjs/axios](https://www.npmjs.com/package/@nuxtjs/axios).

```bash{2}
cd nuxt-demo
npm install @nuxtjs/axios
```

In `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{33}

You can pass [options](https://axios.nuxtjs.org/options) using `axios` section in that file if you want. For example: `axios: { proxy: true }`

## :arrow_right: Usage

In `src/views/vuex-axios.vue`:

<<< @/vue-demo/src/views/vuex-axios.vue

`@input="getArticles"` means that when we enter the query, the `getArticles` method will be executed.

The articles will be placed inside `ul` under the `input`.

The `input` is bound to the `query` in the `computed` part. When we enter something, the `set` part will `commit` the changes. The `get` part is what the `input` will show.

Finally, the `methods` contain the `getArticles` method. If the search bar is not empty, this method dispatches the `getArticles` action.

Now, let's move on to the store. I used the `wikipedia.js` module.

In `src/store/index.js`:

<<< @/vue-demo/src/store/index.js

For Nuxt, in `store/index.js`:

<<< @/nuxt-demo/store/index.js

OK, finally in `src/store/wikipedia.js`:

<<< @/vue-demo/src/store/wikipedia.js

Initially, the `query` and `articles` array are empty.

Pass the `query` from state to the url. Use `axios.get(url)` to use Axios.

Process the response to a better format to consume, then `commit` that. The first `articles` in `commit("articles", articles);` corresponds to the item in mutations. The second one is the result to be passed.

There are 2 items in mutations. We use `updateQuery` to change the `query` state and `articles` to update the result.

The `getters` here only return the state without any change, so you can actually get the state without getters in the component.

It almost the same for Nuxt, in `store/wikipedia.js`:

<<< @/nuxt-demo/store/wikipedia.js{10}

Notice that instead of importing Axios, we call it with `this.$axios`.
