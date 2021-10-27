import type { RouteLocationNormalized, RouteRecordRaw } from "vue-router";

import TodoProvider from "./components/ToDoProvider.vue";

export const ToDoRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: TodoProvider,
    children: [
      {
        path: "todos",
        name: "todo:all",
        component: () => import("./Todos.vue"),
      },
      {
        path: "todo/:id",
        name: "todo:details",
        props: true,
        beforeEnter: (to: RouteLocationNormalized): boolean => {
          if (!to.params.id) return false;
          return true;
        },
        component: () => import("./Todo.vue"),
      },
    ],
  },
];
