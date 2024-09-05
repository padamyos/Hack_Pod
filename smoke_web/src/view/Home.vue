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
    <div>
        <div class="flex flex-row bg-white py-44">

            <div class=" basis-2/3 pl-16  ">
                <button @click="showAlert">Hello world</button>
                <button  class=" bg-gradient-to-r from-[#0019FF] to-[#FF0000] text-white p-2 rounded-xl ">
                    HACK. POD. HACK8
                </button>
                <p class="py-5 text-[#CFCFCF] text-3xl">
                    Website to view vape statistics
                </p>
                <p class="text-[#572ED3] text-6xl font-black">
                    Real time and
                </p>
                <p class="text-[#B0269F] text-6xl font-black">
                    easy to view
                </p>

            </div>
            <div class="   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl mr-10">
                <img src="../assets/vape.png" alt="vape" class="w-96 h-96 " />

            </div>
        </div>

        <div class="bg-black">
            <h1>New</h1>
        </div>


    </div>
</template>



<style>
/* Add Tailwind CSS classes here */
</style>