import { createStore } from "vuex";

import markdown from "./markdown";
import wikipedia from "./wikipedia";

export default createStore({
  modules: {
    markdown,
    wikipedia
  }
});
