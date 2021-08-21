/**
 * 把环境变量抽取到模块中统一进行管理,适用于 jsonp跨域、cors跨域，
 * 代理的跨域解决方案用main.js  axios.defaults.baseURL='/api';
 */
// 导出这个地址
let baseURL;
// 根据不同的环境输出不同的url地址
/**用webpack可以判断环境变量env，webpack里有--mode参数，
 * --mode参数是注入一个参数 把环境变量传给项目，这样项目才能知道当前处于哪个环境
/** 
 *  package.json的vue-cli service脚手架已经把webpack集成进去了
 * 多看看webpack
 * nodejs里有一个process进程, process.env.NODE_ENV获取当前传过来的参数    
 * process.env获取当前nodejs进程里的环境变量
*/
console.log('process.env.NODE_ENV:',process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL='/api-development'
        break; 
    case 'test':
        baseURL='/api-test'
        break; 
    case 'production':
        baseURL='/api-production'
        break; 

    default:
        break;
}

export default {
    baseURL
}