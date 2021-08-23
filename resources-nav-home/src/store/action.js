/**
 * 商城Vuex-actions
 */
// 2.vuex-传输
export default {
  saveUserName(context,username){
    context.commit('saveUserName', username);
    // commit之后会调用mutations.js中的同名方法 'saveUserName'
  },
  saveCartCount(context, count) {
    context.commit('saveCartCount', count);
  }
}