<template>
    <!-- <div class="container"> -->
        <el-container>
            <!-- 左侧树状导航 -->
            <el-aside>
                <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" @select="select">
                    <div v-for="(item) in selectUrlclassTree" :key="item.urlclassId">
                        <!-- 有子的一级导航 -->
                        <template v-if="item&&item.chindren">
                            <el-submenu  :index="item.urlclassId">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">{{item.name}}{{item.urlclassId}}</span>
                            </template>
                            <!-- 有子的二级导航 -->
                            <template v-if="item.chindren&&item.chindren[0].chindren">
                                <el-submenu :index="item.chindren[0].urlclassId">
                                    <!-- <el-menu-item-group  v-for="(iitem) in item.chindren" :key="item.urlclassId">
                                        <el-menu-item index="1-1">{{iitem.name}}</el-menu-item>
                                    </el-menu-item-group> -->
                                    <span slot="title" v-for="(iitem) in item.chindren" :key="iitem.urlclassId">{{iitem.name}}{{iitem.urlclassId}}</span>
                                    <!--三级导航 -->
                                    <template v-if="item.chindren[0].chindren">
                                        <el-menu-item v-for="(iiitem) in item.chindren[0].chindren" :index="iiitem.urlclassId" :key="iiitem"  @click="getUrlList(iiitem)">{{iiitem.name}}{{iiitem.urlclassId}}</el-menu-item>
                                    </template>
                                </el-submenu>
                            </template>
                            <!-- 无子的二级导航 -->
                            <template v-else>
                                <el-menu-item v-for="(iitem) in item.chindren"  :index="iitem.urlclassId" :key="iitem.urlclassId"  @click="getUrlList(iitem)">{{iitem.name}}{{iitem.urlclassId}}</el-menu-item>
                            </template>
                        </el-submenu>
                        </template>
                        <!-- 无子的一级导航 -->
                        <template v-else>
                            <el-menu-item :index="item.urlclassId" @click="getUrlList(item)">
                                <i class="el-icon-menu"></i>
                                <span slot="title">{{item.name}}</span>
                            </el-menu-item>
                        </template>
                    </div>
                </el-menu>
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <!-- <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button> -->
                    <el-radio-button :label="false" v-show="isCollapse"><i class="el-icon-s-unfold"></i></el-radio-button>
                    <el-radio-button :label="true" v-show="!isCollapse"><i class="el-icon-s-fold"></i></el-radio-button>
                </el-radio-group>
            </el-aside>
            <!-- 右侧内容区 -->
            <url-list></url-list>
        </el-container>
    <!-- </div> -->
</template>
<style lang="scss" >
// <style lang="scss" scoped>
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
// 左导航-开始
.el-aside,.el-main{
    height: calc(100vh - 61px)!important;
    overflow: hidden auto!important;
}
.el-aside{
    width:auto!important;
}
.el-aside {
    background-color: #D3DCE6;
    color: #333;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
    line-height: 320px;
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
// 左导航-结束
// 布局开始
.el-row {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-page-header{
    margin-bottom:20px ;
    font-weight: bold!important;
  }
  .el-page-header__left{
    display: none ;
  }
// 布局结束
</style>
<script>
    import { Container } from 'element-ui'
    import UrlList from './../components/UrlList'
    // import NavFooter from './../components/NavFooter'
    // import $ from 'jquery'
    export default{
        // 组件名称，加载组件时引用的值
        name:'index',
        components:{
            // NavFooter 
            UrlList
        },
        // 定义局部的，防止篡改
        data() {
            // return只允许当前页面使用
            return {
                isCollapse: false,
                selectUrlclassTree:[],
            };
        },
        // computed:{
        //     urlList
        // },
        // 相当于ready，初始化调用的方法，要调用methods中定义的方法
        mounted(){
            this.getSelectUrlclassTree()
            // this.getUrlList({urlclassId:8})
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
            },
        },
        Container,
    }
</script>
