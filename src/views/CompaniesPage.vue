<script setup>
 import MainCompaniesCards from './MainCompaniesCards.vue';
 import MainSearch from './MainSearch.vue'
</script>

<template>
    <div class="title">Companies</div>
    <div class="wrapper">
    <MainSearch />
    <MainCompaniesCards />
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