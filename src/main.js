import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import TypeNav from "@/components/TypeNav";
import Pagination from "@/components/Pagination/index"
import "./plugins/swiper.js"
import "./mock/mockServe"
Vue.config.productionTip = false

// //局部关闭
// /* eslint-disable */

//注册全局组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)

//创建或指定事件总线对象，保存在vue的原型上
// Vue.prototype.$bus = new Vue()

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  store,//注册vuex  所以组件都可访问$store
  router,//注册路由器 ==> 所有组件都可以访问 $router 和 $route
}).$mount('#app')
