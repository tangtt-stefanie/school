/*
 * @Author: MR.T
 * @Date: 2020-08-06 17:33:39
 * @LastEditors: MR.T
 * @LastEditTime: 2020-09-08 13:42:42
 * @Description: No Description
 * @FilePath: \article-manage\src\main.js
 */
import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import ElementUI from 'element-ui';
import { Message , alert } from 'element-ui';
import { http } from '../http/request'
import store from '../store/'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/global.less'
import '@/assets/css/normalize.css'
import '@/assets/css/icon.css'
// import '../mock/index.js'
import '../mock'


// var axios = require('axios');
// var MockAdapter = require('axios-mock-adapter');
 
// // 这将模拟适配器设置为默认实例
// var mock = new MockAdapter(axios);
 
// // 将任何GET请求模拟到 /users
// // 用于回复的参数是（status，data，headers）
// mock.onPost('/plan/listProjectPlan').reply(200, {
//   users: [
//     { id: 1, name: 'John Smith' }
//   ]
// });

// console.log(11)






Vue.use(ElementUI);//也可以按需导入各个组件

Vue.prototype.$message = Message
Vue.prototype.axios = http

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
