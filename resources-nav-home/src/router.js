import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home';
import Index from './pages/index';
import addResource from './pages/addResource';
import Account from './pages/account';
import login from './pages/login';

// 加载插件的固定语法：同vue加载Router插件
Vue.use(Router);


// vue的Router语法，export导入一个对象
// export default new Router ({
const router = new Router ({
    // 路由的配置
    // routes:配置子路由
    routes:[
        {
            // path：父路由
            path:'/', 
            // 定义一个组件
            name:'home', 
            // 引入组件
            component: Home,
            redirect:'/index',
            // 加载子路由-列表
            children:[
                {
                    path:'/index', 
                    name:'index', 
                    component: Index,
                },
                {
                    path:'/account', 
                    name:'account', 
                    component: Account,
                }
            ],
        },{
            path:'/', 
            name:'home', 
            component: Home,
            children:[
                {
                    path:'/addResource', 
                    name:'addResource', 
                    component: addResource,
                }
            ],
        },{
            path:'/login', 
            name:'login', 
            component: login,
        }
    ]
});

// 全局前置守卫 教程https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
// 每一次进行路由跳转之前都执行的方法
router.beforeEach((to,from,next)=>{
    console.log(to,from);
    // const isLogin=false;
    const isLogin=localStorage.isLogin;
    if(isLogin||to.name==="login"){
        next();
    }else{
        next({name:'login'})
    }
})

export default router;