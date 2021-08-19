import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // key 和 value 一样时可以只写一个
  router,
  render: h => h(App),
}).$mount('#app')
