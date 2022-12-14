import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
// import VueToast from 'vue-toast-notification';
// import 'vue-toast-notification/dist/theme-sugar.css';

const vm = createApp(App).use(router).mount('#app')

export default vm;
