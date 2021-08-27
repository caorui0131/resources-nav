import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home';
import Index from './pages/index';
import addResource from './pages/addResource';
import Account from './pages/account';

// 加载插件的固定语法：同vue加载Router插件
Vue.use(Router);

// vue的Router语法，export导入一个对象
export default new Router ({
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
        }
    ]
});