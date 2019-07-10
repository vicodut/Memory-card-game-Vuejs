import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    count(state) {
      return state.count;
    },
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
  actions: {
    flipCard(card) {
      console.log(card);
    },
  },
});

export default store;
