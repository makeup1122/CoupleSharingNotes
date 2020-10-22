import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/Default.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', alias: '', name: 'Home', component: () => import('@/views/Home.vue') },
      { path: 'audio', alias: '', name: 'Audio', component: () => import('@/views/Audio.vue') },
      { path: 'money/gift', alias: '', name: 'MoneyGift', component: () => import('@/views/MoneyGift.vue') }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
