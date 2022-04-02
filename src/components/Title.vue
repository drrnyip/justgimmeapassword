<template>
  <h1 class="title flex">
    <div v-for="words in rows" :key="words" class="row">
      <template v-for="word in words" :key="word.entry">
        <p
          v-for="(letter, index) in word.entry.split('')"
          :key="letter"
          :id="`${index}${word.entry}${letter}`"
          @mouseover="hover(`${index}${word.entry}${letter}`)"
          @mouseout="stopHover(`${index}${word.entry}${letter}`)"
          :class="{
            animate: isHovering(`${index}${word.entry}${letter}`),
            fallout: word.fallout && falloutNow(`${index}${word.entry}${letter}`),
          }"
          class="letter"
        >
          {{ letter }}
        </p>
        <p class="letter blank">_</p>
      </template>
    </div>
  </h1>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      hovering: {},
      fallout: {},
      maxHover: 20,
      rows: [
        // Array of arrays. Each inner array is a flex row
        [
          { entry: "just", fallout: true },
          { entry: "gimme", fallout: false },
          { entry: "a", fallout: true },
        ],
        [{ entry: "password", fallout: false }],
      ],
    };
  },
  methods: {
    hover(id) {
      if (this.hovering[id]) {
        return;
      }
      this.hovering[id] = true;
      if (!this.fallout[id]) {
        this.fallout[id] = 0;
      }
      this.fallout[id]++;
    },
    stopHover(id) {
      setTimeout(() => {
        this.hovering[id] = false;
      }, 1000);
    },
    isHovering(id) {
      return this.hovering[id];
    },
    falloutNow(id) {
      return this.fallout[id] > this.maxHover;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway&family=Sigmar+One&display=swap");

.title {
  font-family: "Sigmar One", cursive;
  font-size: 4vmax;
  text-align: center;
  white-space: nowrap;
  margin: 25px auto 25px;
  -webkit-text-stroke: 1px #ffd369;
  color: #222831;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
}

.row {
  display: flex;
}

.letter {
  margin: 0;
}

.animate {
  transform-origin: top center;
  animation-duration: 1s;
  animation-name: sway;
}

.fallout {
  transform-origin: center;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-name: dangle;
}

.blank {
  opacity: 0;
}

@media (max-width: 1024px) {
  #main {
    width: 90%;
  }
  .title {
    font-size: 2.5em;
    white-space: normal;
  }
}

@keyframes sway {
  25% {
    transform: rotate(-3deg);
  }
  65% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes dangle {
  5% {
    transform: rotate(-3deg);
  }
  10% {
    transform: rotate(5deg);
  }
  15% {
    transform: rotate(-5deg);
  }
  20% {
    transform: rotate(0deg);
  }
  70% {
    transform: translateY(15px) rotate(180deg);
  }
  80% {
    transform: translateY(35px) rotate(180deg);
    opacity: 0.5;
  }
  100% {
    transform: translateY(45px) rotate(180deg);
    opacity: 0;
  }
}
</style>
