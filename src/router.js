import Vue from 'vue'
import Router from 'vue-router'
import AV from './plugins/leanCloud'

Vue.use(Router)
const whiteList = ['/login', '/register'] // no redirect whitelist
const routerInstance = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('./views/Home.vue')
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
routerInstance.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    var curentUser = AV.User.current()
    if (curentUser) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
  next()
  // curentUser.isAuthenticated().then(function(authenticated) {
  //   console.log(authenticated)
  // })
})
export default routerInstance
