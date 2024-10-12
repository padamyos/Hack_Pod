<template>
    <div class="navbar bg-white">

        <div class="flex-1">
            <RouterLink to="/home" class="btn btn-ghost text-xl text-[#7300FF]">SMOKE DETECTOR</RouterLink>
        </div>
        <div class="flex-none gap-2">
            <div class="form-control pr-10">
                <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto " />
            </div>
            <div>
                <label class="swap swap-rotate">
                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox" class="theme-controller" value="light" />

                    

                    <!-- moon icon -->
                    <svg class="swap-on h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>


                    <!-- sun icon -->
                    <svg class="swap-off h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                </label>
            </div>
            <div>
                <a href="#"
                    class="text-black hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">เกี่ยวกับ</a>
                <a href="#"
                    class="text-black hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                    ติดต่อ
                </a>
                <RouterLink to="device" class="btn btn-outline btn-primary mx-3 ">
                    จัดการอุปกรณ์
                </RouterLink>
                <RouterLink to="dashboard" class="btn btn-outline btn-primary ">
                    Dashbord
                </RouterLink>
            </div>

            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a @click="logout">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarDaisy',
    methods: {
        logout() {
            // ลบ token หรือข้อมูลผู้ใช้จาก localStorage
            localStorage.removeItem('userToken');
            // นำผู้ใช้ไปยังหน้า Login
            this.$router.push({ name: 'Login' });
            Swal.fire({
                title: 'Error!',
                text: 'Invalid email or password',
                icon: 'error',
                confirmButtonText: 'OK!'
            })
        },
    },

}
</script>

<style></style>