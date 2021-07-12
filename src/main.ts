import { createApp } from 'vue'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register';
import Toast, { PluginOptions } from "vue-toastification";

import "vue-toastification/dist/index.css";
import './index.css';

import router from './router';
import store from './store';

const options: PluginOptions = {
   hideProgressBar: true,
   timeout: 3500,
   closeButton: false,
   toastClassName: 'toast-style'
};

const updateSW = registerSW({
   onNeedRefresh() {},
   onOfflineReady() {},
})

createApp(App)
   .use(router)
   .use(store)
   .use(Toast, options)
   .mount('#app');
