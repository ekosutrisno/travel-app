import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import routes from "./routes";

const router = createRouter({
   history: createWebHistory(),
   routes: routes
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
   document.title = `TravelApp - ${to.meta.title}`;
   next();
})

export default router;