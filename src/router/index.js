import layoutsVue from '@/views/dashboard/layouts.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layoutsVue',
      component: layoutsVue,
      children : [
        {
          path : 'users',
          name : 'Users',
          component : ()=> import('@/views/dashboard/pages/Users.vue')
        },
      ]
    },
    
  ]
})

export default router
