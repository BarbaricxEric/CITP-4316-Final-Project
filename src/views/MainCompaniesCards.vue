<script setup>
import MainCompaniesCardsSingle from './MainCompaniesCardsSingle.vue'
</script>

<template>
    <div class ="sub-wrapper">
    <MainCompaniesCardsSingle  v-for="n in 10" :key="n"/>
    </div>
</template>

<style scoped lang="postcss">
.sub-wrapper{
    @apply grid md:grid-cols-2 sm:grid-cols-1 gap-5 pt-5;
}
</style>