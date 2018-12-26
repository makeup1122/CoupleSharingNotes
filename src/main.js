import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
var AV = require('leancloud-storage')
// LeanCloud: 初始化参数
const APP_ID = 'tU2XUpPz73WI89BXW7dMTiSo-gzGzoHsz'
const APP_KEY = '0cs07tm0jIzkDfPX0hRNjG57'
// LeanCloud: JS SDK初始化
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})
Vue.prototype.$_AV = AV
// Vue.prototype.$_AVQuery = AV.Query
Vue.config.productionTip = false
Vue.use(Vuetify)
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
