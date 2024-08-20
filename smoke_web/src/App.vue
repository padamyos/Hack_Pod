<script setup >
import {ref} from 'vue';
import Navbar from './components/Navbar.vue';
// import Login from './view/Login.vue';
import SignUp from './view/SignUp.vue';
</script>

<template>
    <div>
        <Navbar />
         <Login />
        <SignUp /> 
    </div>
</template>