import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

import VueHighlightJS from "vue-highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import scss from "highlight.js/lib/languages/scss";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/dracula.css";
Vue.use(VueHighlightJS, {
  languages: {
    javascript,
    scss,
    xml
  }
});

import VueLazyload from "vue-lazyload";
import error from "./assets/error.svg";
import loading from "./assets/loading.svg";
Vue.use(VueLazyload, {
  preLoad: 1,
  error: error,
  loading: loading,
  attempt: 1
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
