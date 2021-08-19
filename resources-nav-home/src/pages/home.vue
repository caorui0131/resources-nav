<template>
    <div>
        home
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    // resources-nav-home\src\pages\index.vue,product.vue,detail.vue最后会嵌套进router-view中
    import NavHeader from './../components/NavHeader'
    import NavFooter from './../components/NavFooter'
    export default{
        // 组件名称，加载组件时引用的值
        name:'nav-home',
        components:{
            NavHeader,
            NavFooter 
        }
    }
</script>