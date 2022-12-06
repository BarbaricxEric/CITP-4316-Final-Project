import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/views/MainPage.vue'
import VehiclesPage from '@/views/VehiclesPage.vue'
import CompaniesPage from '@/views/CompaniesPage.vue'
import SettingsPage from '@/views/SettingsPage.vue'
import LoginPage from '@/views/LoginPage.vue'

const routes = [
  { path: '/', name: 'Home', component: MainPage },
  { path: '/vehicles', name: 'Vehicle', component: VehiclesPage },
  { path: '/companies', name: 'Companies', component: CompaniesPage },
  { path: '/settings', name: 'Settings', component: SettingsPage },
  { path: '/login', name: 'LoginPage', component: LoginPage},
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
