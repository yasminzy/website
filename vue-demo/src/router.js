import Vue from "vue";
import Router from "vue-router";

import Default from "./layouts/default";

import Index from "./views/index";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Default,
      children: [
        { path: "", component: Index },
        { path: "aos", component: () => import("./views/aos") },
        { path: "bootstrap", component: () => import("./views/bootstrap") },
        { path: "chart", component: () => import("./views/chart") },
        { path: "google-maps", component: () => import("./views/google-maps") },
        { path: "ionicons", component: () => import("./views/ionicons") },
        { path: "prism", component: () => import("./views/prism") },
        { path: "postcss", component: () => import("./views/postcss") },
        {
          path: "vue-lazyload",
          component: () => import("./views/vue-lazyload")
        },
        { path: "vuex", component: () => import("./views/vuex") },
        { path: "vuex-axios", component: () => import("./views/vuex-axios") }
      ]
    }
  ]
});
