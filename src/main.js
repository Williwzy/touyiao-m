import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// 加载vant全局样式
import 'vant/lib/index.css'

import './styles/index.less'
Vue.config.productionTip = false
// 注册使用vant组件
Vue.use(Vant)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
