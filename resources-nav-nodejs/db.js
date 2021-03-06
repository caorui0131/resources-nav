var mysql = require('mysql');//从node_modules中引入包
const config = require('./config')

var connection = mysql.createConnection(config.blogMysql);
connection.connect();//开始链接
// 查询mysql中的数据-测试
// connection.query('SELECT * from blogs', function (error, results, fields) {
//   console.log(results)
// });
const { exec } = require('./mysql')
//非数据库相关函数
// 格式化时间
function formatDate(date) {
  var date = new Date(date);
  var YY = date.getFullYear() + '-';
  var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
  var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return YY + MM + DD + " " + hh + mm + ss;
}
function selectUrlclassList(){
  // return new Promise(function (resolve, reject) {
  //   connection.query('select * from urlclass INNER JOIN urlclass2urls on  urlclass2urls.urlclassId=urlclass.urlclassId  group by urlclass2urls.urlclassId order by urlclass.sort desc;', function (error, results, fields) {
  //     if (error) {
  //       reject(error);
  //     } else {
  //       // console.log(results);
  //       resolve(results);
  //     }
  //   });
  // });
  const sql = 'select * from urlclass order by urlclass.sort desc;'
  return exec(sql).then(rows => {
    // console.log(rows);
    return JSON.stringify(rows)
  })
};
function selectUrlList(urlclassId){
  // console.log('urlclassId:',urlclassId)
  const sql = 'select * from urls INNER JOIN urlclass2urls on urlclass2urls.urlId=urls.urlId where urlclass2urls.urlclassId= '+urlclassId+' order by urlclass2urls.sort desc;'
  return exec(sql).then(rows => {
    // console.log(rows);
    return rows
  })
};
function selectAllUrlList(){
  const sql = 'select * from urls;'
  return exec(sql).then(rows => {
    // console.log(rows);
    return rows
  })
};
function selectUrl(urlId){
  const sql = 'select * from urls where urlId='+urlId+';'
  return exec(sql).then(rows => {
    // console.log(rows);
    return rows
  })
};
function addUrl(url){
  // console.log('urlclassId:',urlclassId)
  const sql = 'INSERT INTO `blog`.`urls` (`name`, `content`,`createtime`, `url`, `author`) VALUES ('+`'${url.name}','${url.content}','${formatDate(new Date())}','${url.url}','${url.author}'`+');'
  return exec(sql).then(rows => {
    // console.log(rows);
    return rows
  })
};
function deleteUrl(urlId){
  // console.log('urlclassId:',urlclassId)
  const sql = 'DELETE FROM urls where urlId ='+`${urlId}`+';'
  return exec(sql).then(rows => {
    // console.log(rows);
    return rows
  })
};
function updateUrl(url){
  // console.log('urlclassId:',urlclassId)
  const sql = 'UPDATE urls SET '+`name='${url.name}',content='${url.content}',createtime='${formatDate(new Date())}', url='${url.url}', author='${url.author}' where urlId =${url.urlId};`
  return exec(sql).then(rows => {
    // console.log(rows);
    return rows
  })
};
module.exports = {
  // url
  selectUrlList,
  selectUrlclassList,
  selectAllUrlList,
  selectUrl,
  addUrl,
  deleteUrl,
  updateUrl,
};