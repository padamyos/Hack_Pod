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
    <div class="">
        <div class="flex flex-row  py-44 ">

            <div class=" basis-2/3 pl-28  ">

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

        <div class="flex justify-center ">
            <div class="carousel w-3/4  ">

                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                    class="w-full" />
                    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                    <div class="absolute left-5 right-5 bottom-1 flex -translate-y-1/2 transform justify-end
                    mr-32">

                        <button class="btn btn-primary ">Button</button>
                    </div>
                </div>

                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        class="w-full" />
                    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        class="w-full" />
                    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        class="w-full" />
                    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


        </div>



    </div>
</template>



<style>
/* Add Tailwind CSS classes here */
</style>