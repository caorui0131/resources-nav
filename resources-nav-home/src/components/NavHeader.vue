<template>
    <div class="header">
        <el-header>
            <div class="header-left">
                <p class="header-left-title" @click="goToOrigin()">资源导航</p>
            </div>
            <div class="header-center">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">主页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">资源</template>
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
                    <el-menu-item index="3">排行</el-menu-item>
                    <el-menu-item index="4">个人</el-menu-item>
                    <!-- <el-menu-item index="7" disabled>消息中心</el-menu-item>
                    <el-menu-item index="8"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
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
            </div>
            <div class="header-right">
                <el-button type="primary" class="header-item" @click="goToAddResource()">推荐</el-button>
                <div class="block header-item" ><el-avatar :size="large" :src="circleUrl"></el-avatar></div>
            </div>
        </el-header>
        

    </div>
</template>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
//   // 调用mixin.scss中的函数
//   @include flex();
.header{
    position: fixed;
    top: 0;
    padding: 0px;
    width: 100%;
    z-index: 100;
    right: 0px;
}
.header-left{
    font-size:$fontI;
    display: flex;
    min-width: 184px;
}
.header-left-title{
    cursor: pointer;
}
.el-header,.header{
    height: 61px !important;
}
.el-header{
    display: flex;
    padding: 0 0px!important;
    border-bottom: solid 1px #e6e6e6;
    padding:0px 16px!important;
}
.el-menu.el-menu--horizontal{
    border-bottom:none!important;
}
.header-left,.header-center,.header-right{
    display: flex;
    align-items: center;
}
.header-right{
    justify-content:flex-end;
    flex-grow: 1;
}
.header-item{
    margin-left:12px
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
                activeIndex: '1',
                activeIndex2: '1',
                username: 'jack',
                phoneList:[],
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
                sizeList: ["large", "medium", "small"]
            }
        },
        // 类似于ready，初始化需要调用的方法
        mounted(){
        },
        methods: {
            goToOrigin(){
                window.location.href='/';
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
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
            goToAddResource(){
                this.$router.push('/addResource');
            }
        }
    }
</script>