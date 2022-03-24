<template>
  <h1 class="title">just gimme a password</h1>
  <div id="main">
    <Generator />
    <Preamble />
  </div>
  <Footer />
</template>

<script>
import Generator from "./components/Generator.vue";
import Preamble from "./components/Preamble.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Generator,
    Preamble,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway&family=Sigmar+One&display=swap");

body {
  background: #222831;
}

#main {
  width: 50%;
  margin: auto;
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: white;
}

.title {
  font-family: "Sigmar One", cursive;
  font-size: 4vmax;
  text-align: center;
  white-space: nowrap;
  margin: 25px auto 25px;
  -webkit-text-stroke: 1px #ffd369;
  color: #222831;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1024px) {
  #main {
    width: 90%;
  }
  .title {
    font-size: 2.5em;
    white-space: normal;
  }
  .flex {
    flex-direction: column;
  }
}
</style>
