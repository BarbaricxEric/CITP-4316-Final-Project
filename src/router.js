import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/vehicles', name: 'Vehicle', component: () => import('@/views/VehiclesPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
