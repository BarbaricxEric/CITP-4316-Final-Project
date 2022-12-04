<script setup>
</script>

<template>
    <div class="brand"><img class="logo" src= "logo.svg" alt="logo"/>
    </div>
    <div class = "welcome">Hello, and Welcome to Castillo's Car Rental!</div>
    <div class = "welcome-options">Where would you like to begin? Choose a button below:</div>
    <nav>
        <div class="menu">
        <RouterLink :to="{ name: 'Vehicle' }" href="#" class="menu-vehicles">Vehicles</RouterLink>
        <RouterLink :to="{ name: 'Companies' }" href="#" class="menu-companies">Companies</RouterLink>
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
    @apply flex mx-auto justify-center py-16 space-x-5;
    &-vehicles{
        @apply text-3xl outline rounded-md bg-red-900 px-7 text-white outline-black;
    }
    &-companies{
        @apply text-3xl outline rounded-md bg-red-900 px-7 text-white outline-black;
    }
}
</style>