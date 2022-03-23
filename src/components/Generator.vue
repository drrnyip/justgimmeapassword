<template>
  <div class="flex">
    <input id="generator" type="text" v-model="passwordValue" />
  </div>
  <div class="flex controls">
    <button class="btn" id="regenerate" @click="setPassword">
      <img class="btn-icon" src="../assets/redo.svg" />
      <span>Gimme a different one</span>
    </button>
    <button class="btn" id="copy" @click="copyPassword">
      <img class="btn-icon" src="../assets/clipboard.svg" />
      <span>Copy to clipboard</span>
    </button>

  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import { generateNewPassword } from "../words"

export default {
  name: "Generator",
  props: {},
  data() {
    return {
      password: "",
      toast: useToast(),
    };
  },
  mounted() {
    if (this.password === "") {
      this.setPassword();
    }
  },
  computed: {
    passwordValue: {
      get() {
        return this.password;
      },
      set(val) {
        this.password = val;
      },
    },
  },
  methods: {
    setPassword() {
      this.password = generateNewPassword();
    },
    copyPassword() {
      navigator.clipboard.writeText(this.password).then(
        () => {
          this.toast.success("Copied to clipboard");
        },
        () => {
          console.error("Failed to copy to clipboard");
        }
      );
    },
  },
};
</script>

<style scoped>
#generator {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  width: 100%;
  text-align: center;
  font-size: 2em;
  border-radius: 10px;
}

.btn-icon {
  vertical-align: middle;
  width: 15px;
  margin: -3px 10px 0px 5px;
}

.controls > .btn {
  width: 100%;
  font-size: 18px;
  padding: 5px 10px;
  margin: 8px 5px;
  font-family: "Raleway", sans-serif;
  background: #3366cc;
  color: white;
  border: 1px ridge white;
  cursor: pointer;
}

@media (max-width: 1024px) {
  #generator {
    font-size: 1.5em;
  }
}
</style>
