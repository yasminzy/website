---
title: How to Use Axios in a Vue Project
topic: Vuex Axios
meta:
  - name: description
    content: Steps to use Axios in a Vue project.
---

[Vuex](https://github.com/vuejs/vuex) is a state management pattern and library for Vue.js applications.

[Axios](https://github.com/axios/axios) is a promise based HTTP client for the browser and node.js.

> This tutorial uses Wikipedia's [Opensearch API](https://www.mediawiki.org/wiki/API:Opensearch).

## :footprints: Steps

1. Create a Vue project and select the Vuex feature. If it is inside an existing project, add Vuex with `vue add vuex`.

```bash
npm i -g @vue/cli
vue create vue-demo
cd vue-demo
npm i axios
```

2. Register Vuex in `src/main.js`.

```js
import store from "./store/";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
```

3. Create a template, e.g. in `src/views/vuex-axios.vue`.

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

4. Create a module, e.g. `src/store/wikipedia.js`.

<<< @/vue-demo/src/store/wikipedia.js

5. Register the module in `src/store/index.js`:

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

6. Use Vuex to complete the template, i.e. in `src/views/vuex-axios.vue`.

<<< @/vue-demo/src/views/vuex-axios.vue

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
