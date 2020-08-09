import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import ElementUI from 'element-ui';
import { Message , alert } from 'element-ui';
import { http } from '../http/request'
import store from '../store/'
// import '../mock/index'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/global.less'
import '@/assets/css/icon.css'


Vue.use(ElementUI);//也可以单独引用各个组件

Vue.prototype.$message = Message
Vue.prototype.axios = http

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
