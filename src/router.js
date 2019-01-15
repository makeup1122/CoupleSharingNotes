import Vue from 'vue'
import Router from 'vue-router'
// import Layout from './views/Layout.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
      // children: [
      //   {
      //     path: '',
      //     component: function () {
      //       return import('./views/Home.vue')
      //     }
      //   }
      // ]
    },
    {
      path: '/baby',
      name: 'Baby',
      component: () => import('./views/Baby.vue')
    },
    {
      path: '/car',
      name: 'Car',
      component: () => import('./views/Car.vue')
    },
    {
      path: '/giftmoney',
      name: 'GiftMoney',
      component: () => import('./views/GiftMoney.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Auth/Login.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('./views/Auth/Profile.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('./views/Auth/Register.vue')
    }
  ]
})
