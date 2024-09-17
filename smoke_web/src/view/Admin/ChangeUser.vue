<template>
    <div>
      <h1>User Management</h1>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user.email }}</td>
            <td>{{ user.password }}</td>
            <td>
              <button @click="editUser(user)">Edit</button>
              <button @click="deleteUser(user._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <h2>{{ isEditing ? 'Edit User' : 'Add User' }}</h2>
        <form @submit.prevent="isEditing ? updateUser() : addUser()">
          <div>
            <label for="email">Email:</label>
            <input type="email" v-model="form.email" required />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" v-model="form.password" required />
          </div>
          <button type="submit">{{ isEditing ? 'Update' : 'Add' }}</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
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
        this.editingUserId = user.email;
        this.form.email = user.email;
        this.form.password = user.password;
      },
      async updateUser() {
        try {
          const response = await axios.put(`http://localhost:5000/users/${this.editingUserId}`, this.form);
          const index = this.users.findIndex(user => user.email === this.editingUserId);
          this.$set(this.users, index, response.data);
          this.resetForm();
        } catch (error) {
          console.error('Error updating user:', error);
        }
      },
      async deleteUser(userId) {
        try {
          await axios.delete(`http://localhost:5000/users/${userId}`);
          this.users = this.users.filter(user => user.email !== userId);
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