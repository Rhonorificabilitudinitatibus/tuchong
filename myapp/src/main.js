// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/js/bootstrap.min.js'
import 'bootstrap/css/bootstrap.min.css'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
//4、挂载router到根组件
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
