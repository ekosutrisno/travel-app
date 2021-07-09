import { RouteRecordRaw } from "vue-router";

import Welcome from '../views/Welcome.vue';
import ShuttlePage from '../views/ShuttlePage.vue';
import CheckoutPage from '../views/CheckoutPage.vue';
import HistoryPage from '../views/HistoryPage.vue';
import ProfilePage from '../views/ProfilePage.vue';

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
   {
      path: '/u/histories',
      name: 'History',
      component: HistoryPage,
      meta: {
         title: 'History'
      }
   },
   {
      path: '/u/profile',
      name: 'Profile',
      component: ProfilePage,
      meta: {
         title: 'Profile'
      }
   },
];

export default routes;