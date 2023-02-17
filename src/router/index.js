import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import NotePage from '@/views/NotePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/note/:noteId',
    name: 'note',
    component: NotePage
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
