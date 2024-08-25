<template>
    <div class="flex justify-center items-center h-screen">
        <div class="w-1/3">
            <h1 class="text-3xl font-bold mb-6">Login</h1>
            <form @submit.prevent="addUser">
                <div class="mb-4">
                    <label for="email" class="block mb-2">Email</label>
                    <input type="email" v-model="email" id="email" class="w-full px-4 py-2 border rounded" />
                </div>
                <div class="mb-4">
                    <label for="password" class="block mb-2">Password</label>
                    <input type="password" v-model="password" id="password" class="w-full px-4 py-2 border rounded" />
                </div>
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login',
    data() {
        return {
            email: '',   // Capture email input
            password: '', // Capture password input
        };
    },
    methods: {
        async addUser() {
            try {
                const response = await axios.post('http://localhost:5000/users/add', {
                    email: this.email,
                    password: this.password,
                });
                console.log(response.data);
                alert('User logged in successfully');
            } catch (err) {
                console.error(err);
                alert('Error logging in');
            }
        },
    },
}
</script>

<style>
/* Add any custom styles here */
</style>
