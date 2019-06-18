export default {
  state: {
    input: `# Under the Sea

  *Source*: [Color of the year **2019**](https://www.pantone.com/color-intelligence/color-of-the-year/color-of-the-year-2019-palette-exploration)

  > Awash in color suggestive of the watery environment that lies beneath a tropical island paradise, Under The Sea places \`PANTONE\` Living Coral at the center of our naturally vivid and chromatic ecosystem, evocative of how coral reefs embrace with their warmth and nourishment and provide shelter to a diverse kaleidoscope of colorful sea life.

  ---

  * Sea pink
  * Limpet Shell
  * Living Coral
  * Vibrant Yellow
  * Turkish Sea
  * Turtle Green
  * Blue Depths

  ![Color harmonies](/color-harmonies.png)`,
    renderedMd: ""
  },

  actions: {
    async renderPreview({ commit }, input) {
      try {
        const url = `https://api.github.com/markdown?client_id=${process.env.VUE_APP_MARKDOWN_CLIENT_ID}&client_secret=${process.env.VUE_APP_MARKDOWN_CLIENT_SECRET}`;

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "text/html"
          },
          body: JSON.stringify({ text: input, mode: "gfm" })
        });

        if (response.ok) {
          const renderedMd = await response.text();

          commit("renderedMd", renderedMd);
        }
      } catch (error) {
        console.log(error); // eslint-disable-line no-console
      }
    }
  },

  mutations: {
    updateInput(state, input) {
      state.input = input;
    },
    renderedMd(state, result) {
      state.renderedMd = result;
    }
  },

  getters: {
    input(state) {
      return state.input;
    },
    renderedMd(state) {
      return state.renderedMd;
    }
  }
};
