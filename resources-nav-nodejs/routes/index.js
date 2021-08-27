var express = require('express');
var router = express.Router();
var db = require('../db');

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

// 获取左侧树形导航
router.get('/leftSubmenuList', async function(req, res, next) {
  // let parentId = req.params.parentId || NULL;
  try{
    // 包含url的Urlclass
    var selectUrlclassList= await db.selectUrlclassList().catch((err) => {
      console.error(err);
      throw err;
    });
    // console.log('selectUrlclassList1:',selectUrlclassList)
    function translateData(data, idStr, pidStr, chindrenStr) {
      var result = [],
          temp = {},
          id = idStr,
          pid = pidStr,
          children = chindrenStr,
          i = 0,
          j = 0,
          len = data.length;
      // 重新把数组中的对象重新放到一个新的对象中，新的对象是以id 的值为键
      for (; i < len; i++) {
          // 建立temp对象，由于对象是引用类型，修改temp或者data都会引起另一方改变
          temp[data[i][id]] = data[i];
          // temp[a[i][id]] = JSON.parse(JSON.stringify(data[i])); 这种情况data和temp是独立的
      }
      // aVal 存储数组中的对象，获取新对象中key为pid 的对象，如果存在	
      for (; j < len; j++) {
        var dataVal = data[j],
            tempObj = temp[dataVal[pid]];
        if (tempObj) {
            // 如果	tempObj[children]不存在，把tempObj[children]设为数组	
            !tempObj[children] && (tempObj[children] = []);
            tempObj[children].push(dataVal);
        } else {
            // 如果不存在就把dataVal放到结果中		
            result.push(dataVal);
        }
      }
      // console.log('data:',data)
      // console.log('temp:',temp)
      return result;
    }
    var selectUrlclassTree=translateData(JSON.parse(selectUrlclassList), 'urlclassId', 'parentId', 'chindren')
    
    // console.log('selectUrlclassList2:',translateData(JSON.parse(selectUrlclassList), 'urlclassId', 'parentId', 'chindren'))
    res.json(selectUrlclassTree[0]);
  }catch(err){
    console.error('/error',err);
  }
});
// 根据左侧树形导航的id 获取 其包含的urlList
router.get('/urlList/:urlclassId', async function(req, res, next) {
  let urlclassId = req.params.urlclassId || NULL;
  try{
      var urlList= await db.selectUrlList(urlclassId).catch((err) => {
        console.error(err);
        throw err;
      });
      console.log('urlList:',urlList)
    res.json(urlList);
  }catch(err){
    console.error('/error',err);
  }
});
// 获取全部urlList
router.get('/urlAllList', async function(req, res, next) {
  try{
      var urlAllList= await db.selectAllUrlList().catch((err) => {
        console.error(err);
        throw err;
      });
      // console.log('urlAllList:',urlAllList)
    res.json(urlAllList);
  }catch(err){
    console.error('/error',err);
  }
});
// 添加url
router.post('/addUrl', async function(req, res, next) {
  var url=req.body.url;
  var result=await db.addUrl(url).catch((err) => {
    console.error(err);
    throw err;
  });
  // console.log('result:',result);
  if(result&&result.affectedRows>0){
    res.json({status:200,msg:'添加资源成功!'});
  }else{
    res.json({status:400,msg:'添加资源失败，请检查您的输入是否正确!'});
    console.log('addUrl is error');
  }
});
// 删除url
router.post('/deleteUrl', async function(req, res, next) {
  var urlId=req.body.urlId;
  var result=await db.deleteUrl(urlId).catch((err) => {
    console.error(err);
    throw err;
  });
  // console.log('result:',result);
  if(result&&result.affectedRows>0){
    res.json({status:200,msg:'删除资源成功!'});
  }else{
    res.json({status:400,msg:'删除资源失败，请稍后再试!'});
    console.log('addUrl is error');
  }
});
// 更新url
router.post('/updateUrl', async function(req, res, next) {
  var url=req.body.url;
  var result=await db.updateUrl(url).catch((err) => {
    console.error(err);
    throw err;
  });
  // console.log('result:',result);
  if(result&&result.affectedRows>0){
    res.json({status:200,msg:'更新资源成功!'});
  }else{
    res.json({status:400,msg:'更新资源失败，请检查您的输入是否正确!'});
    console.log('updateUrl is error');
  }
});

module.exports = router;
