import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
Vue.use(Vuex)

// TODO:
const getters = {
  // 获取user仓库里的state里面的userInfo数组的数据token
  // TODO:userInfo数据是有页面数据存储到本地缓存localStorage，并且有默认数据"""
  token (state) {
    return state.user.userInfo.token
  }
}
export default new Vuex.Store({
  state: {
  },
  getters,
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  }
})
