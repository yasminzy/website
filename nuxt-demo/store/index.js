import Vuex from "vuex";

import markdown from "./markdown";
import wikipedia from "./wikipedia";

const store = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      markdown,
      wikipedia
    }
  });
};

export default store;
