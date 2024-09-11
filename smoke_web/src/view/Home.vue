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

<template >
    <div class="">
        <div class="flex flex-row  py-44 " >

            <div class=" basis-2/3 pl-16  ">
    
                <button class=" bg-gradient-to-r from-[#0019FF] to-[#FF0000] text-white p-2 rounded-xl ">
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

        <div class="">
            <div class=" flex flex-row">
                <div class="card card-compact bg-base-100 w-80 shadow-xl mx-5 ">
                    <figure>
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div class="card card-compact bg-base-100 max-w-80 shadow-xl">
                    <figure>
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        


    </div>
</template>



<style>
/* Add Tailwind CSS classes here */
</style>