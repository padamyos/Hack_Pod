import { createRouter, createWebHistory } from "vue-router";

import Login from "../view/Login.vue";

const routes = [
  
 
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
});

export default router;