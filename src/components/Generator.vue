<template>
  <div class="flex">
    <input id="generator" type="text" v-model="passwordValue" />
  </div>
  <div class="flex controls">
    <button class="btn left" id="regenerate" @click="setPassword">
      <img class="btn-icon" src="../assets/redo.svg" />
      <span>Gimme a different one</span>
    </button>
    <button class="btn right" id="copy" @click="copyPassword">
      <img class="btn-icon" src="../assets/clipboard.svg" />
      <span>Copy to clipboard</span>
    </button>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import { generateNewPassword } from "../words";

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
  border: 1px solid #ffd369;
  background: #222831;
  color: #eeeeee;
}

.btn-icon {
  vertical-align: middle;
  width: 15px;
  margin: -3px 10px 0px 5px;
}

.controls {
  cursor: pointer;
}

.controls > .divider {
  color: #ffd369;
}

.controls > .btn {
  height: 40px;
  width: 100%;
  font-size: 18px;
  padding: 5px 10px;
  margin: 8px 0px 0px 0px;
  font-family: "Raleway", sans-serif;
  background: #222831;
  color: #eeeeee;
  cursor: pointer;
}

.left {
  border-radius: 10px 0px 0px 10px;
  border: none;
  border-right: 1px solid #ffd369;
}

.right {
  border-radius: 0px 10px 10px 0px;
  border: none;
  border-left: 1px solid #ffd369;
}

.controls > .btn:hover {
  background: #393e46;
}

@media (hover: none) {
  .btn:hover {
    background: #222831;
  }
}

@media (max-width: 1024px) {
  #generator {
    font-size: 1.5em;
  }

  .divider {
    display: none;
  }

  .btn {
    height: 50px !important;
  }

  .left {
    border-radius: 10px 10px 0px 0px;
    border-right: none;
  }

  .right {
    border-radius: 0px 0px 10px 10px;
    border-left: none;
  }
}
</style>
