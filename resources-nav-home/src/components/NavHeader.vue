<template>
    <div>header</div>
</template>
<script>
    export default{
        // 组件名称，加载组件时引用的值
        name:'nav-header',
        data(){
            return {
                phoneList:[]
            }
        },
        mounted(){
            this.getProductList();
        },
        methods:{
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