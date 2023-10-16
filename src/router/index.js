import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/Dashboard.vue'
import AppLayout from '@/layout/AppLayout.vue'

import CategoryList from '@/view/category/CategoryList.vue'

import DressList from '@/view/dress/DressList.vue'

import ThemeList from '@/view/theme/ThemeList.vue'

import AppointmentList from '@/view/appointment/AppointmentList.vue'

import PackageList from '@/view/package/PackageList.vue'

import CollectionList from '@/view/collection/CollectionList.vue'

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

        // category
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

        // dress
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
        },

        // theme
        {
          path: 'theme',
          name: 'theme',
          children: [
            {
              path: 'list',
              name: 'theme.list',
              component: ThemeList
            }
          ]
        },

        // appointment
        {
          path: 'appointment',
          name: 'appointment',
          children: [
            {
              path: 'list',
              name: 'appointment.list',
              component: AppointmentList
            }
          ]
        },

        // package
        {
          path: 'package',
          name: 'package',
          children: [
            {
              path: 'list',
              name: 'package.list',
              component: PackageList
            }
          ]
        },

        // collection
        {
          path: 'collection',
          name: 'collection',
          children: [
            {
              path: 'list',
              name: 'collection.list',
              component: CollectionList
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
