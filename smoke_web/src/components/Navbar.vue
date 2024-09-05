<script>
export default {
    name: 'Navbar',
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
      logout() {
        // ลบ token หรือข้อมูลผู้ใช้จาก localStorage
        localStorage.removeItem('userToken');
        // นำผู้ใช้ไปยังหน้า Login
        this.$router.push({ name: 'Login' });
      },
    },
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
            </div>
        </div>
    </nav> 
    
</template>



<style>
/* Add your custom styles here */
</style>