import { createRouter, createWebHashHistory } from 'vue-router'

const home = () => import('../pages/home/index.vue')

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: home
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
