import { RouteRecordRaw } from "vue-router";

import Welcome from '../views/Welcome.vue';
import Home from '../views/Home.vue';
import ShuttlePage from '../views/ShuttlePage.vue';

const routes: RouteRecordRaw[] = [
   {
      path: '/',
      name: 'Welcome',
      component: Welcome
   },
   {
      path: '/u/home',
      name: 'Home',
      component: Home
   },
   {
      path: '/u/shuttle',
      name: 'Shuttle',
      component: ShuttlePage
   },
];

export default routes;