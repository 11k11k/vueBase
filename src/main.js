import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

// 其他导入和配置...
Vue.prototype.$http = axios;

// 其他 Vue 实例配置...


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
