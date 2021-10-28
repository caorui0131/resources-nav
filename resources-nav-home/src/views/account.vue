<template>
    <el-container>
        <!-- 左侧树状导航 -->
        <!-- 右侧内容区 -->
        <!-- <el-aside></el-aside> -->
        <url-list></url-list>
    </el-container>
</template>
<style lang="scss" scoped>
</style>
<script>
    // import $ from 'jquery'
    import UrlList from './../components/UrlList'
    export default{
        // 组件名称，加载组件时引用的值
        // name:'index',
        components:{
            UrlList
        },
        // 定义局部的，防止篡改
        data() {
            // return只允许当前页面使用
            return {
                
            }
        },
        mounted(){
        },
        methods: {
        },
    }
</script>

 