---
title: How to Use Vuex in a Vue/Nuxt Project
meta:
  - name: description
    content: Steps to use Vuex in a Vue/Nuxt project.
---

# {{ $page.title }}

<start-tutorial demo="vuex" />

In simple words, [Vuex](https://vuex.vuejs.org/) is something we can use to manage state in our Vue/Nuxt project. **Store** is the container. This store consists of 4 parts:

- [state](https://vuex.vuejs.org/guide/state.html)
- [actions](https://vuex.vuejs.org/guide/actions.html)
- [mutations](https://vuex.vuejs.org/guide/mutations.html)
- [getters](https://vuex.vuejs.org/guide/getters.html)

Our Vue component `render` the initial **state**. Then, when we want to change it, perhaps after a button click, the component calls an action with `dispatch`. Vuex **actions** contains the actions we can use.

The called action does something, for example, make an API call. That action results in something we can change the state with. So at the end of the action, we `commit` that result. Vuex **mutations** contains the changes or mutations we can make.

When the change is already committed, the mutations `mutate` the state. Our component can access the state using **getters**. Getters are like the final processor of your state, so your component can get a ready to use state.

The component can also access the state without getters. It is OK to omit the getter if there is no need to process the state.

Finally, the component will re-render. That is it.

In this tutorial, I want to use Github's [Markdown API](https://developer.github.com/v3/markdown/). With this, we can write in Markdown and see the result in HTML.

[Register](https://github.com/settings/apps/new) a new GitHub App to get a client ID and a client secret because we will need them later.

## Installation

### Vue

First, add Vuex.

```bash{2}
cd vue-demo
vue add vuex
```

Create a file named `.env` in the project root and paste your client ID and client secret. For example:

```env
VUE_APP_MARKDOWN_CLIENT_ID=a1b2c3d4e5f6g7h8i9j0
VUE_APP_MARKDOWN_CLIENT_SECRET=a1b2c3d4e5f6g7h8i9j0a1b2c3d4e5f6g7h8i9j0
```

In `src/main.js`:

<<< @/vue-demo/src/main.js{1,6,51}

### Nuxt

Vuex is already included in Nuxt so there is no need to install it.

Like before, create a file named `.env` in the project root and paste your client ID and secret.

In `nuxt.config.js`:

<<< @/nuxt-demo/nuxt.config.js{57-58}

## Usage

In `src/views/vuex.vue`:

<<< @/vue-demo/src/views/vuex.vue

`@input="renderPreview"` means that when we make changes, the `renderPreview` method will be executed.

The rendered Markdown will be placed inside `div` under the `textarea`.

The `textarea` is bound to the `input` in the `computed` part. When we input something, the `set` part will `commit` the changes. The `get` part is what the `input` will show.

I have some Markdown input already as an example, but the method will not be called without any input change. Because of that, in the `mounted` part I called the method.

Finally, the `methods` contain the `renderPreview` method. This dispatches the `renderPreview` action, bringing the input to be passed.

It is almost the same for Nuxt. The only difference is that a `no-ssr` component wraps the content inside `template` there. So the `pages/vuex.vue` looks like this:

<<< @/nuxt-demo/pages/vuex.vue{2,18}

Now, let's move on to the store. I used the `markdown.js` module.

In `src/store/index.js`:

<<< @/vue-demo/src/store/index.js

For Nuxt, in `store/index.js`:

<<< @/nuxt-demo/store/index.js

OK, finally in `src/store/markdown.js` or `store/markdown.js`:

<<< @/vue-demo/src/store/markdown.js

The `input` has the example I mentioned earlier. When there is a change, the `renderPreview` action is called. We need to prepare the URL and `body` here.

Pass the client ID and client secret to the URL with `process.env.`. `stringify` the `input` for the `body`.

From the response, we will get the `renderedMd`. `commit` that with `commit("renderedMd", renderedMd);`. The first `renderedMd` corresponds to the item in mutations, while the second one is the result to be passed.

There are 2 items in mutations. We use `updateInput` to change the `input` state and `renderedMd` to update the result.

The `getters` here only return the state without any change, so you can actually get the state without getters in the component. It is my default to use a getter so if I need to edit the state, I will not need to make lots of changes.
