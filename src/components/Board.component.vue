<template>
  <div class="container">
    <Header />
    <div class="board">
      <Card
        v-for="(card, i) of cards"
        :key="i"
        :card="card"
        @flip="flip"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from './Card.component';
import Header from './Header.component';

export default {
  name: 'Board',
  components: {
    Card,
    Header,
  },
  computed: {
    ...mapGetters(['score', 'status', 'count', 'prevCard', 'cards']),
  },
  methods: {
    flip(card) {
      if (this.cards.every(card => !card.flipped)) {
        setTimeout(() => this.$store.commit('SET_GAME_STATUS', 'WIN'),
          500);
      }
      if (!this.prevCard.type) {
        this.$store.commit('SET_PREV_FLIPPED', card);
      } else if (this.prevCard.type === card.type) {
        this.$store.commit('SET_PREV_FLIPPED', {});
      } else {
        this.$store.commit('SET_GAME_STATUS', 'PAUSE');
        setTimeout(() => {
          this.$store.commit('SET_GAME_STATUS', 'PLAY');
          this.$store.commit('FLIP_CARDS', [this.prevCard, card]);
          this.$store.commit('SET_PREV_FLIPPED', {});
        }, 1300);
      }
    },
  },
};
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .board {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: auto;
    z-index: 1;
  }
</style>
