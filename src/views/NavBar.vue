<script setup>
import {ref} from 'vue'
const title = ref("Castillo's Car Rental")
</script>

<template>
    <nav>
    <div class = wrapper>
      <RouterLink :to="{ name: 'Home' }" class="business">
      <span class = "business-title">{{ title }}</span>
       </RouterLink>
       </div>
  </nav>
  <nav>
  <div class="menu">
        <RouterLink :to="{ name: 'Vehicle' }" href="#" class="menu-vehicles">Vehicles</RouterLink>
        <RouterLink :to="{ name: 'Companies' }" href="#" class="menu-companies">Companies</RouterLink>
        <RouterLink :to="{ name: 'Settings' }" href="#" class="menu-settings">Settings</RouterLink>
  </div>
  </nav>

  
</template>

<style lang="postcss" scoped> 
  nav{
    @apply flex h-10 bg-red-900 text-white;

    .wrapper{
    @apply mx-auto flex;

    .business{
      &-title{
        @apply text-3xl font-bold;
    }
    
    }
  }
}
.menu{
      @apply mx-auto flex font-thin text-xl;
      &-vehicles{
        @apply px-4
      }
      &-companies{
        @apply px-4
      }
      &-settings{
        @apply px-4
      }
}

</style>
