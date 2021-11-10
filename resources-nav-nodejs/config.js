module.exports={
    // env: process.env.NODE_ENV || 'development',
    // env: 'development',
    env: 'production',
    // port: process.env.PORT || 80,
    port:process.env.port||80,
    // 线上-用线上数据库
    // blogMysql:{
    //     host     : process.env.host||'localhost',
    //     port     : process.env.mysqlport||3306,
    //     user     : process.env.mysqlusername||'root',
    //     password : process.env.mysqlpassword||'Cr18811657411',
    //     database : process.env.dbblog||'blog'
    // },
    // 本地测试-用线上数据库
    blogMysql:{
        host     : 'rm-8vbxh2o8a651reb5m3o.mysql.zhangbei.rds.aliyuncs.com'||'localhost',
        port     : 3306||3306,
        user     : 'caorui'||'root',
        password : 'wftest@231'||'Cr18811657411',
        database : 'blog'||'blog'
    },
    // production:{
    //     blogMysql:{
    //         host     : 'rm-8vbxh2o8a651reb5m3o.mysql.zhangbei.rds.aliyuncs.com',
    //         port     : 3306,
    //         user     : 'caorui',
    //         password : 'wftest@231',
    //         database : 'blog'
    //     },
    //     port:80
    // },
    // dev:{
    //     blogMysql:{
    //         host     : 'localhost',
    //         port     : 3306,
    //         user     : 'root',
    //         password : 'Cr18811657411',
    //         database : 'blog'
    //     },
    //     port:50011
    // }
}