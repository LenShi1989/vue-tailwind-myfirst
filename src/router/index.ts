import { createRouter, createWebHistory} from 'vue-router'

// 路由表

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
  ]
})

/*
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 建議加上 BASE_URL
  routes
})
*/

export default router