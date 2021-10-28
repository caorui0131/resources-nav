<template>
    <el-main>
        <p class='count1'>{{count}}</p>
        <div v-for="item in urlList" :key="item.urlclassId">
            {{item.name}}
        </div>
        <!-- PageHeader 页头 -->
        <el-page-header @back="goBack" content="所有资源"></el-page-header>
        <!-- 卡片内容 -->
        

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
