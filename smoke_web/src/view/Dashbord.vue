<template>
  <div class="dashboard pt-32">
    <h1>Device Dashboard</h1>

    <div>
      <label for="deviceSelect">Select Device: </label>
      <select id="deviceSelect" v-model="selectedDeviceId" @change="fetchDeviceData" class=" border-solid border-2  ">
        <option v-for="device in devices" :key="device.deviceId" :value="device.deviceId">
          {{ device.position }} ({{ device.deviceId }})
        </option>
      </select>
    </div>

    <!-- เพิ่ม dropdown สำหรับการเลือกช่วงเวลา -->
    <div>
      <label for="timeRange">Select Time Range: </label>
      <select id="timeRange" v-model="selectedTimeRange" @change="fetchDeviceData " class=" border-solid border-2  ">
        <option value="day">Last 24 Hours</option>
        <option value="week">Last 7 Days</option>
        <option value="month">Last 30 Days</option>
        <option value="custom">Custom Range</option>
      </select>
    </div>

    <!-- Custom Date Range Picker -->
    <div v-if="selectedTimeRange === 'custom'">
      <label for="startDate">Start Date:</label>
      <input type="date" id="startDate" v-model="customStartDate" @change="fetchDeviceData" />

      <label for="endDate">End Date:</label>
      <input type="date" id="endDate" v-model="customEndDate" @change="fetchDeviceData" />
    </div>



    <div class="flex flex-col m-5">
      <!-- อุณหภูมิ -->
      <div class="card bg-base-100 image-full w-full h-48 shadow-xl my-10">
        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
        </figure>
        <div class="card-body">
          <div v-if="latestTemperature !== null" class="latest-temperature">
            <p class=" text-6xl"> {{ latestTemperature }}°C</p>
            <h2 class="card-title "> อุณหภูมิ</h2>
          </div>
        </div>
      </div>

      <!-- PM1 -->
      <div class="card bg-base-100 image-full w-full h-48 shadow-xl  mb-10">
        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
        </figure>
        <div class="card-body">
          <div v-if="latestPm1 !== null" class="latest-Pm1">
            <p class=" text-6xl"> {{ latestPm1 }} ug/m<sup>2</sup> </p>
            <h2 class="card-title "> PM1</h2>
          </div>
        </div>
      </div>

      <!-- Humidity -->
      <div class="card bg-base-100 image-full w-full h-48 shadow-xl  mb-10">
        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
        </figure>
        <div class="card-body">
          <div v-if="latestHumidity !== null" class="latest-Humidity">
            <p class=" text-6xl"> {{ latestHumidity }} RH </p>
            <h2 class="card-title "> Humidity </h2>
          </div>
        </div>
      </div>

      <!-- Max Daily Data -->
      <div class="card bg-base-100 shadow-xl my-5">
        <div class="card-body">
          <h2 class="card-title">Daily Maximum</h2>
          <p>PM2.5: {{ maxDailyData.pm2_5 }} ug/m³</p>
          <p>Temperature: {{ maxDailyData.temperature }} °C</p>
        </div>
      </div>

      <!-- Max Weekly Data -->
      <div class="card bg-base-100 shadow-xl my-5">
        <div class="card-body">
          <h2 class="card-title">Weekly Maximum</h2>
          <p>PM2.5: {{ maxWeeklyData.pm2_5 }} ug/m³</p>
          <p>Temperature: {{ maxWeeklyData.temperature }} °C</p>
        </div>
      </div>


      <!-- วาดกราฟใหม่ทุกครั้งที่ selectedTimeRange เปลี่ยน -->
      <div v-if="deviceData.length">
        <LineChart :chartData="chartData" :key="selectedTimeRange" />
      </div>
      <div v-else>
        <p v-if="loading">Loading device data...</p>
        <p v-else>No data available for the selected device.</p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import { ref, onMounted, onUnmounted, watch } from 'vue';
import LineChart from '../components/Chart/LineChart.vue';
import dayjs from 'dayjs';

export default {
  components: {
    LineChart,
  },
  setup() {
    const devices = ref([]);
    const selectedDeviceId = ref('');
    const deviceData = ref([]);

    const selectedTimeRange = ref('day'); // ค่าเริ่มต้นเป็นวันล่าสุด (24 ชั่วโมงที่ผ่านมา)

    const customStartDate = ref(dayjs().format('YYYY-MM-DD'));
    const customEndDate = ref(dayjs().format('YYYY-MM-DD'));

    const chartData = ref({
      labels: [],
      datasets: [
        {
          label: 'PM2.5',
          data: [],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
        },
        {
          label: 'Temperature',
          data: [],
          fill: false,
          borderColor: 'rgb(255, 99, 132)',
        },
      ],
    });

    const maxDailyData = ref({
      pm2_5: null,
      temperature: null,
    });

    const maxWeeklyData = ref({
      pm2_5: null,
      temperature: null,
    });

    const loading = ref(false);
    const latestTemperature = ref(null);
    const latestPm1 = ref(null);
    const latestHumidity = ref(null);
    
    let intervalId = null;  // ใช้สำหรับเก็บค่า interval

    // Fetch devices เมื่อโหลดหน้าเว็บ
    onMounted(async () => {
      await fetchDevices();
      startAutoFetch();  // เริ่มการดึงข้อมูลทุกๆ 5 วินาที
    });

    // หยุดการดึงข้อมูลเมื่อ component ถูก unmount
    onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });

    const startAutoFetch = () => {
      // เรียก fetchDeviceData ทุกๆ 5 วินาที
      intervalId = setInterval(() => {
        fetchDeviceData();
      }, 5000);
    };

    const fetchDevices = async () => {
      try {
        loading.value = true;
        const response = await axios.get('http://localhost:5000/devices');
        devices.value = response.data;
      } catch (error) {
        console.error('Error fetching devices list:', error);
      } finally {
        loading.value = false;
      }
    };

    // ฟังก์ชันดึงข้อมูลและสร้างกราฟ
    const fetchDeviceData = async () => {
      if (!selectedDeviceId.value) return;
      loading.value = true;

      try {
        const response = await axios.get(`http://localhost:5000/devices/data/${selectedDeviceId.value}`);
        deviceData.value = response.data.data || [];

        // กรองข้อมูลตามช่วงเวลาที่เลือก
        const filteredData = filterDataByTimeRange(deviceData.value);
        console.log('filteredData:', filteredData);

        // ดึงข้อมูลล่าสุดจาก deviceData
        latestTemperature.value = deviceData.value[deviceData.value.length - 1]?.temperature || null;
        latestPm1.value = deviceData.value[deviceData.value.length - 1]?.pm1 || null;
        latestHumidity.value = deviceData.value[deviceData.value.length - 1]?.humidity || null;

        // คำนวณค่าสูงสุดใน 24 ชั่วโมง
        const dailyData = deviceData.value.filter(data => dayjs(data.timestamp).isSame(dayjs(), 'day'));
        if (dailyData.length) {
          maxDailyData.value.pm2_5 = Math.max(...dailyData.map(data => data.pm2_5 || 0));
          maxDailyData.value.temperature = Math.max(...dailyData.map(data => data.temperature || 0));
        }

        // คำนวณค่าสูงสุดใน 7 วัน
        const weeklyData = deviceData.value.filter(data => dayjs(data.timestamp).isAfter(dayjs().subtract(7, 'day')));
        if (weeklyData.length) {
          maxWeeklyData.value.pm2_5 = Math.max(...weeklyData.map(data => data.pm2_5 || 0));
          maxWeeklyData.value.temperature = Math.max(...weeklyData.map(data => data.temperature || 0));
        }

        // เตรียมข้อมูลสำหรับ chart
        chartData.value.labels = filteredData.map(data => new Date(data.timestamp).toLocaleString());
        chartData.value.datasets[0].data = filteredData.map(data => data.pm2_5 || 0);
        chartData.value.datasets[1].data = filteredData.map(data => data.temperature || 0);
      } catch (error) {
        console.error('Error fetching device data:', error);
      } finally {
        loading.value = false;
      }
    };

    // ฟังก์ชันกรองข้อมูลตามช่วงเวลาที่เลือก
    const filterDataByTimeRange = (data) => {
      const now = dayjs();
      let filteredData = [];

      if (selectedTimeRange.value === 'day') {
        filteredData = data.filter(d => dayjs(d.timestamp).isAfter(now.subtract(1, 'day')));
      } else if (selectedTimeRange.value === 'week') {
        filteredData = data.filter(d => dayjs(d.timestamp).isAfter(now.subtract(7, 'day')));
      } else if (selectedTimeRange.value === 'month') {
        filteredData = data.filter(d => dayjs(d.timestamp).isAfter(now.subtract(30, 'day')));
      } else if (selectedTimeRange.value === 'custom') {
        const startDate = dayjs(customStartDate.value).startOf('day');
        const endDate = dayjs(customEndDate.value).endOf('day');
        filteredData = data.filter(d => dayjs(d.timestamp).isBetween(startDate, endDate));
      }

      return filteredData;
    };

    // watch สำหรับ selectedTimeRange: เมื่อเปลี่ยนช่วงเวลาให้เรียก fetchDeviceData ใหม่
    watch(selectedTimeRange, () => {
      fetchDeviceData();
    });

    return {
      devices,
      selectedDeviceId,
      deviceData,
      chartData,
      selectedTimeRange,
      loading,
      latestTemperature,
      latestPm1,
      latestHumidity,
      maxDailyData,
      maxWeeklyData,
      fetchDeviceData,
    };
  },
};
</script>



<style scoped>
.dashboard {
  margin: 20px;
}

select {
  margin: 10px 0;
  padding: 5px;
}
</style>
