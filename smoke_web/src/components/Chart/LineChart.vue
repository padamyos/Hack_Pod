<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue';
import { Chart } from 'chart.js/auto';

export default {
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const canvas = ref(null);

    onMounted(async () => {
      await nextTick(); // รอให้ DOM ถูกสร้างเสร็จ

      if (canvas.value) {
        new Chart(canvas.value, {
          type: 'line',
          data: {
            labels: props.chartData.labels, // ใช้ labels ที่ถูกต้อง
            datasets: [
              {
                label: 'PM1',
                data: props.chartData.datasets[0]?.data || [], // ตรวจสอบว่าข้อมูล PM1 ถูกส่งเข้ามาหรือไม่
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true,
              },
              {
                label: 'Temperature',
                data: props.chartData.datasets[1]?.data || [], // ตรวจสอบว่าข้อมูล Temperature ถูกส่งเข้ามาหรือไม่
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    });

    return {
      canvas,
    };
  },
};
</script>


<style scoped>
canvas {
  width: 100%;
  height: 400px;
}
</style>