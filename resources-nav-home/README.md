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
3. [Sass](https://www.sass.hk/) 预编译器
 


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
  * 懒加载、element-ui组件库、sass预编译器、轮播图、前后端交互用cookie识别用户：npm i vue-lazyload element-ui node-sass sass-loader vue-awesome-swiper vue-axios vue-cookie --save-dev
  * 把axios挂载在vue实例里，简化导入组件的步骤：npm i vue-axios ,--save-dev：保存到package.json
  * 不知道安装什么插件就去 npm github上找最火的



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


## 目录结构

```
.
├── README.md 项目说明
├── package.json 包管理文件
├── public 公共目录
│   └── 
├── src 前端项目主目录
│   ├── assets 资源文件
│   ├── components 组件
│   ├── api 接口文档
│   │   └── index.js整个项目的api请求
│   ├── storage 数据存储的工具箱
│   ├── pages 页面
│   ├── 
│   ├── router.js 路由
│   └── util 工具,公共的方法
└── 
```
