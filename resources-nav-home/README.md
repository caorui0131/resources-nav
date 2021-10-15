# 资源导航

> 发现优质的资源


## 已有功能

### 资源



## 快速开始

1. 下载项目到本地

   ```bash
   
   ```

2. 安装依赖

   ```bash
   npm install
   ```

3. 本地启动项目

   ```bash
   npm run start
   ```
# resources-nav-home

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
 
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 技术栈

### 前端

1. [Vue](https://cn.vuejs.org/) 前端框架
2. [Element UI](https://element.eleme.cn/#/zh-CN) 组件库
  1. 前端UI+交互框架
  2. js框架 ，bootscript是css框架
  3. 适合做B端管理后台，不适合做C端门户网站
3. [Sass](https://www.sass.hk/) 预编译器
4. [swiper](https://www.swiper.com.cn/) 滑动插件
 
[学习例子-高仿小米](http://mi.futurefe.com/#/index)

### 后端


<br/>

## 技术笔记
* 全局安装 [vue-cli](https://cli.vuejs.org/zh/) Vue.js 开发的标准工具
  * npm install -g @vue/cli
  * 查看版本号：vue --version
* 创建一个基于webpack模板的新项目
  * vue create resources-nav-home
  * 选择 vue2.x 默认安装
* 启动项目
  * cd resources-nav-home
  * npm run serve
* 使用图形化界面
  * vue ui
* 安装依赖 axios、vue-router、vuex
* 安装调试工具 [vue-devtools](https://github.com/vuejs/devtools/) 报错则下载[vue-devtools v5.1.1](https://codeload.github.com/vuejs/devtools/zip/refs/tags/v5.1.1)
* [VUE 配置vue-devtools调试工具](http://www.imooc.com/article/294527)
* 安装插件
  * 懒加载、element-ui组件库、sass预编译器、轮播图、前后端交互用cookie识别用户：npm i vue-lazyload element-ui node-sass sass-loader
  * node-sass@5.0.0和sass-loader@10.1.1绝配！
  *  vue-awesome-swiper vue-axios vue-cookie --save-dev
  * 把axios挂载在vue实例里，简化导入组件的步骤：npm i vue-axios ,--save-dev：保存到package.json
  * 不知道安装什么插件就去 npm github上找最火的
* 若要进行mock就安装 mockjs
  * npm i mockjs --save-dev
* 安装Element UI
  * 安装框架 npm i element-ui
  * 安装按需加载 npm i  babel-plugin-component
  * 添加配置 .babelrc；凡是涉及到配置（项目以外）的地方都需要重启应服务 
* 安装vuex
  * 创建store文件夹及其中的文件
* 使用vuex
  1. 存储 this.$store.dispatch('saveUserName',XXX);
  2. 传输 context.commit('saveUserName', XXX);
  3. 读取 state.XXX = XXX;
  4. 共享 this.$store.state.XXX
  5. 当发生先取值再存值的情况时，使用computed属性，解决延迟问题（当变量读取的时候没有，之后一旦该变量发生变化 会重新计算一次）。
    1. computed:{username(){return this.$store.state.XXX}}
  



接口错误拦截
* 统一报错
  * 错误如何提示取决于后台架构，后台架构需要分底层和业务层
  * 底层抛出来的错误：给开发人员看
  * 业务层错误：底层抛出来的错误给业务层，需要加工成用户能看得懂错误
  * 前端：把错误展示给用户
* 未登录统一拦截
  * 涉及权限
* 请求值、返回值统一处理
  * 在[axios](http://www.npmjs.com/package/axios)统一处理
    * 提供了公共机制，帮助其那段做请求拦截和返回值拦截
    * get请求+params，post请求不加直接写
    * 复合接口


* 接口环境设置
  * 从开发到上线，不同阶段需要不同配置
  * 不同的跨域方式需要不同的配置
  * 打包时统一注入环境参数，统一管理环境，输出不同版本的包

* 接口规范
```
{
  status:0,
  data;[],
  msg:''
}
```

* vue语法
  * :key  
    * 渲染速度更高
    * 后期复用率更高，重复二次渲染的时候会自动缓存（发现有缓存就直接取了不会重复渲染 ），从而提升性能
## 目录结构

```
.
├── README.md 项目说明
├── package.json 包管理文件
├── public 公共目录
│   └── 
├── src 前端项目主目录
│   ├── assets 资源文件(公共的，某一个组件的资源会放在组件的文件夹)
│   │   ├── fonts 图标字体
│   │   ├── img 图片
│   │   ├── js js文件
│   │   ├── scss样式
│   │   ├── base.scss 公共样式
│   │   └── moxin.scss 把变量抽离出来，把样式定义成方法
│   ├── api 接口文档
│   │   └── index.js整个项目的api请求
│   ├── storage 数据存储的工具箱
│   ├── pages 页面
│   ├── components 公共的组件（多个页面之间都会使用的组件）
│   ├── base 基础的组件（多个项目都会使用的组件，和业务逻辑没有任何关系）
│   ├── pages 页面级组件
│   ├── router.js 路由
│   └── util 工具,公共的方法
├── resource 资源
│   ├── reset.scss 覆盖网页内置样式
│   └── config.scss 项目架构的一部分，把常规、常用的颜色、字号抽出来
└── main.js 项目总入口
```
