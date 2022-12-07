<script setup>
import MainCardsSingle from './MainCardsSingle.vue'
</script>

<template>
    <div class ="sub-wrapper">
    <MainCardsSingle  v-for="n in 2" :key="n"/>
    </div>
</template>

<style scoped lang="postcss">
.sub-wrapper{
    @apply grid md:grid-cols-2 sm:grid-cols-1 gap-5 pt-5;
}
</style>