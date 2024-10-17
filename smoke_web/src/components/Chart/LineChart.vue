<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { Chart } from 'chart.js/auto';
import { ref, watch, onMounted } from 'vue';

export default {
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const canvas = ref(null);
    let chartInstance = null;

    // ฟังก์ชันสำหรับสร้างกราฟใหม่
    const createChart = () => {
      if (chartInstance) {
        chartInstance.destroy(); // ทำลายกราฟเก่า
      }
      chartInstance = new Chart(canvas.value, {
        type: 'line',
        data: props.chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    };

    // เมื่อ component โหลดเสร็จ ให้สร้างกราฟ
    onMounted(() => {
      createChart();
    });

    // ใช้ watch เพื่อจับการเปลี่ยนแปลงของ chartData และอัปเดตกราฟ
    watch(
      () => props.chartData,
      () => {
        if (chartInstance) {
          chartInstance.data = props.chartData;
          chartInstance.update(); // อัปเดตกราฟใหม่เมื่อข้อมูลเปลี่ยน
        }
      },
      { deep: true }
    );

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
