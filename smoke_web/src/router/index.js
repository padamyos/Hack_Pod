import { createRouter, createWebHistory } from "vue-router";

import Login from "../view/Login.vue";
import Home from "../view/Home.vue";

import Dashboard from "../view/Dashbord.vue"
import Register from "../view/Register.vue";
import Logout from "../view/Logout.vue";
import ManageDevices from "../view/ManageDevices/manage.vue"

import ChangeUser from "../view/Admin/ChangeUser.vue"

function isLoggedIn() {
  return !!localStorage.getItem('userToken');
}

function isAdmin() {
  const role = JSON.parse(localStorage.getItem('role'));
  if(role === 'admin'){
    return true;
}
}

// ดึงข้อมูล user จาก localStorage และ return role ของ user ออกมา
// function getUserRole() {
  
//     const role = JSON.parse(localStorage.getItem('role'));
//     return role ? role : null;
  
// }


const routes = [
  
 

  {
    path: "/",
    name: "Login",
    component: Login,
  },
  
  
  {
    path: "/home",
    name: "Home",
    component: Home,

  },

  {
    path: "/device",
    name: "ManageDevices",
    component: ManageDevices,
  },
  
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },

  {
    path: '/register',
    name: 'Register',
    component: Register, // เพิ่มเส้นทางสำหรับการลงทะเบียน
    meta: { requiresAdmin: true }, // กำหนด meta เพื่อระบุว่าหน้านี้ต้อง login ด้วย admin
  },

  {
    path: '/changeUser',
    name: 'ChangeUser',
    component: ChangeUser, // เพิ่มเส้นทางสำหรับการลงทะเบียน
    meta: { requiresAdmin: true }, // กำหนด meta เพื่อระบุว่าหน้านี้ต้อง login ด้วย admin
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }, // กำหนด meta เพื่อระบุว่าหน้านี้ต้องการการล็อกอิน
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (!isLoggedIn() || !isAdmin(  ) ) {
      next(
        //  ถ้าไม่ใช่ admin ให้ redirect ไปหน้า login
        { name: 'Login' }
      );
    } else {
      // ถ้าเป็น admin ให้ไปหน้าถัดไป
      next(
        

      );
    }
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn() ) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;