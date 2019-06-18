import Vue from "vue";
import Vuex from "vuex";

import markdown from "./markdown";
import wikipedia from "./wikipedia";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    markdown,
    wikipedia
  }
});
