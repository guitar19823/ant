import Vue from 'vue'
import Router from 'vue-router'
import Clothes from '@/views/Clothes'
import Shoes from '@/views/Shoes'
import Foods from '@/views/Foods'
import Conserves from '@/views/Conserves'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/clothes',
      component: Clothes
    },
    {
      path: '/shoes',
      component: Shoes
    },
    {
      path: '/foods',
      component: Foods
    },
    {
      path: '/conserves',
      component: Conserves
    }
  ]
})