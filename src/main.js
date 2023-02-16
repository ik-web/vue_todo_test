import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

import '@/styles/main.scss';
import { components } from './components';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

app
  .use(router)
  .mount('#app');
