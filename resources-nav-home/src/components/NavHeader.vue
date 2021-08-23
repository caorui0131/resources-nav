<template>
    <div>header</div>
</template>
<script>
    export default{
        // 组件名称，加载组件时引用的值
        name:'nav-header',
        // 交互开始
        // data不要定义成全局的data，防止数据的窜用
        data(){
            return{
                username: 'jack',
                phoneList:[],
            }
        },
        // 类似于ready，初始化需要调用的方法
        mounted(){
            this.getProductList();
        },
        methods: {
            getProductList(){
                this.axios.get('/products',{
                params:{
                    categoryId:'100012',
                    pageSize:6
                }
                }).then((res)=>{
                this.phoneList = res.list;
                })
            },
        }
    }
</script>
<style lang="scss">
  @import './../assets/scss/base.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/config.scss';
//   // 调用mixin.scss中的函数
//   @include flex();
</style>