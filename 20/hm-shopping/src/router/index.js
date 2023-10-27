import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout/index.vue'
import Myorder from '@/views/myorder'
import Prodetail from '@/views/prodetail'
import Search from '@/views/search'
import Pay from '@/views/pay'
import Cart from '@/views/layout/cart.vue'
import Category from '@/views/layout/category.vue'
import Home from '@/views/layout/home.vue'
import User from '@/views/layout/user.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/cart', component: Cart },
        { path: '/category', component: Category },
        { path: '/home', component: Home },
        { path: '/user', component: User }
      ]
    },
    {
      path: '/myorder', component: Myorder
    },
    {
      path: '/pay', component: Pay
    },
    {
      path: '/prodetail/:id', component: Prodetail
    },
    {
      path: '/search', component: Search
    }
  ]
})

export default router
