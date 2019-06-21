---
title: How to Use Vuex in a Nuxt Project
topic: Vuex
meta:
  - name: description
    content: Steps to use Vuex in a Nuxt project.
---

[Vuex](https://github.com/vuejs/vuex) is a state management pattern and library for Vue.js applications.

> This tutorial uses Github's [Markdown API](https://developer.github.com/v3/markdown/).

## :footprints: Steps

:::tip INFO
Vuex is already included in Nuxt so there is no need to install it.
:::

1. [Register](https://github.com/settings/apps/new) a new GitHub App to get a client ID and a client secret.

2. Create a file named `.env` in the project root and paste your client ID and client secret. For example:

```env
VUE_APP_MARKDOWN_CLIENT_ID=a1b2c3d4e5f6g7h8i9j0
VUE_APP_MARKDOWN_CLIENT_SECRET=a1b2c3d4e5f6g7h8i9j0a1b2c3d4e5f6g7h8i9j0
```

3. Register the environment variables in `nuxt.config.js`.

```js
export default {
  modules: ["@nuxtjs/dotenv"],
  env: {
    VUE_APP_MARKDOWN_CLIENT_ID: process.env.VUE_APP_MARKDOWN_CLIENT_ID,
    VUE_APP_MARKDOWN_CLIENT_SECRET: process.env.VUE_APP_MARKDOWN_CLIENT_SECRET
  }
};
```

:::tip INFO
The next steps are not strictly in order. Expect to jump around working on those files at the same time.
:::

4. Create a template, e.g. in `pages/vuex.vue`.

```html
<template>
  <div>
    <h1>Vuex Demo</h1>

    <textarea
      id="result"
      v-model="input"
      class="bg-dark container mb-4 text-white"
      rows="10"
      autofocus
      @input="renderPreview"
    >
    </textarea>

    <div class="border border-primary container" v-html="renderedMd"></div>
  </div>
</template>
```

5. Create a module, e.g. `store/markdown.js`.

<<< @/nuxt-demo/store/markdown.js

6. Register the module in `store/index.js`:

```js
import Vue from "vue";
import Vuex from "vuex";

import markdown from "./markdown";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    markdown
  }
});
```

7. Use Vuex to complete the template, i.e. in `pages/vuex.vue`.

<<< @/nuxt-demo/pages/vuex.vue

## :book: Explanation

<details>
  <summary>Click if you are not familiar with Vuex yet 😕</summary>

In simple words, [Vuex](https://vuex.vuejs.org/) is something we can use to manage state in our Vue project. **Store** is the container. This store consists of 4 parts:

- [state](https://vuex.vuejs.org/guide/state.html)
- [actions](https://vuex.vuejs.org/guide/actions.html)
- [mutations](https://vuex.vuejs.org/guide/mutations.html)
- [getters](https://vuex.vuejs.org/guide/getters.html)

Our Vue component `render` the initial **state**. Then, when we want to change it, perhaps after a button click, the component calls an action with `dispatch`. Vuex **actions** contains the actions we can use.

The called action does something, for example, make an API call. That action results in something we can change the state with. So at the end of the action, we `commit` that result. Vuex **mutations** contains the changes or mutations we can make.

When the change is already committed, the mutations `mutate` the state. Our component can access the state using **getters**. Getters are like the final processor of your state, so your component can get a ready to use state.

The component can also access the state without getters. It is OK to omit the getter if there is no need to process the state.

Finally, the component will re-render. That is it.

</details>

### Template

`@input="renderPreview"` means that when there is a change, the `renderPreview` method will be executed.

The rendered Markdown will be placed inside `div` under the `textarea`.

The `textarea` is bound to the `input` in the `computed` part. When there is an input, the `set` part will `commit` the changes. The `get` part is what the `input` will show.

Some Markdown input is already present as an example, but the method will not be called without any input change. Because of that, in the `mounted` part the method is called.

Finally, the `methods` contain the `renderPreview` method. This dispatches the `renderPreview` action, bringing the input to be passed.

### Store

The `input` has the example mentioned earlier. When there is a change, the `renderPreview` action is called. URL and `body` is prepared here.

Pass the client ID and client secret to the URL with `process.env.`. `stringify` the `input` for the `body`.

`renderedMd` is taken from the response. `commit` that with `commit("renderedMd", renderedMd);`. The first `renderedMd` corresponds to the item in mutations, while the second one is the result to be passed.

There are 2 items in mutations:

- `updateInput` to change the `input` state.
- `renderedMd` to update the result.

`getters` return the `state`.

:::tip INFO
The `getters` here only return the state without any change, so you can actually get the state without getters in the component. It is my default to use a getter so that when I need to edit the state, I will not need to make lots of changes.
:::
