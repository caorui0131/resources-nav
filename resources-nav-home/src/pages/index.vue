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
            <el-main>
                <!-- PageHeader 页头 -->
                <el-page-header @back="goBack" content="所有资源"></el-page-header>
                <!-- 卡片内容 -->
                <el-row :gutter="20">
                    <template v-if="urlList.length > 0">
                        <el-col :span="6" v-for="item in urlList" :key="item.urlclassId">
                            <!-- 卡片；@click.native 的作用：给组件绑定原生事件 -->
                            <el-card class="box-card url-box-card"  @click.native="openUrl(item.url)" shadow="hover" >
                                <div slot="header" class="clearfix">
                                    <span>{{item.name}}</span>
                                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                                </div>
                                <div class="text item">
                                    {{item.content}}
                                </div>
                                <!-- <div v-for="o in 4" :key="o" class="text item">
                                    {{'列表内容 ' + o }}
                                </div> -->
                            </el-card>
                        </el-col>
                    </template>
                </el-row>
                <nav-footer></nav-footer>
            </el-main>
        </el-container>
    <!-- </div> -->
</template>
<style lang="scss">
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
// 卡片-开始
.el-card{
    display: inline-block !important;
    width: 100%;
}
.url-box-card{
    cursor: pointer;
}
.text {
    font-size: 14px;
}
.item {
    margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
.box-card {
    // width: 400px;
}
// .el-card__header {
//     padding: 10px 20px!important;
// }
// 卡片-结束
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
                urlList:[],
            };
        },
        // computed:{
        //     urlList
        // },
        // 相当于ready，初始化调用的方法，要调用methods中定义的方法
        mounted(){
            this.getSelectUrlclassTree()
            this.urlAllList()
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
            urlAllList(){
                this.axios.get(`/urlAllList`,{
                }).then((res)=>{
                    this.urlList=res.data;
                    console.log(res.data)
                })
            },
            getUrlList(item){
                console.log(`/urlList/${item.urlclassId}`)
                this.axios.get(`/urlList/${item.urlclassId}`,{
                    // params:{
                    //     urlclassId:'2',
                    // }
                }).then((res)=>{
                    this.urlList=res.data;
                    console.log(res.data)
                })
            },
            openUrl(url){
                // window.location.href=url;
                window.open(url, '_blank').location;
            },
            goBack() {
                console.log('go back');
            }
        },
        Container,
    }
</script>
