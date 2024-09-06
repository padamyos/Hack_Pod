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
                <a href="#"
                    class="text-black hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">เกี่ยวกับ</a>
                <a href="#"
                    class="text-black hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">ติดต่อ</a>
                <RouterLink to="dashboard" class="btn btn-active btn-primary">
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
                    <li><a @click="logout" >Logout</a></li>
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