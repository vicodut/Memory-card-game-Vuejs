import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Vuex);

const CARD_TYPES = [
  'A',
  'B',
  'C',
  'D',
  'E',
];

const store = new Vuex.Store({
  state: {
    count: 0,
    cards: [],
  },
  getters: {
    count(state) {
      return state.count;
    },
    cards(state) {
      return state.cards;
    },
  },
  mutations: {
    START_GAME(state) {
      state.cards = [...CARD_TYPES, ...CARD_TYPES].map(type => ({ flipped: false, type }));
    },
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

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
