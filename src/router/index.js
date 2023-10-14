import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/Dashboard.vue'
import AppLayout from '@/layout/AppLayout.vue'

import CategoryList from '@/view/category/CategoryList.vue'

import DressList from '@/view/dress/DressList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AppLayout',
      component: AppLayout,

      children: [
        {
          path: '',
          name: 'home',
          component: Dashboard
        },
        {
          path: 'category',
          name: 'category',
          children: [
            {
              path: 'list',
              name: 'category.list',
              component: CategoryList
            }
          ]
        },
        {
          path: 'dress',
          name: 'dress',
          children: [
            {
              path: 'list',
              name: 'dress.list',
              component: DressList
            }
          ]
        }
      ]
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

export default router
