<templates>
    <div>
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</templates>
<script>
    // resources-nav-home\src\pages\index.vue,product.vue,detail.vue最后会嵌套进router-view中
    export default{
        // 组件名称，加载组件时引用的值
        name:'nav-header'，
    }
</script>