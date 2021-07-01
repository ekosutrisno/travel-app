import { RouteRecordRaw } from "vue-router";

import Welcome from '../views/Welcome.vue';
import Home from '../views/Home.vue';
import ShuttlePage from '../views/ShuttlePage.vue';
import CheckoutPage from '../views/CheckoutPage.vue';

const routes: RouteRecordRaw[] = [
   {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      meta: {
         title: 'Welcome'
      }
   },
   {
      path: '/u/home',
      name: 'Home',
      component: Home,
      meta: {
         title: 'Home'
      }
   },
   {
      path: '/u/shuttle',
      name: 'Shuttle',
      component: ShuttlePage,
      meta: {
         title: 'Shuttle'
      }
   },
   {
      path: '/u/checkout/:userId',
      name: 'Checkout',
      component: CheckoutPage,
      meta: {
         title: 'Checkout'
      }
   },
];

export default routes;