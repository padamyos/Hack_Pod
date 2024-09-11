<template>
  <div class="p-6  min-h-screen">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <button class="bg-blue-500 text-white py-2 px-4 rounded">Generate Report</button>
    </div>

    <!-- Stats Section -->
    <div class="grid grid-cols-4 gap-4 my-6">
      <div class="bg-white p-4 rounded shadow">
        <p class="text-gray-600">ระยะเวลาที่ติดตั้งอุปกรณ์</p>
        <h2 class="text-3xl font-bold">20</h2>
      </div>
      <div class="bg-white p-4 rounded shadow">
        <p class="text-gray-600">จำนวนที่ตรวจสอบ</p>
        <h2 class="text-3xl font-bold">59 ครั้ง</h2>
      </div>
      <div class="bg-white p-4 rounded shadow">
        <p class="text-gray-600">ความปลอดภัย</p>
        <div class="relative pt-1">
          <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div
              style="width:50%"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            ></div>
          </div>
        </div>
      </div>
      <div class="bg-white p-4 rounded shadow">
        <p class="text-gray-600">ร้องเรียน</p>
        <h2 class="text-3xl font-bold">3 ครั้ง</h2>
      </div>
    </div>

    <!-- Graphs Section -->
    <div class="grid grid-cols-2 gap-4">
      <!-- Line Chart -->
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl font-bold mb-4">กราฟแสดงการตรวจสอบว่าเจอควัน</h2>
        <LineChart  />
      </div>

      <!-- Pie Chart -->
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl font-bold mb-4">ช่วงเวลา</h2>
        <BarChart />
      </div>
    </div>
  </div>
</template>

<script>
// Import the charts
import BarChart from '../components/Chart/BarChart.vue';
import LineChart from '../components/Chart/LineChart.vue';

export default {
  components: {
    LineChart,
    BarChart,
  },
  
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
