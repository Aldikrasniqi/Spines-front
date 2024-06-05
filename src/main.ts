import './assets/index.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
// layouts
import authLayout from '@/layouts/auth.vue';
import mainLayout from '@/layouts/main.vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import auth from './plugins/auth';
import 'primevue/resources/themes/lara-light-green/theme.css';
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/primevue.css'
import Lara from '@/presets/lara'
// const pinia = createPinia()

const initApp = () => {
  console.log('initApp auth');
};

// const app = createApp(App)

// app.use(pinia)
// .use(auth, initApp)
createApp(App)
  .use(PrimeVue, {
    unstyled: true,
    pt: Lara 
  })  
  .use(createPinia())
  .use(router)
  .use(auth, initApp)
  .component('auth', authLayout)
  .component('main', mainLayout)
  .mount('#app');
