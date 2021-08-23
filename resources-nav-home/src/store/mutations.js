/**
 * 商城Vuex-mutations
 */
// 导出一个对象
// 3.vuex-读取
export default {
  saveUserName(state, username) {
    state.username = username;
  },
  saveCartCount(state, count) {
    state.cartCount = count;
  }
}