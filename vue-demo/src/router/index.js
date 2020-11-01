import { createRouter, createWebHistory } from "vue-router";

import Index from "../views/index";

const routes = [
  { path: "/", component: Index },
  { path: "/aos", component: () => import("../views/aos") },
  { path: "/bootstrap", component: () => import("../views/bootstrap") },
  { path: "/ionicons", component: () => import("../views/ionicons") },
  { path: "/postcss", component: () => import("../views/postcss") },
  { path: "/vuex", component: () => import("../views/vuex") },
  { path: "/vuex-axios", component: () => import("../views/vuex-axios") }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
