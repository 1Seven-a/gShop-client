import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// //局部关闭
// /* eslint-disable */
new Vue({
  render: h => h(App),
}).$mount('#app')
