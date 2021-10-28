<template>
  <div @click="handleLogin">登录</div>
</template>
<script>
import { getCurrentInstance } from 'vue'
export default {
  name: 'login',
  // setup () {
  //   const { proxy } = getCurrentInstance()
  //   console.log(proxy.$root.$route)
  //   console.log(proxy.$root.$router)
  //   return {}

  // }
  setup(){
    // const {onBeforeMount}='vue';
    // this.scroll=new BetterScroll(this.$refs.wrapper,{
    //   click:true
    // })
    const handleLogin = ()=> {
      console.log('1111111111111')
      localStorage.isLogin=true;
    }
    // onBeforeMount(()=> {
    //   console.log('onBeforeMount')
    // })
    return{ handleLogin}
  // }
  // data(){
  //   return {
  //     username:'',
  //     password:'',
  //     userId:''
  //   }
  // },
  // methods:{
  //   handleLogin(){
  //     console.log('1111111111111')
  //     localStorage.isLogin=true;
  //   }
  //   login(){
  //     let { username,password } = this;
  //     this.axios.post('/user/login',{
  //       username,
  //       password
  //     }).then((res)=>{
  //       this.$cookie.set('userId',res.id,{expires:'Session'});
  //       // 1.vuex-存储
  //       // this.$store.dispatch('saveUserName',res.username);
  //       this.saveUserName(res.username);
  //       this.$router.push({
  //         name:'index',
  //         params:{
  //           from:'login'
  //         }
  //       });
  //     })
  //   },
  //   ...mapActions(['saveUserName']),
  //   register(){
  //     this.axios.post('/user/register',{
  //       username:'admin1',
  //       password:'admin1',
  //       email:'admin1@163.com'
  //     }).then(()=>{
  //       this.$message.success('注册成功');
  //     })
  //   }
  }
}
</script>