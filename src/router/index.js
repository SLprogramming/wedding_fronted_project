import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AppLayout',
      component: AppLayout
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

export default router
