import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../views/index";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Index },
  { path: "/bootstrap", component: () => import("../views/bootstrap") },
  { path: "/chart", component: () => import("../views/chart") },
  { path: "/highlight", component: () => import("../views/highlight") },
  { path: "/vue-lazyload", component: () => import("../views/vue-lazyload") }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
