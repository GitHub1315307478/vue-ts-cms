import { createRouter, createWebHistory } from 'vue-router'
import routers from './routers'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...routers]
})

export default router
