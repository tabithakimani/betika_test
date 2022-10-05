import { createRouter, createWebHashHistory } from 'vue-router'
import Account from '../views/account'
import About from '../views/About'
import Home from '../views/home'

const routes = [
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/account',
    name: 'account',
    component:  Account
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
