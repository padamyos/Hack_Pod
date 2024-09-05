<script>
export default {
    name: 'Navbar',
    data() {
        return {
            isOpen: false
        };
    }
};
</script>
<template>
    <nav class="bg-white py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class=" justify-between h-16 ">
                <div class="flex flex-row items-center font-black text-lg">
                    <!-- Logo -->
                    <div class="text-[#7300FF] basis-4/6 text-4xl">
                        <h1>SMOKE DETECTOR</h1>
                    </div> 
                    <!-- Links -->
                    <div class="hidden md:block   ">
                        <div class=" flex items-baseline pl-32 space-x-4">

                            <RouterLink to="/" class=" text-black">
                                หน้าหลัก
                            </RouterLink>
                            <a href="#"
                                class="text-black hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">เกี่ยวกับ</a>
                            <a href="#"
                                class="text-black hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">ติดต่อ</a>
                            <RouterLink to="dashboard" class="px-4 py-2 bg-[#6A00FF] text-white rounded-xl">
                                Dashbord
                            </RouterLink>

                            <RouterLink to="/login" class="btn btn-active btn-primary text-white" >
                                เข้าสู่ระบบ
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <!-- Mobile menu button -->
                <div class="-mr-2 flex md:hidden">
                    <button @click="isOpen = !isOpen" type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <!-- Icon -->
                        <svg :class="{'hidden': isOpen, 'block': !isOpen }" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        <svg :class="{'hidden': !isOpen, 'block': isOpen }" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile menu -->
        <div :class="{'block': isOpen, 'hidden': !isOpen}" class="md:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
        </div>
    </nav>
</template>



<style>
/* Add your custom styles here */
</style>