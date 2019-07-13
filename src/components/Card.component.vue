<template>
  <div
    class="card"
    @click="rotate()"
  >
    <div
      class="card-inner"
      :class="{rotate: card.flipped}"
    >
      <div class="card-front">
        {{ card.type }}
      </div>
      <div class="card-back">
        back
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {},
  props: {
    card: {
      type: Object,
      default() {
        return {
          type: '',
          flipped: false,
          id: null,
        };
      },
    },
  },
  data: () => ({
    isRotate: false,
  }),
  computed: {
    score() {
      return this.$store.getters.count;
    },
    gameStatus() {
      return this.$store.getters.status;
    },
  },
  methods: {
    rotate() {
      if (this.card.flipped && this.gameStatus === 'PLAY') {
        // this.isRotate = !this.isRotate;
        this.$store.commit('FLIP_CARDS', [this.card]);
        this.$emit('flip', this.card);
        this.$store.commit('increment');
      }
    },
  },
};
</script>

<style scoped>
    .card {
        position: relative;
        background-color: transparent;
        height: 200px;
        width: 130px;
        margin: 10px;
        cursor: pointer;
        perspective: 1000px;
    }

    .card-inner {
        transition: 0.8s all;
        transform-style: preserve-3d;
        position: relative;
        width: 100%;
        height: 100%;
    }

    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        backface-visibility: hidden;
    }

    .card-front {
        background-color: #9977aa;
        box-shadow: 0px 0px 5px #333;
        border-radius: 8px;
        font-size: 16em;
    }

    .card-back {
        transform: rotateY(180deg);
        border-radius: 8px;
        box-shadow: 0px 0px 5px #333;
        background-color: dodgerblue;
    }

    .rotate {
        transform: rotateY(180deg);
    }

</style>
