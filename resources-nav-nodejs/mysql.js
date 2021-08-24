var mysql = require('mysql');//从node_modules中引入包
const config = require('./config')

var connection = mysql.createConnection(config.blogMysql);
connection.connect();//开始链接

// 统一执行 sql 的函数
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}

module.exports = {
    exec,
    escape: mysql.escape
}