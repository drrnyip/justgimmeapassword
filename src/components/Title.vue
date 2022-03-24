<template>
  <h1 class="title flex">
    <div class="row">
      <p
        @mouseover="hover('char1')"
        @mouseout="stopHover('char1')"
        :class="{ animate: isHovering('char1'), fallout: falloutNow('char1') }"
        class="letter"
      >
        j
      </p>
      <p
        @mouseover="hover('char2')"
        @mouseout="stopHover('char2')"
        :class="{ animate: isHovering('char2'), fallout: falloutNow('char2') }"
        class="letter"
      >
        u
      </p>
      <p
        @mouseover="hover('char3')"
        @mouseout="stopHover('char3')"
        :class="{ animate: isHovering('char3'), fallout: falloutNow('char3') }"
        class="letter"
      >
        s
      </p>
      <p
        @mouseover="hover('char4')"
        @mouseout="stopHover('char4')"
        :class="{ animate: isHovering('char4'), fallout: falloutNow('char4') }"
        class="letter"
      >
        t
      </p>
      <p
        @mouseover="hover('char5')"
        @mouseout="stopHover('char5')"
        :class="{ animate: isHovering('char5') }"
        class="letter blank"
      >
        _
      </p>
      <p
        @mouseover="hover('char6')"
        @mouseout="stopHover('char6')"
        :class="{ animate: isHovering('char6') }"
        class="letter"
      >
        g
      </p>
      <p
        @mouseover="hover('char7')"
        @mouseout="stopHover('char7')"
        :class="{ animate: isHovering('char7') }"
        class="letter"
      >
        i
      </p>
      <p
        @mouseover="hover('char8')"
        @mouseout="stopHover('char8')"
        :class="{ animate: isHovering('char8') }"
        class="letter"
      >
        m
      </p>
      <p
        @mouseover="hover('char9')"
        @mouseout="stopHover('char9')"
        :class="{ animate: isHovering('char9') }"
        class="letter"
      >
        m
      </p>
      <p
        @mouseover="hover('char10')"
        @mouseout="stopHover('char10')"
        :class="{
          animate: isHovering('char10'),
        }"
        class="letter"
      >
        e
      </p>
      <p
        @mouseover="hover('char11')"
        @mouseout="stopHover('char11')"
        :class="{
          animate: isHovering('char11'),
        }"
        class="letter blank"
      >
        _
      </p>
      <p
        @mouseover="hover('char12')"
        @mouseout="stopHover('char12')"
        :class="{
          animate: isHovering('char12'),
          fallout: falloutNow('char12'),
        }"
        class="letter"
      >
        a
      </p>
      <p
        @mouseover="hover('char13')"
        @mouseout="stopHover('char13')"
        :class="{
          animate: isHovering('char13'),
        }"
        class="letter blank"
      >
        _
      </p>
    </div>
    <div class="row">
      <p
        @mouseover="hover('char14')"
        @mouseout="stopHover('char14')"
        :class="{
          animate: isHovering('char14'),
        }"
        class="letter"
      >
        p
      </p>
      <p
        @mouseover="hover('char15')"
        @mouseout="stopHover('char15')"
        :class="{
          animate: isHovering('char15'),
        }"
        class="letter"
      >
        a
      </p>
      <p
        @mouseover="hover('char16')"
        @mouseout="stopHover('char16')"
        :class="{
          animate: isHovering('char16'),
        }"
        class="letter"
      >
        s
      </p>
      <p
        @mouseover="hover('char17')"
        @mouseout="stopHover('char17')"
        :class="{
          animate: isHovering('char17'),
        }"
        class="letter"
      >
        s
      </p>
      <p
        @mouseover="hover('char18')"
        @mouseout="stopHover('char18')"
        :class="{
          animate: isHovering('char18'),
        }"
        class="letter"
      >
        w
      </p>
      <p
        @mouseover="hover('char19')"
        @mouseout="stopHover('char19')"
        :class="{
          animate: isHovering('char19'),
        }"
        class="letter"
      >
        o
      </p>
      <p
        @mouseover="hover('char20')"
        @mouseout="stopHover('char20')"
        :class="{
          animate: isHovering('char20'),
        }"
        class="letter"
      >
        r
      </p>
      <p
        @mouseover="hover('char21')"
        @mouseout="stopHover('char21')"
        :class="{
          animate: isHovering('char21'),
        }"
        class="letter"
      >
        d
      </p>
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
