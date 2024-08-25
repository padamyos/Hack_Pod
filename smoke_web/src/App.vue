<script setup >
import {ref} from 'vue';
import Navbar from './components/Navbar.vue';
import Login from './view/Login.vue';
// import SignUp from './view/SignUp.vue';
import Footer from './components/Footer.vue'; // Import Footer component
// backend
import axios from 'axios';
</script>

<template>
    <div>
        <Navbar />
        <Login />
    </div>
</template>