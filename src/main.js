import Vue from 'vue'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss'
import App from './App'
import store from './store'
import router from './router'
import '@assets/font/iconfont.css'
import './icons'
import './permission'
import * as filters from './filters'
import { getModule } from '@utils/index'

Vue.use(ElementUI, {
  size: 'medium'
})

// 获取component文件夹下所有的组件
const components = getModule(require.context('./components', true, /\.vue$/))
// 循环导入app中
for (const key in components) {
  Vue.component(key, components[key])
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
