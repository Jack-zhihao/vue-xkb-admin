/*
 * @Author: zhihao
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-07-06 14:38:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import components from '@/utils/components.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/utils/permission.js'

import 'default-passive-events'

import './Mock'

// 全局覆盖样式
import './styles/index.scss'

const fundebug = require('fundebug-javascript')

fundebug.apikey = '3fd4cda414e40094ec9904223b151a996cce9311bd74cf1819e1141742becbba'

Vue.use(components)

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
