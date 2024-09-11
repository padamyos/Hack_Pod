<template>
    <div>
      <h1>Manage Devices</h1>
      <form @submit.prevent="addDevice">
        <input v-model="newDevice.name" placeholder="Device Name" />
        <input v-model="newDevice.type" placeholder="Device Type" />
        <input v-model="newDevice.status" placeholder="Device Status" />
        <button type="submit">Add Device</button>
      </form>
      <ul>
        <li v-for="device in devices" :key="device._id">
          {{ device.name }} - {{ device.type }} - {{ device.status }}
          <button @click="editDevice(device)">Edit</button>
          <button @click="deleteDevice(device._id)">Delete</button>
        </li>
      </ul>
      <div v-if="editingDevice">
        <h2>Edit Device</h2>
        <form @submit.prevent="updateDevice">
          <input v-model="editingDevice.name" placeholder="Device Name" />
          <input v-model="editingDevice.type" placeholder="Device Type" />
          <input v-model="editingDevice.status" placeholder="Device Status" />
          <button type="submit">Update Device</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ManageDevices',
    data() {
      return {
        devices: [],
        newDevice: {
          name: '',
          type: '',
          status: ''
        },
        editingDevice: null
      };
    },
    methods: {
      async fetchDevices() {
        const response = await axios.get('http://localhost:5000/devices');
        this.devices = response.data;
      },
      async addDevice() {
        const response = await axios.post('http://localhost:5000/devices', this.newDevice);
        this.devices.push(response.data);
        this.newDevice = { name: '', type: '', status: '' };
      },
      editDevice(device) {
        this.editingDevice = { ...device };
      },
      async updateDevice() {
        const response = await axios.put(`http://localhost:5000/devices/${this.editingDevice._id}`, this.editingDevice);
        const index = this.devices.findIndex(device => device._id === this.editingDevice._id);
        this.$set(this.devices, index, response.data);
        this.editingDevice = null;
      },
      async deleteDevice(id) {
        await axios.delete(`http://localhost:5000/devices/${id}`);
        this.devices = this.devices.filter(device => device._id !== id);
      }
    },
    mounted() {
      this.fetchDevices();
    }
  };
  </script>
  
  <style scoped>
  /* เพิ่มสไตล์ที่ต้องการที่นี่ */
  </style>