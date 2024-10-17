<script>


export default {
    name: 'Home',
    methods: {
        showAlert() {
            // Use sweetalert2
            Vue.swal('Hello Vue world!!!');
        },
    },
}
</script>

<template>

    <div class="relative ">
        <!-- SVG พื้นหลัง -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 110 1440 320"
            class="absolute inset-0  bg-local z-0 h-80 ">
            <path fill="#0099ff" fill-opacity="1"
                d="M0,288L60,293.3C120,299,240,309,360,282.7C480,256,600,192,720,138.7C840,85,960,43,1080,37.3C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
            </path>
        </svg>

        <!-- เนื้อหา -->
        <div class="relative z-10 flex flex-row bg-local  pt-20">
            <div class="basis-2/3 pl-28">
                <button class="bg-gradient-to-r from-[#0019FF] to-[#FF0000] text-white p-2 rounded-xl">
                    HACK. POD. HACK8
                </button>
                <p class="py-5 text-[#CFCFCF] text-3xl">Website to view vape statistics</p>
                <p class="text-[#572ED3] text-6xl font-black">Real time and</p>
                <p class="text-[#B0269F] text-6xl font-black">easy to view</p>
            </div>
            <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl mr-10">
                <img src="../assets/vape.png" alt="vape" class="w-96 h-96" />
            </div>
            
        </div>

        
        
        <!-- Carousel Section -->
        <div class="relative z-10 flex justify-center">
            <div class="carousel w-3/4">
                <!-- Add your carousel items here -->
            </div>
        </div>
        
    </div>





</template>



<style>
/* Add Tailwind CSS classes here */
</style>