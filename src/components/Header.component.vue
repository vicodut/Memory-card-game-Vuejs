<template>
  <div class="header">
    {{ count }}
    {{ prevCard }}
    {{ status }}


    <button
      class="reload-game float-right"
      @click="restart()"
    >
      Restart
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['prevCard', 'status', 'count']),
  },
  methods: {
    ...mapMutations(['START_GAME']),
    restart() {
      this.START_GAME();
    },
  },
};
</script>

<style scoped>
.header {
    background-color: white;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 0 6px #aaa;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    z-index: 2;
    padding: 0 16px;
}
.reload-game {
    background-color: #ffc74e;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid rgb(255, 207, 70);
    color: rgba(255, 255, 255, 0.90);
    cursor: pointer;
    transition: 0.2s all ease;
}
.reload-game:hover {
    box-shadow: 0 0 3px #aaa;
}
.float-right {
    float: right;
}
</style>
