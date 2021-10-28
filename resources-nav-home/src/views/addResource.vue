<template>
    <el-container>
        <!-- 左侧树状导航 -->
        <!-- 右侧内容区 -->
        <el-main>
            <!-- PageHeader 页头 -->
            <el-page-header @back="goBack" content="推荐资源"></el-page-header>
            <el-row>
                <el-col  :span="24">
                    <el-card class="box-card" shadow="never">
                        <url-form getType='addUrl'></url-form>
                    </el-card>
                </el-col>
            </el-row>
            <nav-footer getType='add'></nav-footer>
        </el-main>
    </el-container>
</template>
<style lang="scss" scoped>
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
// 卡片-结束
</style>
<script>
    import NavFooter from './../components/NavFooter'
    import UrlForm from './../components/UrlForm'
    // import $ from 'jquery'
    export default{
        // 组件名称，加载组件时引用的值
        name:'index',
        components:{
            NavFooter,
            UrlForm
        },
        // 定义局部的，防止篡改
        data() {
            // return只允许当前页面使用
            return {   
                
            }
        },
        mounted(){
            this.selectUrl(1);
        },
        methods: {
        },
    }
</script>

 