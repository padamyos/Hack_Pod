<template>
  <div class="py-10 px-16" >
    <div class="text-center text-4xl font-bold pb-5">
      <h1>User Management</h1>
    </div>
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead class="text-center">
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="(user, index) in users" :key="user._id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.password }}</td>
            <td>
              <button class="btn btn-primary btn-sm mr-2" @click="editUser(user)">Edit</button>
              <button class="btn btn-error btn-sm" @click="deleteUser(user._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-10">
      <h2 class="text-2xl font-bold mb-5">{{ isEditing ? 'Edit User' : 'Add User' }}</h2>
      <form @submit.prevent="isEditing ? updateUser() : addUser()" class="space-y-4">
        <div class="form-control">
          <label class="label" for="email">Email:</label>
          <input type="email" v-model="form.email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label" for="password">Password:</label>
          <input type="password" v-model="form.password" class="input input-bordered" required />
        </div>
        <button type="submit" class="btn btn-primary">{{ isEditing ? 'Update' : 'Add' }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ChangeUser',
  data() {
    return {
      users: [],
      form: {
        email: '',
        password: ''
      },
      isEditing: false,
      editingUserId: null
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:5000/users');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async addUser() {
      try {
        const response = await axios.post('http://localhost:5000/users/register', this.form);
        this.users.push(response.data);
        this.resetForm();
      } catch (error) {
        console.error('Error adding user:', error);
      }
    },
    editUser(user) {
      this.isEditing = true;
      this.editingUserId = user._id;
      this.form.email = user.email;
      this.form.password = user.password;
    },
    async updateUser() {
      try {
        const response = await axios.put(`http://localhost:5000/users/${this.editingUserId}`, this.form);
        const index = this.users.findIndex(user => user._id === this.editingUserId);
        this.$set(this.users, index, response.data);
        this.resetForm();
      } catch (error) {
        console.error('Error updating user:', error);
      }
    },
    async deleteUser(userId) {
      try {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        this.users = this.users.filter(user => user._id !== userId);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    resetForm() {
      this.form.email = '';
      this.form.password = '';
      this.isEditing = false;
      this.editingUserId = null;
    }
  },
  mounted() {
    this.fetchUsers();
  }
};
</script>