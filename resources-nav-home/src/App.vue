<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// router-view 是视图，app里面的web view，可以加载所有的子页面（所有页面都必须经过他），放在这可以嵌套其他的组件
// import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'
// import jsonp from 'jsonp'

export default {
  name: 'app',
  components: {
    
  },
  data(){
    // return{
    // }
  },
  mounted(){
    // // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res=res;
    // })
    // // 通过easy-mock平台实现数据mock  https://easy-mock.com/login
    // this.axios.get('/user/login').then((res)=>{
    //   this.res=res;
    // })
    // // 本地集成mockjs实现数据mock  https://github.com/nuysoft/Mock/wiki/Getting-Started
    // this.axios.get('/user/login').then((res)=>{
    //   this.res=res;
    // })
  }
}
</script>


<style lang="scss">
/* @import 导入css,和js导入不一样不需要from，from 把一个js对象/变量 变成一个对象*/
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
</style>
