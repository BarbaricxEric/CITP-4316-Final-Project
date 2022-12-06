<script setup>
</script>

<template>
    <div class="brand">
        <img class="logo" src="/pictures/logo.svg" alt="logo.svg"/>
    </div>
    <div class = "welcome">Hello, and Welcome to Castillo's Car Rental!</div>
    <div class = "welcome-options">Login To Begin:</div>
    <nav>
        <div class="menu">
        <RouterLink :to="{name:'LoginPage'}" href="#" class="menu-login">Login</RouterLink>
        </div>
    </nav>
    
</template>

<style lang ="postcss" scoped>
.welcome{
    @apply text-3xl mx-auto flex justify-center font-bold font-serif;
}
.welcome-options{
    @apply text-2xl mx-auto flex justify-center pt-10
}

.brand{
    @apply flex items-center justify-center gap-24 py-10;

    & .logo{
        @apply h-44 w-44
    }
}
.menu{
    @apply flex mx-auto justify-center py-8 space-x-5;
     &-login{
        @apply px-4 pb-2 rounded-2xl hover:bg-green-600 bg-green-500 text-3xl;
      }
}
</style>