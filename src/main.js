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
  },
  mutations: {
    START_GAME(state) {
      const cardsArray = [...CARD_TYPES, ...CARD_TYPES].map(type => ({ flipped: false, type }));
      let l = cardsArray.length;
      while (l) {
        const i = Math.floor(Math.random() * l--);
        [cardsArray[l], cardsArray[i]] = [cardsArray[i], cardsArray[l]];
      }

      state.cards = cardsArray;
    },
    increment(state) {
      state.count += 1;
    },
    flipCard(state, card) {
      if (!state.prevCard.type) {
        state.prevCard = card;
      } else {
        if (state.prevCard.type !== card.type) {
          flipCards([state.prevCard, card]);
        } else {
          state.prevCard = {};
        }
      }
    },
  },
  actions: {
    flipCard(card) {
      console.log(card);
    },
    flipCards(card) {
      console.log(card);
    },
  },
});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
