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
import { mapGetters, mapActions, mapMutations } from 'vuex';
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
    ...mapActions(['changeStatus', 'flipWrongCard']),
    ...mapMutations(['SET_GAME_STATUS', 'SET_PREV_FLIPPED', 'SET_GAME_STATUS']),
    flip(card) {
      if (this.cards.every(el => !el.flipped)) {
        this.changeStatus({
          status: 'WIN', delay: 500,
        });
      }
      if (!this.prevCard.type) {
        this.SET_PREV_FLIPPED(card);
      } else if (this.prevCard.type === card.type) {
        this.SET_PREV_FLIPPED({});
      } else {
        this.SET_GAME_STATUS('PAUSE');
        this.flipWrongCard(card);
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
