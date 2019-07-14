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
        <span class="top">
          {{ card.type }}
        </span>
        <span class="back">
          {{ card.type }}
        </span>
        <span class="bottom">
          {{ card.type }}
        </span>
      </div>
      <div class="card-back">
        back
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

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
    ...mapGetters(['score', 'status']),
  },
  methods: {
    ...mapMutations(['FLIP_CARDS', 'increment']),
    rotate() {
      if (this.card.flipped && this.status === 'PLAY') {
        this.FLIP_CARDS([this.card]);
        this.$emit('flip', this.card);
        this.increment();
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
        box-shadow: 0 0 3px #000;
        border-radius: 4px;
        transition: 0.5s all ease;
    }


    .top {
      font-size: 2em;
      position: absolute;
      left: 8px;
      top: 8px;
      font-weight: bold;
      color: #fefefe;
    }

    .bottom {
      font-size: 2em;
      position: absolute;
      right: 8px;
      bottom: 8px;
      font-weight: bold;
      color: #fefefe;
    }

    .back {
      font-size: 16em;
      position: absolute;
      left: 8px;
      top: 8px;
    }

    .card-back {
        transform: rotateY(180deg);
        border-radius: 4px;
        box-shadow: 0 0 3px #000;
        background-color: dodgerblue;
        transition: 0.5s all ease;
    }
    .card-back:hover, .card-front:hover {
      box-shadow: 0 0 8px #000;
    }

    .rotate {
      transform: rotateY(180deg);
    }
</style>
