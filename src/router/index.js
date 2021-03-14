import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import home from '@/pages/home'
import time from '@/pages/time'
import hobby from '@/pages/hobby'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/time',
      name: 'time',
      component: time
    },
    {
      path: '/hobby',
      name: 'hobby',
      component: hobby
    }
  ]
})
