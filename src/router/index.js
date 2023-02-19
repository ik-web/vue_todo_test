import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '@/views/HomePage/HomePage.vue';
import NotePage from '@/views/NotePage/NotePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/:noteId',
    name: 'note',
    component: NotePage
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
