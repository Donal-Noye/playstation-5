import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue'),
    meta: {
      layout: 'sign-in'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
