const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx
 */
router.post('/',async (ctx,next)=>{
//	let {username,password} = ctx.request.body;
	console.log('find',ctx.request.params);
	var ObjectID = require('mongodb').ObjectID;
    let mongores = await db.find('user',{_id:ObjectID('5c77c5e0b3ef9808ecde6dcb')});
    //查找是否存在该用户
//  console.log(ctx.request.body);
    let res1 = {
    	code : 0,
    	msg : '是否存在当前用户',
    	count : mongores.length,
    	data: mongores
    };
    ctx.body = res1;//把结果传给前台渲染
})

module.exports = router;