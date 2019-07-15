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
    prevCard: {},
    status: 'PLAY',
  },
  getters: {
    count(state) {
      return state.count;
    },
    cards(state) {
      return state.cards;
    },
    prevCard(state) {
      return state.prevCard;
    },
    status(state) {
      return state.status;
    },
  },
  mutations: {
    START_GAME(state) {
      const cardsArray = [...CARD_TYPES, ...CARD_TYPES]
        .map((type, id) => ({ flipped: true, type, id }));
      const l = cardsArray.length;
      while (l) {
        const i = Math.floor(Math.random() * (l - 1));
        [cardsArray[l], cardsArray[i]] = [cardsArray[i], cardsArray[l]];
      }

      state.cards = cardsArray;
      state.count = 0;
      state.status = 'PLAY';
    },
    SET_PREV_FLIPPED(state, card) {
      state.prevCard = card;
    },
    FLIP_CARDS(state, flippedCards) {
      let { cards } = state;
      cards = cards.map((card) => {
        if (flippedCards.find(el => el.id === card.id)) {
          card.flipped = !card.flipped;
        }
        return card;
      });
      state.cards = cards;
    },
    increment(state) {
      state.count += 1;
    },
    SET_GAME_STATUS(state, status) {
      state.status = status;
    },
  },
  actions: {
    changeStatus({ commit }, { status, delay }) {
      setTimeout(() => commit('SET_GAME_STATUS', status), delay);
    },
    flipWrongCard({ commit, state }, card) {
      const { prevCard } = state;
      setTimeout(() => {
        commit('FLIP_CARDS', [prevCard, card]);
        commit('SET_GAME_STATUS', 'PLAY');
        commit('SET_PREV_FLIPPED', {});
      }, 1300);
    },
  },
});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
