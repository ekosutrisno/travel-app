import { RouteRecordRaw } from "vue-router";

import Welcome from '../views/Welcome.vue';

const routes: RouteRecordRaw[] = [
   {
      path: '/',
      name: 'Welcome',
      component: Welcome
   }
];

export default routes;