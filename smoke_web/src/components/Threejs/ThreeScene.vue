<template>
    <div ref="threeContainer"></div>
</template>
  
  <script>
  import * as THREE from 'three';
  
  export default {
    mounted() {
      // กำหนดค่าฉาก
      const scene = new THREE.Scene();
      
      // กำหนดค่ากล้อง
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
  
      // สร้าง renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.threeContainer.appendChild(renderer.domElement);
  
      // สร้างวัตถุ เช่น กล่อง
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
  
      // ฟังก์ชัน animate
      const animate = function () {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
  
      animate();
    }
  }
  </script>
  