<template>
    <div class="header">
        <el-header>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
            <div class="line"></div>
            <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            </el-menu>
        </el-header>
    </div>
</template>
<style lang="scss">
.header{
    position: fixed;
    top: 0;
    padding: 0px;
    width: 100%;
    z-index: 100;
    right: 0px;
    height: 61px !important;
}
.el-menu.el-menu--horizontal{
    border-bottom:none!important;
}
    
</style>
<script>
    import { Message } from 'element-ui'
    export default{
        // 组件名称，加载组件时引用的值
        name:'nav-header',
        // 交互开始
        // data不要定义成全局的data，防止数据的窜用
        data(){
            return{
                username: 'jack',
                phoneList:[],
            }
        },
        // 类似于ready，初始化需要调用的方法
        mounted(){
            this.getProductList();
        },
        methods: {
            getProductList(){
                this.axios.get('/products',{
                params:{
                    categoryId:'100012',
                    pageSize:6
                }
                }).then((res)=>{
                    this.phoneList = res.list;
                })
            },
            greet() {
                // alert(5)
                Message.warning('5555555')
            },
            goToCart(){
                /**
                 * 路由跳转（a跳b）：this.$router.push
                 * 路由跳转过来后 取路由的 参数：$router.params ， $router.query
                 */
                // this.$router.push('/cart');
            },
                
        }
    }
</script>
<style lang="scss">
  @import './../assets/scss/base.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/config.scss';
//   // 调用mixin.scss中的函数
//   @include flex();
</style>