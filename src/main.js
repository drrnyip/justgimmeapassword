import { createApp } from 'vue'
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from './App.vue'
import 'dotenv/config';

const options = {
    hideProgressBar: true,
    timeout: 1000,
    position: POSITION.BOTTOM_RIGHT
};


createApp(App).use(Toast, options).use(require('vue-script2')).mount('#app');