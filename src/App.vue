<template>
  <div id="app">
    <Board />
  </div>
</template>

<script>
import Board from './components/Board.component';

export default {
  name: 'App',
  components: {
    Board,
  },
  created() {
    this.$store.commit('START_GAME');
  },
  methods: {
    startGame() {
      this.$store.commit('START_GAME');
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
