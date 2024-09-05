<template>
    <div>
      <h1>Welcome to Home</h1>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Logout',
    methods: {
      logout() {
        // ลบ token หรือข้อมูลผู้ใช้จาก localStorage
        localStorage.removeItem('userToken');
        // นำผู้ใช้ไปยังหน้า Login
        this.$router.push({ name: 'Login' });
      },
    },
  };
  </script>