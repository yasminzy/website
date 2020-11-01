import Vue from "vue";
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
