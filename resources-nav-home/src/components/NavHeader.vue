<template>
    <div>header
        
        <button @click="greet">Add 1</button>
    </div>
</template>
<script>
    import { Message } from 'element-ui'
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
            greet() {
                // alert(5)
                Message.warning('5555555')
            },
            goToCart(){
                /**
                 * 路由跳转（a跳b）：this.$router.push
                 * 路由跳转过来后 取路由的 参数：$router.params ， $router.query
                 */
                // this.$router.push('/cart');
            },
                
        }
    }
</script>