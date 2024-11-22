<template>
  <div class="container mx-auto p-8 pt-40">
    <h1 class="text-3xl font-bold mb-6">จัดการอุปกรณ์ของคุณ</h1>

    <!-- ฟอร์มสำหรับเพิ่มอุปกรณ์ใหม่ -->
    <form @submit.prevent="addDevice" class="mb-6">
      <div class="mb-4">
        <label for="deviceId" class="block">Device ID:</label>
        <input v-model="newDevice.deviceId" type="text" id="deviceId" class="border p-2 w-full" required />
      </div>

      <div class="mb-4">
        <label for="position" class="block">Position:</label>
        <input v-model="newDevice.position" type="text" id="position" class="border p-2 w-full" required />
      </div>

      <div class="mb-4">
        <label for="status" class="block">Status:</label>
        <select v-model="newDevice.status" id="status" class="border p-2 w-full">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <button type="submit" class="bg-green-500 text-white py-2 px-4 rounded">เพิ่มอุปกรณ์</button>
    </form>
    <button @click="fetchDevices" type="submit" class="bg-green-500 text-white py-2 px-4 rounded">เรียกอุปกรณ์</button>

    <!-- รายการอุปกรณ์ -->
    <h2 class="text-2xl font-bold mb-4">รายการอุปกรณ์ของคุณ</h2>
    <div v-if="devices.length">
      <ul>
        <li v-for="device in devices" :key="device.deviceId" class="border p-4 mb-2">
          <p><strong>Device ID:</strong> {{ device.deviceId }}</p>
          <p><strong>Position:</strong> {{ device.position }}</p>
          <p><strong>Status:</strong> {{ device.status }}</p>
          <button @click="deleteDevice(device.deviceId)" class="bg-red-500 text-white py-1 px-2 mt-2 rounded">ลบอุปกรณ์</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>ไม่มีอุปกรณ์ในระบบ</p>
    </div>
  </div>
</template>

<script>

import axios from 'axios';


export default {
  name: 'ManageDevices',
  data() {
    return {
      devices: [],  // เก็บรายการอุปกรณ์ของผู้ใช้
      newDevice: {
        deviceId: '',
        position: '',
        status: 'active',
      },  // เก็บข้อมูลสำหรับอุปกรณ์ใหม่
      ownerId: localStorage.getItem('_id'),  // แทนที่ด้วย ownerId จริงเมื่อเข้าสู่ระบบ
    };
  },
  methods: {
    // ฟังก์ชันสำหรับดึงข้อมูลอุปกรณ์ของผู้ใช้
    async fetchDevices() {
      try {
        const response = await axios.get(`http://localhost:5000/devices/${this.ownerId}`);
        this.devices = response.data;
        console.log(this.ownerId);
      } catch (error) {
        console.error('Error fetching devices:', error);
      }
    },
    
    // ฟังก์ชันสำหรับเพิ่มอุปกรณ์ใหม่
    async addDevice() {
      try {
        const response = await axios.post('http://localhost:5000/devices/add', {
          ...this.newDevice,
          ownerId: this.ownerId,
        });
        this.devices.push(response.data.device);  // เพิ่มอุปกรณ์ใหม่ในรายการ
        this.newDevice = { deviceId: '', position: '', status: 'active' };  // ล้างฟอร์ม
      } catch (error) {
        console.error('Error adding device:', error);
      }
    },

    // ฟังก์ชันสำหรับลบอุปกรณ์
    async deleteDevice(deviceId) {
      try {
        await axios.delete(`http://localhost:5000/devices/${deviceId}`);
        this.devices = this.devices.filter(device => device.deviceId !== deviceId);  // อัพเดทรายการหลังลบ
      } catch (error) {
        console.error('Error deleting device:', error);
      }
    },
  },
  mounted() {
    // ดึงข้อมูลอุปกรณ์เมื่อหน้าโหลด
    this.fetchDevices();
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
