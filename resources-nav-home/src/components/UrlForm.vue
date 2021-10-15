<template>
    <el-form v-model="ruleForm.name" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
        <!-- {{getType}} -->
        {{selectUrlId}}
        <el-form-item label="名称" prop="name" >
            <el-input v-model="ruleForm.name"></el-input>
            <!-- <el-input v-bind="selectUrl(selectUrlId)"></el-input> -->
        </el-form-item>
        <el-form-item label="描述" prop="content">
            <el-input type="textarea" v-model="ruleForm.content"></el-input>
        </el-form-item>
        <el-form-item label="链接" prop="url">
            <el-input v-model="ruleForm.url"></el-input>
        </el-form-item>
        <!-- <el-form-item label="图标" prop="name">
            <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url" alt=""
                >
                <span class="el-upload-list__item-actions">
                    <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                    >
                    <i class="el-icon-zoom-in"></i>
                    </span>
                    <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                    >
                    <i class="el-icon-download"></i>
                    </span>
                    <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                    >
                    <i class="el-icon-delete"></i>
                    </span>
                </span>
                </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </el-form-item> -->
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm',submitFormUrl)">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
// 卡片-结束
</style>
<script>
    import { Container } from 'element-ui'
    // import $ from 'jquery'
    export default{
        // 组件名称，加载组件时引用的值
        name:'url-form',
        props:["getType","selectUrlId"],
        components:{
        },
        // 定义局部的，防止篡改
        data() {
            // return只允许当前页面使用
            return {   
                url:'',
                // urlId:'',
                submitFormUrl:this.getType,
                ruleForm: {
                    urlId:'',
                    // name:''||this.selectUrl(this.selectUrlId),
                    name:this.selectUrl(this.selectUrlId),
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    content: '',
                    url:'',
                    // // 图片
                    // dialogImageUrl: '',
                    // dialogVisible: false,
                    // disabled: false
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 1, max: 50, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    content: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ],
                    url: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            }
        },
        mounted(){
            if(this.getType=='updateResource'){
                // alert(this.urlId)
                // this.selectUrl(this.selectUrlId)
            }
        },
        methods: {
            selectUrl(urlId){
                console.log(`/selectUrl/${urlId}`)
                this.axios.get(`/selectUrl/${urlId}`,{
                }).then((res)=>{
                    this.url=res.data[0];
                    console.log(res.data[0].name)
                    this.ruleForm.name=res.data[0].name;
                    this.ruleForm.content=res.data[0].content;
                    this.ruleForm.url=res.data[0].url;
                    this.ruleForm.urlId=res.data[0].urlId;
                    this.submitFormUrl='updateUrl';
                })
            },
            submitForm(formName,submitFormUrl) {
                console.log('this.:',this.ruleForm)
                console.log('submitFormUrl.:',this.submitFormUrl)
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    // console.log('ruleForm:',ruleForm)
                    console.log('formName:',formName)
                    console.log('this.$refs[formName]:',this.$refs[formName])
                    console.log('this.$refs[formName]:',this.$refs[formName].children)
                    this.axios.post(submitFormUrl,{
                        url:{
                            name:this.ruleForm.name,
                            content:this.ruleForm.content,
                            url:this.ruleForm.url,
                            author:'曹蕊',
                            urlId:this.ruleForm.urlId,
                        }
                    }).then((res)=>{
                        console.log(res)
                        if(res.data.status==200){
                            this.$message({
                                message: res.data.msg,
                                type: 'success'
                            });
                            // setTimeout(() => {
                            //     this.$router.push('/')
                            // }, 2000);
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    }).catch((err)=>{
                        console.log(err)
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            // resetForm() {
            //     this.$refs.ruleForm.resetFields();
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            // 图片
            // handleRemove(file) {
            //     console.log(file);
            // },
            // handlePictureCardPreview(file) {
            //     this.dialogImageUrl = file.url;
            //     this.dialogVisible = true;
            // },
            // handleDownload(file) {
            //     console.log(file);
            // }
        },
        Container,
    }
</script>

 