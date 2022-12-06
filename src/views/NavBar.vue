<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const {isAuthenticated, logout, user} = useAuth()
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
        
        <div v-if = "isAuthenticated">
         <i class="pr-7">Welcome {{user?.email}}</i>
        <RouterLink :to="{ name: 'Vehicle' }" href="#" class="menu-vehicles">Vehicles</RouterLink>
        <RouterLink :to="{ name: 'Companies' }" href="#" class="menu-companies">Companies</RouterLink>
        <RouterLink :to="{ name: 'Settings' }" href="#" class="menu-settings">Settings</RouterLink>
        <RouterLink :to="{ name: 'Home' }" href="#" class="menu-settings" @click="logout">Logout</RouterLink>
         
        </div>
        <div v-else>
          <i class="mx-auto pl-72 pr-20">Please login to view tabs</i>
      </div>
  </div>
  </nav>

  
</template>

<style lang="postcss" scoped> 
  nav{
    @apply pr-56 flex h-10 bg-red-900 text-white;

    .wrapper{
    @apply mx-auto flex;

    .business{
      &-title{
        @apply text-3xl font-bold pl-56;
    }
    
    }
  }
}
.menu{
      @apply mx-auto flex font-thin text-xl;
      &-vehicles{
        @apply px-4 pb-2 rounded-3xl hover:bg-red-400;
      }
      &-companies{
        @apply px-4 pb-2 rounded-3xl hover:bg-red-400;
      }
      &-settings{
        @apply px-4 pb-2 rounded-3xl hover:bg-red-400;
      }

      &-login{
        @apply px-4 pb-2 rounded-2xl hover:bg-green-600 bg-green-500;
      }

      &-logout {
        @apply px-3 pb-2 rounded-2xl hover:bg-red-400 bg-red-500;
      }
}

</style>
