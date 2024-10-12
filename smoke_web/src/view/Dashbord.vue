<template>
  <div class="dashboard">
    <h1>Device Dashboard</h1>

    <div>
      <label for="deviceSelect">Select Device: </label>
      <select id="deviceSelect" v-model="selectedDeviceId" @change="fetchDeviceData">
        <option v-for="device in devices" :key="device.deviceId" :value="device.deviceId">
          {{ device.position }} ({{ device.deviceId }})
        </option>
      </select>
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

          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <!-- latestPm1 -->
      <div class="card bg-base-100 image-full w-full h-48 shadow-xl  mb-10">

        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
        </figure>
        <div class="card-body">


          <div v-if="latestPm1 !== null" class="latest-Pm1">
            <p class=" text-6xl"> {{ latestPm1 }} ug/m<sup>2</sup> </p>

            <h2 class="card-title "> PM1</h2>
          </div>

          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>


      <!-- latestHumidity -->
      <div class="card bg-base-100 image-full w-full h-48 shadow-xl  mb-10">

        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
        </figure>
        <div class="card-body">


          <div v-if="latestHumidity !== null" class="latest-Humidity">
            <p class=" text-6xl"> {{ latestHumidity }} RH </p>

            <h2 class="card-title "> Humidity </h2>
          </div>

          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

    </div>



    <div v-if="deviceData.length">
      <!-- <line-chart :chartData="chartData" /> -->
      <LineChart :chartData="chartData" />
    </div>
    <div v-else>
      <p v-if="loading">Loading device data...</p>
      <p v-else>No data available for the selected device.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';
import LineChart from '../components/Chart/LineChart.vue';

export default {
  components: {
    LineChart,
  },
  setup() {
    const devices = ref([]);
    const selectedDeviceId = ref('');
    const deviceData = ref([]);

    const chartData = ref({
      labels: [],
      datasets: [
        {
          label: 'PM1',
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
    
    const loading = ref(false);
    const latestTemperature = ref(null);
    const latestPm1 = ref(null);
    const latestHumidity = ref(null);

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:5000/devices'); // ดึงรายการอุปกรณ์ทั้งหมด
        devices.value = response.data;
        
      } catch (error) {
        console.error("Error fetching devices list: ", error);
      }
    });

    const fetchDeviceData = async () => {
      if (!selectedDeviceId.value) return;

      loading.value = true;

      try {
        const response = await axios.get(`http://localhost:5000/devices/data/${selectedDeviceId.value}`);
        deviceData.value = response.data.data || [];
        console.log(deviceData.value);

        // ดึงข้อมูลล่าสุดจาก deviceData
        latestTemperature.value = deviceData.value[deviceData.value.length - 1]?.temperature || null;
        latestPm1.value = deviceData.value[deviceData.value.length - 1]?.pm1 || null;
        latestHumidity.value = deviceData.value[deviceData.value.length - 1]?.humidity || null;

        // เตรียมข้อมูลสำหรับ chart
        chartData.value.labels = deviceData.value.map(data => new Date(data.timestamp).toLocaleString());
        chartData.value.datasets[0].data = deviceData.value.map(data => data.pm1 || 0);
        chartData.value.datasets[1].data = deviceData.value.map(data => data.temperature || 0);

      } catch (error) {
        console.error("Error fetching device data: ", error);
      } finally {
        loading.value = false;
      }
    };

    return {
      devices,
      selectedDeviceId,
      deviceData,
      chartData,
      loading,
      latestTemperature,
      latestPm1,
      latestHumidity,
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
