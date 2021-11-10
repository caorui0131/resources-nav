<template>
    <el-main>
        <!-- PageHeader 页头 -->
        <el-page-header @back="goBack" content="所有资源"></el-page-header>
        <!-- 卡片内容 -->
        
        <el-row>
            <el-col  :span="24">
                <!-- 卡片内容 -->
                <el-row :gutter="20">
                    <template v-if="urlList.length > 0">
                        <el-col :span="6" v-for="item in urlList" :key="item.urlclassId">
                            <!-- 卡片；@click.native 的作用：给组件绑定原生事件 -->
                                <!-- @click.native="openUrl(item.url)" -->
                            <el-card class="box-card url-box-card urlList" shadow="hover">
                                <!-- <div slot="header" class="clearfix" @click="openUrl(item.url)" > -->
                                    <template #header>
                                        <div class="card-header">
                                            <div class="text item">
                                                <span>{{item.name}}</span>
                                            </div>
                                            <div>
                                                {{item.content}}
                                            </div>
                                            <!-- <el-button class="button" type="text">Operation button</el-button> -->
                                        </div>
                                    </template>
                                    <!-- <div class="text item">
                                        <span>{{item.name}}</span>
                                    </div> -->
                                    <!-- {{item.content}} -->
                                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                                <!-- </div> -->
                                <div class="text item">
                                    <!-- {{item.content}} -->
                                    <el-button-group>
                                        <el-button icon="el-icon-delete" @click="deleteUrl(item.urlId)"></el-button>
                                        <!-- <el-button icon="el-icon-edit" @click="updateUrl(item)"></el-button> -->
                                        <el-button icon="el-icon-edit" @click="dialogFormVisible = true,selectUrlId=item.urlId"></el-button>
                                    </el-button-group>
                                </div>
                            </el-card>
                        </el-col>
                    </template>
                </el-row>
                <!-- edit对话框 -->
                <!-- <el-dialog title="编辑资源" :visible.sync="dialogFormVisible" @close="close">
                    <url-form getType='updateResource' :selectUrlId="selectUrlId" @refreshurllist="urlAllList" ref="urlform"></url-form>
                </el-dialog> -->
            </el-col>
        </el-row>
        <nav-footer></nav-footer>
    </el-main>
</template>

<style lang="scss">
// <style lang="scss" scoped>
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';

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
.urlList .el-card__body .item{
    margin-bottom: 0px !important;
}
.urlList .el-card__body{
    padding: 0px!important;
}
.el-button-group{
    width: 100% !important;
    display: flex !important;
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
// .el-card__header {
//     padding: 10px 20px!important;
// }
// 卡片-结束
</style>
<script>
    import NavFooter from './../components/NavFooter'
    import UrlForm from './../components/UrlForm'
    import { useRouter } from 'vue-router'
    import axios from 'axios'
    import { ref,reactive  } from 'vue';
    import { get } from '../utils/request'
    // import { get } from '../../utils/request'
    // import { ref } from 'vue'
    // import $ from 'jquery'
    // const useNearbyListEffect = () => {
        
    //     const nearbyList = ref([]);
    //     const  urlAllList=async  ()=>{
    //         const result = await get('/urlAllList')
    //             nearbyList.value = result.data
    //         return { nearbyList,urlAllList}
    //     }
    // }
    // const  urlAllList=async  ()=>{
    //     this.axios.get(`/urlAllList`,{
    //     }).then((res)=>{
    //         console.log('138:',res.data)
    //         this.urlList=res.data;
    //         return res.data;
    //     })
    // }
    const  fun =()=>{
        return new Promise((resolve, reject) => {
            axios.get(`/urlAllList`, {  }).then((res) => {
                console.log('138:',res.data)
                // console.log('156urlListdata:',urlListdata)
                resolve(res.data)
            }, err => {
                reject(err)
            })
        })
    }
    const router = useRouter()
    const  urlAllListEffect= ()=>{
        console.log('1111111111111:')
        const urlList=ref([])
        const getUrlAllList = async () => {
            // const result =await fun()
            const result =await get('/urlAllList')
        
            console.log('103:',result)
            // urlList.value=res.data;
            urlList.value = result
            // if (result?.errno === 0 && result?.data?.length) {
                // urlList.value = result.data
            // }
        }
        return { urlList, getUrlAllList}
        
        // .catch((res)=>{
        //     console.log('144error:',res)
        // })
    }
    export default{
        // 组件名称，加载组件时引用的值
        name:'url-list',
        components:{
            NavFooter,
            UrlForm
        },
        setup(){
            const count=ref(0);
            count.value++
            console.log('140:',count.value)
            const { urlList, getUrlAllList } = urlAllListEffect();
            
            getUrlAllList()
            // const urlListdata=ref({
            //     urlList:[],
            //     selectUrlId:'',
            //     dialogTableVisible: false,
            //     dialogFormVisible: false,
            //     form: {
            //         name: '',
            //         region: '',
            //         date1: '',
            //         date2: '',
            //         delivery: false,
            //         type: [],
            //         resource: '',
            //         desc: ''
            //     },
            //     formLabelWidth: '120px'
            // });
            
            // onBeforeMount(()=> {
            //   console.log('onBeforeMount')
            //     urlAllList()
            // })
            return{urlList ,count}
        }
        // // 定义局部的，防止篡改
        // data() {
        //     // return只允许当前页面使用
        //     return {
        //         urlList:[],
        //         selectUrlId:'',
        //         dialogTableVisible: false,
        //         dialogFormVisible: false,
        //         form: {
        //         name: '',
        //         region: '',
        //         date1: '',
        //         date2: '',
        //         delivery: false,
        //         type: [],
        //         resource: '',
        //         desc: ''
        //         },
        //         formLabelWidth: '120px'
        //     };
        // },
        // mounted(){
        //     this.urlAllList()
        // },
        // methods: {
        //      urlAllList(){
        //         this.axios.get(`/urlAllList`,{
        //         }).then((res)=>{
        //             console.log('138:',res.data)
        //             this.urlList=res.data;
        //         })
        //     },
        //     getUrlList(item){
        //         // console.log(`/urlList/${item.urlclassId}`)
        //         this.axios.get(`/urlList/${item.urlclassId}`,{
        //         }).then((res)=>{
        //             this.urlList=res.data;
        //         })
        //     },
        //     openUrl(url){
        //         // window.location.href=url;
        //         window.open(url, '_blank').location;
        //     },
        //     goBack() {
        //         console.log('go back');
        //     },
        //     deleteUrl(urlId){
        //         this.axios.post('/deleteUrl',{
        //             urlId:urlId
        //         }).then((res)=>{
        //             // console.log(res)
        //             if(res.data.status==200){
        //                 this.$message({
        //                     message: res.data.msg,
        //                     type: 'success'
        //                 });
        //                 this.urlAllList();
        //             }else{
        //                 this.$message.error(res.data.msg);
        //             }
        //         }).catch((err)=>{
        //             console.log(err)
        //         });
        //     },
        //     close() {
        //         this.$refs.urlform.selectUrl(this.selectUrlId)
        //     },
        // }
    }
</script>
