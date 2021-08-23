<template>
    <div class="container">
        <el-container>
            <!-- <div class="el-aside-c"> -->
                <el-aside>
                    <!-- <div class="el-aside-c"> -->
                        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
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
                        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                            <!-- <el-radio-button :label="false">展开</el-radio-button>
                            <el-radio-button :label="true">收起</el-radio-button> -->
                            <el-radio-button :label="false"><i class="el-icon-s-unfold"></i></el-radio-button>
                            <el-radio-button :label="true"><i class="el-icon-s-fold"></i></el-radio-button>
                        </el-radio-group>
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
// @import './assets/scss/reset.scss';
// @import './assets/scss/config.scss';
.container{
    padding-top: 60px!important;
}
.el-aside,.el-main{
    height: calc(100vh - 60px)!important;
    overflow: hidden auto!important;
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
.el-radio-group .el-radio-button__inner{
    border:none!important;
    background:none!important;
    color: #606266!important;
    box-shadow:none!important;
}
.el-icon-s-unfold,.el-icon-s-fold{
    width: 18px!important;
    height: 18px!important;
    &:hover{
        // color: $colorA!important;
        color:#409eff!important;
        transition: all 0.2s;
    }
}

.el-aside{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
}
.el-menu-vertical-demo{
    flex: 1 1 0%;
    overflow: hidden auto;
}
.el-radio-group{
    display: flex;
    flex-direction: column;
    width: 100%;
    // height:40px;
    overflow: hidden;
    // box-sizing: border-box;
}
.el-radio-group .el-radio-button{
    height:40px;
}
// .el-icon-s-unfold{
//     width:50px;
//     height:50px;
//     position: relative;
//     z-index: 9999;
// }
</style>
<script>
    import { Container } from 'element-ui'
    import NavFooter from './../components/NavFooter'
    // import $ from 'jquery'
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
                alert(0)
                // $('el-radio-button :label="false"').hide();
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        },
        Container,
    }
</script>
