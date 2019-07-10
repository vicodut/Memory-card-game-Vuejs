<template>
  <div class="board">
    <Card
      v-for="(card, i) of cards"
      :key="i"
      :card="card"
    />
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
