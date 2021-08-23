<template>
  <!-- 单页面：只有一个入口的页面；单页面只有首页会被seo收录 -->
  <!-- 多页面：；每一个页面都是一个单独的.html；一般用于搜索引擎，方便后端渲染 -->
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
</style>

<script>
// router-view 是视图，app里面的web view，可以加载所有的子页面（所有页面都必须经过他），放在这可以嵌套其他的组件
// import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'
// import jsonp from 'jsonp'

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
    }
  },
  mounted(){
    // 本地加载请求静态json文件的形式
    this.axios.get('/mock/user/login.json').then((res)=>{
      this.res=res;
    })
    // 通过easy-mock平台实现数据mock  https://easy-mock.com/login
    this.axios.get('/user/login').then((res)=>{
      this.res=res;
    })
    // 本地集成mockjs实现数据mock  https://github.com/nuysoft/Mock/wiki/Getting-Started
    this.axios.get('/user/login').then((res)=>{
      this.res=res;
    })
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
</style>
