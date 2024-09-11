<template>
    
    <Line 
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    />
  </template>
  
  <script>
  import { Line } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);
  
  export default {
    name: 'LineChart',
    components: { Line },
    
    data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'กราฟแสดงการตรวจสอบว่าเจอควัน',
            backgroundColor: '#f87979',
            data: [25, 2, 3, 1, 2, 1, 2],
            tension: 0.1 // ทำให้เส้นกราฟโค้งได้
          }
        
        ],
        
      },
      chartOptions: {
        // ทำให้กราฟเปลี่ยนขนาดตามขนาดของ div
        responsive: true, 
        // รักษาสัดส่วนของกราฟ
        // maintainAspectRatio: false,
      }
    };
  }
  };
  </script>
  
  <style scoped>
  /* เพิ่มสไตล์ที่ต้องการที่นี่ */
  </style>