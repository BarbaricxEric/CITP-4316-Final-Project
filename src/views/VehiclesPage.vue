<script setup>
import MainSearch from './MainSearch.vue'
import MainCards from './MainCards.vue'
</script>

<template>
    
    <div class = "title">Vehicles</div>
    <div class="wrapper">
    <MainSearch />
    <MainCards />
    </div>
</template>

<style lang="postcss" scoped> 
.title{
    @apply font-bold text-4xl flex mx-auto justify-center py-4;
}

.wrapper{
    @apply flex flex-col container mx-auto py-2;
}

</style>
