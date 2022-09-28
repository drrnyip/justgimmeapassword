<template>
  <Title />
  <div id="main">
    <Generator />
    <Preamble />
  </div>
</template>

<script>
import Generator from "./components/Generator.vue";
import Preamble from "./components/Preamble.vue";
import Title from "./components/Title.vue";

export default {
  name: "App",
  components: {
    Generator,
    Preamble,
    Title,
  },
;
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


.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1024px) {
  #main {
    width: 90%;
  }

  .flex {
    flex-direction: column;
  }
}

</style>
