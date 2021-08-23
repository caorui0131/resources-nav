// vuex入口
import Vue from 'vue'
import Vuex from 'vuex'
// 导入插件
import mutations from './mutations'
import actions from './action'
// 应用插件
Vue.use(Vuex);

// 管理状态
const state = {
  username:'',//登录用0
  cartCount:0//购物车商品数量
}
// 导出 
export default new Vuex.Store({
  state,
  mutations,
  actions
});