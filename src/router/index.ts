import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// 路由表
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/*
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 建議加上 BASE_URL
  routes
})
*/

export default router