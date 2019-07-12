<template>
  <div class="board">
    <Card
      v-for="(card, i) of cards"
      :key="i"
      :card="card"
      @flip="flip"
    ></Card>
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

  },
  methods: {
    flip(card) {
      if (!this.prevCard.type) {
        this.prevCard = card;
      } else {
        if (this.prevCard.type !== card.type) {
          this.$store.commit('flipCards', [this.prevCard, card]);
        } else {
          this.prevCard = {};
        }
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
