export const state = () => ({ query: "", articles: [] });

export const actions = {
  async getArticles({ state, commit }) {
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${state.query}&origin=*`;

    const response = await this.$axios.get(url);

    const articles = [];

    for (let i = 0, j = response.data[i].length; i < j; i++) {
      articles[i] = {
        title: response.data[1][i],
        snippet: response.data[2][i],
        url: response.data[3][i]
      };
    }

    commit("articles", articles);
  }
};

export const mutations = {
  updateQuery(state, query) {
    state.query = query;
  },
  articles(state, articles) {
    state.articles = articles;
  }
};

export const getters = {
  query: (state) => {
    return state.query;
  },
  articles: (state) => {
    return state.articles;
  }
};
