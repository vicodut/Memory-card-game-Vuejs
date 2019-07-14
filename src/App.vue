<template>
  <div id="app">
    <Board />
    <EndScreen />
  </div>
</template>

<script>
import Board from './components/Board.component';
import EndScreen from './components/EndScreen.component';

export default {
  name: 'App',
  components: {
    Board,
    EndScreen,
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
body,html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
