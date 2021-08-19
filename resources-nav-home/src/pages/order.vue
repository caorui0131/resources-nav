<template>
    <div>
        order
        <order-header></order-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    // resources-nav-home\src\pages\index.vue,product.vue,detail.vue最后会嵌套进router-view中
    import OrderHeader from "./../components/OrderHeader"
    export default{
        // 组件名称，加载组件时引用的值
        name:'order',
        components:{
            OrderHeader
        }
        
    }
</script>