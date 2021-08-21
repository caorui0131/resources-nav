// * 插件和组件：引用时插件在上组件在下，没有./会被认为是插件，去npm里面找
// 插件
import Vue from 'vue'
import router from './router'
import axios from 'axios'
// * vue-axios
//   * 把axios的作用域对象挂载到vue实例上，方便用this调用
import VueAxios from 'vue-axios'
// 组件
import App from './App.vue'
import env from './env'

/**
 * 在发请求值时设置基础值,根据前端的跨域方式做调整(当前为接口代理) ,前端转发时可以切掉/api 
 * /a/b:/api/a/b=>/a/b
 */
axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;
// 根据环境变量获取不同的请求地址
axios.defaults.baseURL=env.baseURL
// 【重要】拦截。interceptors是拦截器
// 对rps进行错误拦截
axios.interceptors.response.use(function(response){
  let res=response.data;
  if(res.status==0) {
    return res.data;
  }else if(res.statis==10){
  /**  
   * main.js用路由跳转没有用,因为路由是挂在vue实例里的，
   * 在页面里（app.vue或其他.vue里才可以用路由this.$route.push）
   * main.js里面的this没有指向Vue
   * 哈希路由：带#的是哈希路由
  */
    window.location.href='/#/login';
  }else{
    alert(res.msg)
  }
});
// * vue.use：注册。加载插件，类似nodejs的app.use，可以应用一个中间件。
// 把axios挂载到VueAxios上
Vue.use(VueAxios,axios)

// 生产环境关闭 提示，开启则vue底层的console、info会打印 
Vue.config.productionTip = false

new Vue({
  // key 和 value 一样时可以只写一个
  router,
  render: h => h(App),
}).$mount('#app')
