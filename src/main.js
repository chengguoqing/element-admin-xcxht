import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'
import '@/assets/css/base.css'
import '@/assets/css/style.css'
import public_c from './public_c.js'
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import api from './api/install'
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
Vue.use(public_c)
Vue.use(api)
import * as filters from './filters' // global filters


Vue.prototype.hf = function (url, cu) { // 路由跳转
    router.push({ path: '/' + url, query: cu })
}


/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
