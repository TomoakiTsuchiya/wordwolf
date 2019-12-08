import Vue from 'vue'
import App from './App.vue'
import vueAwesomeCountdown from 'vue-awesome-countdown'

Vue.use(vueAwesomeCountdown, 'vac')
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
