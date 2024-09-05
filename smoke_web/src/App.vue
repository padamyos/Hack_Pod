<script setup>

import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import NavbarDaisy from './components/Navbar_daisy.vue';
import Login from './view/Login.vue';
import Home from './view/Home.vue';
// import SignUp from './view/SignUp.vue';

import Footer from './components/Footer.vue'; // Import Footer component
// backend
import axios from 'axios';

</script>



<template>
    <div>
        <NavbarDaisy />

        <main>
            <RouterView />
        </main>

        <Footer />

    </div>
</template>