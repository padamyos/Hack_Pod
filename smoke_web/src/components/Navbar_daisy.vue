<template>
    <div class="navbar bg-base-100">

        <div class="flex-1">
            <RouterLink to="/" class="btn btn-ghost text-xl text-[#7300FF]">SMOKE DETECTOR</RouterLink>
        </div>
        <div class="flex-none gap-2">
            <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
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
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarDaisy',

}
</script>

<style></style>