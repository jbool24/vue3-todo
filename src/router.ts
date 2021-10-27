import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

import Wrapper from "./AppWrapper.vue";

import { ToDoRoutes } from "./views/todos/routes";

declare module "vue-router" {
  interface RouteMeta {
    // is optional
    isAdmin?: boolean;
    // must be declared by every route
    requiresAuth: boolean;
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Wrapper,
    children: [],
  },
  ...ToDoRoutes,
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from) => {
  console.log(
    `Going from ${from.name?.toString() ?? "root"} to ${to.name?.toString()}`,
    `|Paths| '${from.fullPath}' --to-> '${to.fullPath}'`
  );
});

export default router;
