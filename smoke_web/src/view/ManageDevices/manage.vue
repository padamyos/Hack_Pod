<template>
  <div class="py-10">
    <div class="text-center text-4xl font-bold pb-5">
      <h1>Add Device</h1>
    </div>
    <form @submit.prevent="addDevice" class="space-y-4">
      <div class="form-control">
        <label class="label" for="position">Position:</label>
        <input type="text" v-model="form.position" class="input input-bordered" required />
      </div>
      <div class="form-control">
        <label class="label" for="status">Status:</label>
        <input type="text" v-model="form.status" class="input input-bordered" required />
      </div>
      <button type="submit" class="btn btn-primary">Add Device</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        position: '',
        status: ''
      }
    };
  },
  methods: {
    async addDevice() {
      
      const userId = localStorage.getItem('_id');; // สมมติว่า userId ถูกส่งมาในพารามิเตอร์ของเส้นทาง
      try {
        const response = await axios.put(`http://localhost:5000/users/${userId}/devices`, this.form);
        alert(response.data.message);
        this.resetForm();
      } catch (error) {
        console.error('Error adding device:', error);
        alert('Error adding device');
      }
    },
    resetForm() {
      this.form.position = '';
      this.form.status = '';
    }
  }
};
</script>