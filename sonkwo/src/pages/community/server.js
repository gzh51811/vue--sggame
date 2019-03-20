'use strict';
const express = require('express');
var proxy = require('http-proxy-middleware');
const qs = require('querystring');
const urlpg = require('url');
let app = express();

app.use(express.static('./'))

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    req.header('Accept', 'application/vnd.sonkwo.v6+json');
    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.sendStatus(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

// local:  http://localhost:1811/jxapi/m_v1/statics/getzx.htm
    // -> https://m.jiuxian.com/jxapi/m_v1/statics/getzx.htm
// target: https://m.jiuxian.com/m_v1/statics/getzx.htm
let url = "https://www.sonkwo.com/api/";//网址
let param = '';//参数拼接
let transformName = '';//转化地址
var allUrl = '';

//轮播图请求
//app.all('/community/lunbo',(req,res,next)=> {
//	console.log(req.query);
//	param=qs.stringify(req.query);console.log(param);
//	transformName=urlpg.parse(req.url).pathname;
//	console.log('路由',transformName);
//	console.log('all',url+'community_home.json?'+param)
//	next();
//});
//app.all('/community/posts');
//allUrl = url+'community_home.json?'+param;
allUrl ='https://www.sonkwo.com/api/community_home.json?locale=js&sonkwo_version=1&sonkwo_client=mobile&q%5B%5D=recommend_guoties&_=155291090833';



//var all = 'https://www.sonkwo.com/api/search/posts?locale=js&sonkwo_version=1&sonkwo_client=mobile&type=Posts%3A%3ASubject&order%5Bpublished_at_timestamp%5D=desc&_=1552956516039';
//posts贴子信息请求
app.use('/community/posts',(req,res,next)=> {
	param=qs.stringify(req.query);
	transformName=urlpg.parse(req.url).pathname;
//	console.log('路由',transformName);
	
//	//测试
//	param=qs.stringify({
//					"locale":'js',
//					"sonkwo_version":1,
//					"sonkwo_client":'mobile'
//					});
//	console.log('拼接',param);
//	transformName=urlpg.parse(req.url).pathname;
//	console.log('路由',transformName);
//	param+='&q%5B%5D=recommend_guoties&_=155291090833';
	
	
	console.log('allUrl',url+'community_home.json?'+param)
//	allUrl = url+'search/posts?'+param;//帖子请求
	allUrl ='https://www.sonkwo.com/api/community_home.json?locale=js&sonkwo_version=1&sonkwo_client=mobile&q%5B%5D=recommend_guoties&_=155291090833';
//	if (allUrl==url+'community_home.json?'+param) {
//		console.log(666);
//	}else{
//		console.log('检验',allUrl);
//		console.log('检验',url+'community_home.json?'+param);
//	}
	next();
},proxy({
//  "target": 'https://www.sonkwo.com/api/search/posts?locale=js&sonkwo_version=1&sonkwo_client=mobile&type=Posts%3A%3ASubject&order%5Bpublished_at_timestamp%5D=desc&_=1552956516039', //目标服务器
	"target":allUrl,
	"changeOrigin": true,
    "headers":{
    	"Accept":"application/vnd.sonkwo.v5+json"
    },
    "pathRewrite": {
        [transformName] : "/"
    }
}));

app.listen('1811', function(){
    console.log('Server running on http://localhost:'+1811);
});



