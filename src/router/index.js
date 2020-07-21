import Vue from 'vue'
import VueRouter from 'vue-router'

import Goods from "@/views/Goods.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/goods',
    component: Goods

  },
  {
    path: '/evaluate',
    component: () => import('@/views/Evaluate.vue')

  },
  {
    path: '/shop',
    component: () => import('@/views/Shop.vue')

  },
]

const router = new VueRouter({
  routes
})

export default router
