<template>
    <div>
        <!-- <nav-header></nav-header> -->
        <div class="container">
            <router-view></router-view>
            <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
        </div>
        <!-- <nav-footer></nav-footer> -->
    </div>
</template>
<style lang="scss" scoped>
// .el-header{
//     background-color: #ffffff;
// }
// .el-header{
//     // line-height: 61px;
//     height: 61px;
// }
.container{
    padding-top: 61px!important;
}
// .el-footer {
//     background-color: #B3C0D1;
//     color: #333;
//     text-align: center;
    
// }
// .el-aside {
//     background-color: #D3DCE6;
//     color: #333;
// }
// .el-container:nth-child(5) .el-aside,
// .el-container:nth-child(6) .el-aside {
//     line-height: 260px;
// }
// .el-container:nth-child(7) .el-aside {
//     line-height: 320px;
// }
// .el-main {
//     background-color: #E9EEF3;
//     color: #333;
// }
// body > .el-container {
//     margin-bottom: 40px;
// }
// .el-card__body{
    // padding: 10px 20px!important;
// }
</style>
<script>
    // resources-nav-home\src\pages\index.vue,product.vue,detail.vue最后会嵌套进router-view中
    import NavHeader from './../components/NavHeader'
    // import NavFooter from './../components/NavFooter'
    export default{
        // 组件名称，加载组件时引用的值
        name:'nav-home',
        components:{
            NavHeader,
            // NavFooter 
        }
    }
</script>