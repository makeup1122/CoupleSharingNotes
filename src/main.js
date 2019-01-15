import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 加载插件
import './plugins'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
