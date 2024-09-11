<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-1/3">
      <h1 class="text-3xl font-bold mb-6">
        Register
      </h1>
      <form @submit.prevent="registerUser">
        <div class="mb-4">
          <label for="email" class="block mb-2">
            Email
          </label>
          <!-- รับค่า email -->
          <input type="email" v-model="email" id="email" class="w-full px-4 py-2 border rounded" />
        </div>

        <div class="mb-4">
          <label for="password" class="block mb-2">
            Password
          </label>
          <!-- รับค่า password -->
          <input type="password" v-model="password" id="password" class="w-full px-4 py-2 border rounded" />
        </div>

        <div class="mb-4">

          <label for="role">Role:</label>
          <!-- รับค่า role -->
          <select v-model="role" required>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      role: 'user' // ค่าเริ่มต้นเป็น 'user'
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('http://localhost:5000/users/register', {
          email: this.email,
          password: this.password,
          role: this.role
        });
        alert('User registered successfully');
        // นำผู้ใช้ไปยังหน้า Login หลังจากลงทะเบียนสำเร็จ
        this.$router.push({ name: 'Login' });
      } catch (err) {
        console.error(err);
        alert('Error registering user');
      }
    },
  },
};
</script>