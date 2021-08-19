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
  name: 'App',
  components: {
    
  },
  data(){
    return{
    }
  },
  mounted(){

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
