// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'
import AV from 'leancloud-storage'

// LeanCloud
var APP_ID = 'BzVuUYN3PncYr1M9s3OjdU9V-gzGzoHsz'
var APP_KEY = 'CljMGSwyXKYfplnH1gIwxQiB'

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})



import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
