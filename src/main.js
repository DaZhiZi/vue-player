import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/reset.css'
import './assets/stylus/base.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
