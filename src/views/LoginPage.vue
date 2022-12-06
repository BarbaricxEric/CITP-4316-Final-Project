<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const { login , logout} = useAuth()

const router = useRouter()
const username = ref('')

const password = ref('')
const logUserIn = () => {
    if (login(username.value, password.value)) {
        router.push({name: 'Vehicle'})
    } else {
        logout()
    }
    
}
</script>

<template>
    <form class="login-form" @submit.prevent="logUserIn">
    <input v-model="username" type="text" placeholder="Username" />
    <input  v-model="password" type="password" placeholder = "Password"/>
    <button class = "login-button" type="submit">Login</button>
    </form>
</template>

<style scoped lang="postcss">
.login-form{
    @apply flex flex-col max-w-lg mx-auto mt-72 gap-4 p-8 bg-white 
    rounded-md shadow-lg outline outline-red-900 ;
    button{
        @apply text-2xl  bg-red-900 rounded-md mx-auto px-16 pb-1 text-white
        hover:bg-red-500;
    }
    & input{
        @apply text-xl px-4 py-2 ring-1 rounded-md ring-black focus:ring focus:ring-black border-0;
    }
    
}
</style>