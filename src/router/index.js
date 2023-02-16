import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import NotePage from '@/pages/NotePage.vue';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/note/:noteId',
    component: NotePage
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
