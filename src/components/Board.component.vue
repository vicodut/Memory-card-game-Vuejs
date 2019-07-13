<template>
  <div>
    {{ count }}
    {{ prevCard }}
    {{ gameStatus }}
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
import Card from './Card.component';

export default {
  name: 'Board',
  components: {
    Card,
  },
  computed: {
    cards() {
      return this.$store.getters.cards;
    },
    prevCard() {
      return this.$store.getters.prevCard;
    },
    count() {
      return this.$store.getters.count;
    },
    gameStatus() {
      return this.$store.getters.status;
    },

  },
  methods: {
    flip(card) {
      if (this.cards.every(card => !card.flipped)) {
        console.log(`WIN in ${this.count}!!!`);
        this.$store.commit('SET_GAME_STATUS', 'PAUSE');
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
.board {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
