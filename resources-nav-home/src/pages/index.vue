<template>
    <div class="container">
        <el-container>
            <!-- <div class="el-aside-c"> -->
                <el-aside>
                    <!-- <div class="el-aside-c"> -->
                        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" @select="select">
                            <el-submenu v-for="(item) in selectUrlclassTree" :index="item.urlclassId" :key="item.urlclassId">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">{{item.name}}{{item.urlclassId}}</span>
                                </template>
                                <template v-if="item.chindren&&item.chindren[0].chindren">
                                    <el-submenu :index="item.chindren[0].urlclassId">
                                        <!-- <el-menu-item-group  v-for="(iitem) in item.chindren" :key="item.urlclassId">
                                            <el-menu-item index="1-1">{{iitem.name}}</el-menu-item>
                                        </el-menu-item-group> -->
                                        <span slot="title" v-for="(iitem) in item.chindren" :key="iitem.urlclassId">{{iitem.name}}{{iitem.urlclassId}}</span>
                                        <template v-if="item.chindren[0].chindren">
                                            <el-menu-item v-for="(iiitem) in item.chindren[0].chindren" :index="iiitem.urlclassId" :key="iiitem.urlclassId">{{iiitem.name}}{{iiitem.urlclassId}}</el-menu-item>
                                        </template>
                                    </el-submenu>
                                </template>
                                <template v-else>
                                    <el-menu-item v-for="(iitem) in item.chindren"  :index="iitem.urlclassId" :key="iitem.urlclassId">{{iitem.name}}{{iitem.urlclassId}}</el-menu-item>
                                </template>
                            </el-submenu>
                            <!-- <el-submenu index="1">
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
                            </el-menu-item> -->
                        </el-menu>
                        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                            <!-- <el-radio-button :label="false">展开</el-radio-button>
                            <el-radio-button :label="true">收起</el-radio-button> -->
                            <el-radio-button :label="false" v-show="isCollapse"><i class="el-icon-s-unfold"></i></el-radio-button>
                            <el-radio-button :label="true" v-show="!isCollapse"><i class="el-icon-s-fold"></i></el-radio-button>
                        </el-radio-group>
                    <!-- </div> -->
                </el-aside>
            <!-- </div> -->
            <el-main>
                Main{{selectUrlclassTree}}
                <nav-footer></nav-footer>
            </el-main>
        </el-container>
    </div>
</template>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.container{
    padding-top: 61px!important;
}
.el-aside,.el-main{
    height: calc(100vh - 61px)!important;
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
.el-radio-group  .el-radio-button{
    width:100%!important;
}
.el-radio-group  .el-radio-button__inner{
    // width: 18px!important;
    // height: 18px!important;
    width:100%!important;
    font-size: 18px!important;
    vertical-align: middle!important;
    // &:hover{
    //     // color: $colorA!important;
    //     color:#409eff!important;
    //     transition: all 0.2s;
    // }
}
.el-radio-group  .el-radio-button__inner i{
    float: left;
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
    overflow: hidden;
    margin-bottom: 0px!important;
    background-color: #fff!important;
    border-right: solid 1px #e6e6e6!important;
    border-top: solid 1px #e6e6e6!important;
    box-sizing: border-box!important;
    &:hover .el-radio-button__inner{
        // color: $colorA!important;
        color:$colorA !important;
        cursor: pointer;
    }
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
        // 定义局部的，防止篡改
        data() {
            // return只允许当前页面使用
            return {
                isCollapse: false,
                selectUrlclassTree:[],
            };
        },
        computed:{

        },
        // 相当于ready，初始化调用的方法，要调用methods中定义的方法
        mounted(){
            this.getSelectUrlclassTree()
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
                // $('el-radio-button :label="false"').hide();
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            select(){
            },
            getSelectUrlclassTree(){
                // this.axios.post('/logout',{
                // }).then((res)=>{
                //     this.aa=res.data.successText;
                //     console.log(res.data)
                // })
                this.axios.get('/leftSubmenuList',{
                }).then((res)=>{
                    this.selectUrlclassTree=res.data.chindren;
                    console.log(res.data.chindren)
                })
            }
        },
        Container,
    }
</script>
