import { createRouter, createWebHistory } from "vue-router";

import Login from "../view/Login.vue";
import Home from "../view/Home.vue";
<<<<<<< Updated upstream
=======
import Dashboard from "../view/Dashbord.vue"
import Register from "../view/Register.vue";
import Logout from "../view/Logout.vue";

function isLoggedIn() {
  return !!localStorage.getItem('userToken');
}



>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register, // เพิ่มเส้นทางสำหรับการลงทะเบียน
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }, // กำหนด meta เพื่อระบุว่าหน้านี้ต้องการการล็อกอิน
  },
>>>>>>> Stashed changes
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
});

<<<<<<< Updated upstream
=======

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next({ name: "Login" }); // ถ้ายังไม่ได้ล็อกอิน ให้ไปที่หน้า Login
    } else {
      next(); // ถ้าล็อกอินแล้ว ให้ไปที่หน้าที่ต้องการ
    }
  } else {
    next(); // ถ้าหน้านั้นไม่ต้องการการล็อกอิน ให้ไปที่หน้าที่ต้องการ
  }
});

>>>>>>> Stashed changes
export default router;