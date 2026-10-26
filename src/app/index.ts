import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import { createYmaps } from 'vue-yandex-maps';
import App from './App.vue';
import { router } from './providers';

const initializeApp = createApp(App)
  .use(router)
  .use(PrimeVue, {
    unstyled: true,
  })
  .use(createYmaps({ apikey: import.meta.env.VITE_YMAPS_API_KEY }));

export const app = initializeApp;
