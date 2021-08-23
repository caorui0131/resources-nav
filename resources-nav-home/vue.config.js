// 用代理做接口拦截的 解决跨域的方法，最安全，别人 不知道我的后端接口对应哪个服务
module.exports={
    devServer:{
        host: 'localhost',
        port: 8008,
        // vue提供了一套代理的方案，通过proxy做接口拦截，也可以解决前后端跨域的问题
        proxy: {
            '/api':{
                // 代理不同环境改target
                target: 'http://mall-pre.springboot.cn', 
                changeOrigin: true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}