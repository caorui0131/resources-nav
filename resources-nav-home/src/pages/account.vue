<template>
    <el-container>
        <!-- 左侧树状导航 -->
        <!-- 右侧内容区 -->
        <el-main>
            <!-- PageHeader 页头 -->
            <el-page-header @back="goBack" content="管理资源"></el-page-header>
            <el-row>
                <el-col  :span="24">
                    <!-- 卡片内容 -->
                    <el-row :gutter="20">
                        <template v-if="urlList.length > 0">
                            <el-col :span="6" v-for="item in urlList" :key="item.urlclassId">
                                <!-- 卡片；@click.native 的作用：给组件绑定原生事件 -->
                                  <!-- @click.native="openUrl(item.url)" -->
                                <el-card class="box-card url-box-card" shadow="hover">
                                    <div slot="header" class="clearfix" @click="openUrl(item.url)" >
                                        <div class="text item">
                                        <span>{{item.name}}</span>
                                        </div>
                                        {{item.content}}
                                        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                                    </div>
                                    <div class="text item">
                                        <!-- {{item.content}} -->
                                        <el-button-group>
                                            <el-button icon="el-icon-delete" @click="deleteUrl(item.urlId)"></el-button>
                                            <!-- <el-button icon="el-icon-edit" @click="updateUrl(item)"></el-button> -->
                                            <el-button icon="el-icon-edit" @click="dialogFormVisible = true"></el-button>
                                        </el-button-group>
                                    </div>
                                </el-card>
                            </el-col>
                        </template>
                    </el-row>
                    <!-- edit对话框 -->
                    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                        <el-form :model="form">
                            <el-form-item label="活动名称" :label-width="formLabelWidth">
                            <el-input v-model="form.name" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="活动区域" :label-width="formLabelWidth">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                        </div>
                    </el-dialog>
                </el-col>
            </el-row>
            <nav-footer></nav-footer>
        </el-main>
    </el-container>
</template>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
// 卡片-结束
.el-card__body .item{
    margin-bottom: 0px !important;
}
.el-card__body{
    padding: 0px!important;
}
.el-button-group{
    width: 100% !important;
    display: flex;
    background-color: #DCDFE6;
}
.el-button-group .el-button{
    flex-grow: 1;
    border: none;
    // border-right: 1px solid #DCDFE6!important;
}
.el-button-group>.el-button:not(:last-child) {
    margin-right: 1px!important;
}
</style>
<script>
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
                urlList:[],
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
                },
                formLabelWidth: '120px'
            }
        },
        mounted(){
            this.urlAllList()
        },
        methods: {
            urlAllList(){
                this.axios.get(`/urlAllList`,{
                }).then((res)=>{
                    this.urlList=res.data;
                    console.log(res.data)
                })
            },
            openUrl(url){
                // window.location.href=url;
                window.open(url, '_blank').location;
            },
            deleteUrl(urlId){
                // alert(2)
                // window.open(url, '_blank').location;
                this.axios.post(`/deleteUrl`,{
                    urlId:urlId
                }).then((res)=>{
                    console.log(res)
                    if(res.data.status==200){
                        this.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.urlAllList()
                    }else{
                        this.$message.error(res.data.msg);
                    }
                }).catch((err)=>{
                    console.log(err)
                });
            },
            // updateUrl(url){
            //     this.axios.post('/updateUrl',{
            //         url:{
            //             name:this.ruleForm.name,
            //             content:this.ruleForm.content,
            //             url:this.ruleForm.url,
            //             author:'曹蕊'
            //         }
            //     }).then((res)=>{
            //         console.log(res)
            //         if(res.data.status==200){
            //             this.$message({
            //                 message: res.data.msg,
            //                 type: 'success'
            //             });
            //             setTimeout(() => {
            //                 this.$router.push('/')
            //             }, 2000);
            //         }else{
            //             this.$message.error(res.data.msg);
            //         }
            //     }).catch((err)=>{
            //         console.log(err)
            //     });
            // }
        }
    }
</script>

 