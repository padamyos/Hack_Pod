<template>
    <div class="flex  justify-start  h-screen bg-[#7300ff] m-28 rounded-2xl ">
        <div class=" items-center m-60">

            <div class="bg-white rounded-full p-56 ">
                <h1 class=" text-black font-black ">Logo</h1>
            </div>
        </div>
        <div class="w-1/3 pt-52 ">
            <p class="text-4xl font-bold mb-6  text-center pt-20 ">เข้าสู่ระบบ</p>
            <form @submit.prevent="userLogin">
                <div class="mb-4">

                    <label for="email" class="block mb-2">
                        Email
                    </label>
                    <input type="email" v-model="email" id="email" placeholder="กรุณาป้อนอีเมล"
                        class="w-full px-4 py-2 border rounded text- " />
                </div>
                <div class="mb-4">
                    <label for="password" class="block mb-2">
                        Password
                    </label>
                    <input type="password" v-model="password" id="password" placeholder="กรุณาป้อนรหัสผ่าน"
                        class="w-full px-4 py-2 border rounded " />
                </div>

                <!-- ส่วน checkbox สำหรับนโยบายการใช้งาน -->
                <div class="mb-4">
                    <input type="checkbox" v-model="acceptPolicy" id="acceptPolicy" @change="handlePolicyChange" />
                    <label for="acceptPolicy">
                        ยอมรับ
                        <RouterLink to="policy" class="btn  btn-link btn-primary  text-base-100 ">
                            นโยบายการใช้งาน
                        </RouterLink>
                    </label>
                </div>

                <button type="submit" class="bg-green-500 text-base-100 w-full py-2 rounded">
                    Login
                </button>
            </form>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default
    {
        name: 'Login',
        data() {
            return {
                email: '',   // Capture email input
                password: '', // Capture password input
                acceptPolicy: false, // สถานะของ checkbox นโยบายการใช้งาน
            };
        },
        methods: {
            // method สำหรับแสดง popup ทันทีที่กด checkbox
            handlePolicyChange() {
                if (this.acceptPolicy) {
                    Swal.fire({
                        icon: 'info',
                        title: 'คุณยอมรับนโยบายการใช้งานแล้ว',
                        text: 'ขอบคุณที่ยอมรับนโยบายของเรา',
                        confirmButtonText: 'ตกลง'
                    });
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'คุณยังไม่ได้ยอมรับนโยบายการใช้งาน',
                        text: 'โปรดยอมรับนโยบายการใช้งานก่อน',
                        confirmButtonText: 'ตกลง'
                    });
                }
            },

            async userLogin() {
                if (!this.acceptPolicy) {
                    // แสดง Swal แจ้งเตือนถ้าไม่ยอมรับนโยบาย
                    Swal.fire({
                        icon: 'warning',
                        title: 'กรุณายอมรับนโยบายการใช้งาน',
                        confirmButtonText: 'ตกลง'
                    });
                    return;
                }

                try {
                    const response = await axios.post('http://localhost:5000/users/login', {
                        email: this.email,
                        password: this.password,
                    });
                    console.log(response.data);
                    localStorage.setItem('userToken', response.data.token);
                    localStorage.setItem('userToken', response.data.token);
                    localStorage.setItem('username', response.data.username);
                    localStorage.setItem('role', JSON.stringify(response.data.role));
                    localStorage.setItem('_id', response.data._id);
                    console.log(localStorage.getItem('_id'));

                    const user = JSON.parse(localStorage.getItem('role'));
                    Swal.fire({
                        icon: 'success',
                        title: 'Logged in successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    if (user == 'admin') {
                        this.$router.push({ name: 'ChangeUser' });
                    } else {
                        this.$router.push({ name: 'Home' });
                    }
                } catch (err) {
                    console.error(err);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Invalid email or password',
                        icon: 'error',
                        confirmButtonText: 'OK!'
                    })
                }
            },
        },
    }
</script>
