<template>
<div id="main">
  <h1 class="title">just gimme a password</h1>
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
    Footer
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&family=Sigmar+One&display=swap');
#main {
  width: 60%;
  margin: auto;
  text-align: center;
  font-family: "Raleway", sans-serif;
}

.title {
  font-family: 'Sigmar One', cursive;
  font-size: 4vw;
  text-align: center;
  white-space: nowrap;
  margin: auto auto 25px;
  /* width: 100%; */
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
