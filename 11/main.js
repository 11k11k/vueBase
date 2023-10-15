import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Vue.directive("focus", {
//   inserted(el) {
//     el.focus()
//   }
// }

// )
Vue.directive("blue",{
  inserted(el){
    el.style.color="blue"
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
