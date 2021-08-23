<template>
    <div class="container">
        <el-container>
            <!-- <div class="el-aside-c"> -->
                <el-aside>
                    <!-- <div class="el-aside-c"> -->
                        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                            <el-radio-button :label="false">展开</el-radio-button>
                            <el-radio-button :label="true">收起</el-radio-button>
                            <i class="el-icon-s-unfold"></i>
                            <i class="el-icon-s-fold"></i>
                        </el-radio-group>
                        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">导航一</span>
                                </template>
                                <el-menu-item-group>
                                    <span slot="title">分组一</span>
                                    <el-menu-item index="1-1">选项1</el-menu-item>
                                    <el-menu-item index="1-2">选项2</el-menu-item>
                                </el-menu-item-group>
                                    <el-menu-item-group title="分组2">
                                    <el-menu-item index="1-3">选项3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="1-4">
                                    <span slot="title">选项4</span>
                                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>
                                <el-submenu index="1-4">
                                    <span slot="title">选项4</span>
                                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>
                                <el-submenu index="1-4">
                                    <span slot="title">选项4</span>
                                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>
                                <el-submenu index="1-4">
                                    <span slot="title">选项4</span>
                                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>
                                <el-submenu index="1-4">
                                    <span slot="title">选项4</span>
                                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>
                                <el-submenu index="1-4">
                                    <span slot="title">选项4</span>
                                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>

                            </el-submenu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">导航二</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                                <i class="el-icon-document"></i>
                                <span slot="title">导航三</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span slot="title">导航四</span>
                            </el-menu-item>
                        </el-menu>
                    <!-- </div> -->
                </el-aside>
            <!-- </div> -->
            <el-main>
                Main
                <i class="el-icon-s-unfold"></i>
                <i class="el-icon-s-fold"></i>
                <nav-footer></nav-footer>
            </el-main>
        </el-container>
    </div>
</template>
<style lang="scss">
.container{
    padding-top: 60px!important;
}
.el-aside,.el-main{
    height: calc(100vh - 60px)!important;
    overflow: auto!important;
}
.el-aside{
    width:auto!important;
}
.el-main{
    height:2000px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.el-icon-s-unfold{
    width:50px;
    height:50px;
    position: relative;
    z-index: 9999;
}
</style>
<script>
    import { Container } from 'element-ui'
    import NavFooter from './../components/NavFooter'
    export default{
        // 组件名称，加载组件时引用的值
        name:'index',
        components:{
            NavFooter 
        },
        data() {
            return {
                isCollapse: true
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        Container
    }
</script>
