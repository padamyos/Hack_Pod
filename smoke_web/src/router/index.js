import { createRouter, createWebHistory } from "vue-router";

import Login from "../view/Login.vue";
import Home from "../view/Home.vue";
const routes = [
  
 

  {
    path: "/",
    name: "Home",
    component: Home,
  },
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