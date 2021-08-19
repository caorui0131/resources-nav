import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home';
import Index from './pages/index';
import Product from './pages/product';
import Detail from './pages/detail';
import Cart from './pages/cart';
import Order from './pages/order';
import OrderConfirm from './pages/orderConfirm';
import OrderList from './pages/orderList';
import OrderPay from './pages/orderPay';

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
                },{
                    path:'/product/:id', 
                    name:'product', 
                    component: Product,
                },{
                    path:'/detail/:id', 
                    name:'detail', 
                    component: Detail,
                }
            ],
        },{
            path:'/cart', 
            name:'cart', 
            component: Cart,
            children:[

            ]
        },{
            path:'/order', 
            name:'order', 
            component: Order,
            children:[
                {
                    path:'/confirm', 
                    name:'order-confirm', 
                    component: OrderConfirm,
                },{
                    path:'/list', 
                    name:'order-list', 
                    component: OrderList,
                },{
                    path:'/pay', 
                    name:'order-pay', 
                    component: OrderPay,
                }
            ]
        }
    ]
});