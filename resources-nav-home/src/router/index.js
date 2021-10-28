import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home'
import Index from '../views/Index';
import addResource from '../views/addResource';
import Account from '../views/account';
import login from '../views/login';
// import About from '../views/About';

const routes = [
  {
    // path：父路由
    path:'/', 
    // 定义一个组件
    // name:'home', 
    // 引入组件
    component: Home,
    redirect:'/index',
    // 加载子路由-列表
    children:[
        {
            path:'index', 
            name:'Index', 
            component: Index,
        },
        {
            path:'account', 
            name:'account', 
            component: Account,
        }
    ],
  },
  // {
  //     path:'/index', 
  //     name:'Index', 
  //     component: Index,
  // },
  {
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
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 全局前置守卫 教程https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
// 每一次进行路由跳转之前都执行的方法
router.beforeEach((to,from,next)=>{
  console.log(to,from);
  // const isLogin=false;
  const isLogin=localStorage.isLogin||false;
  if(isLogin||to.name==="login"){
      next();
  }else{
      next({name:'login'})
  }
})
export default router
