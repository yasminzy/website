---
title: How to Use Axios in a Nuxt Project
topic: Vuex Axios
meta:
  - name: description
    content: Steps to use Axios in a Nuxt project.
---

[Vuex](https://github.com/vuejs/vuex) is a state management pattern and library for Vue.js applications.

[Axios](https://github.com/axios/axios) is a promise based HTTP client for the browser and node.js.

> This tutorial uses Wikipedia's [Opensearch API](https://www.mediawiki.org/wiki/API:Opensearch).

## :footprints: Steps

1. Create a Nuxt project and install Axios.

```bash
npx create-nuxt-app nuxt-demo
cd nuxt-demo
npm i @nuxtjs/axios
```

:::tip INFO
Vuex is already included in Nuxt so there is no need to install it.
:::

2. Register Axios in `nuxt.config.js`.

```js
export default {
  modules: ["@nuxtjs/axios"]
};
```

3. Create a template, e.g. in `pages/vuex-axios.vue`.

```html
<template>
  <div>
    <h1>Vuex Demo with Axios</h1>

    <input
      v-model="query"
      autofocus
      class="form-control mb-4"
      placeholder="Search from Wikipedia"
      type="text"
      @input="getArticles"
    />

    <ul class="list-group list-unstyled">
      <li v-for="(item, index) in articles" :key="index">
        <a
          :href="item.url"
          class="list-group-item list-group-item-action"
          target="_blank"
        >
          <h1>{{ item.title }}</h1>

          <p>{{ item.snippet }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
```

4. Create a module, e.g. `store/wikipedia.js`.

<<< @/nuxt-demo/store/wikipedia.js

5. Register the module in `store/index.js`:

```js
import Vue from "vue";
import Vuex from "vuex";

import wikipedia from "./wikipedia";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    wikipedia
  }
});
```

6. Use Vuex to complete the template, i.e. in `pages/vuex-axios.vue`.

<<< @/nuxt-demo/pages/vuex-axios.vue

## :book: Explanation

### Template

`@input="getArticles"` means that when query changes, the `getArticles` method will be executed.

The articles will be placed inside `ul` under the `input`.

The `input` is bound to the `query` in the `computed` part. When there is an input, the `set` part will `commit` the changes. The `get` part is what the `input` will show.

Finally, the `methods` contain the `getArticles` method. If the search bar is not empty, this method dispatches the `getArticles` action.

### Store

Initially, the `query` and `articles` array are empty.

Pass the `query` from state to the url. Use `axios.get(url)` to use Axios.

Process the response to a better format to consume, then `commit` that. The first `articles` in `commit("articles", articles);` corresponds to the item in mutations. The second one is the result to be passed.

There are 2 items in mutations:

- `updateQuery` to change the `query` state.
- `articles` to update the result.

`getters` return the `state`.
