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
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test.vue'),
      children: [
        {
          path: 'rwd',
          name: 'rwd',
          component: () => import('../views/RWD.vue'),
        },
        {
          path: 'button',
          name: 'button',
          component: () => import('../views/Button.vue'),
        },
        {
          path: 'grid',
          name: 'grid',
          component: () => import('../views/Grid.vue'),
        },
      ],
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