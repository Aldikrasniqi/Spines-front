import './assets/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// layouts
import authLayout from '@/layouts/auth.vue';
import mainLayout from '@/layouts/main.vue';
import App from './App.vue'
import router from './router'

import auth from "./plugins/auth";

// const pinia = createPinia()

const initApp = () => {
    console.log('initApp auth');
}

// const app = createApp(App)

// app.use(pinia)
// .use(auth, initApp)
createApp(App)
    .use(createPinia())
    .use(router)
    .use(auth, initApp)
    .component('auth', authLayout)
    .component('main', mainLayout)
    .mount('#app')
