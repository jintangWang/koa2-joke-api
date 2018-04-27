const Router = require('koa-router');
const router = new Router();
const db = require('./util/db.js');
const fs = require('fs');

router.get('/', ctx => {
	let content = fs.readFileSync('./view/index.html', 'utf8')
	ctx.body = content;
}).get('/jokeImg',async (ctx) => {
	let req = ctx.request.query;
	let page = Number.parseInt(req.page || 1);
	let pageSize = Number.parseInt(req.pagesize || 20);
	let sql = "SELECT * FROM `data` LIMIT ?,?;";
	let res = await db.query(sql, [(page - 1)*pageSize, pageSize]);
	ctx.body = res;
}).get('/jokeText', async (ctx) => { // 数据还未初始化
	let req = ctx.request.query;
	let page = Number.parseInt(req.page || 1);
	let pageSize = Number.parseInt(req.pagesize || 20);
	let sql = "SELECT * FROM `data` LIMIT ?,?;";
	let res = await db.query(sql, [(page - 1)*pageSize, pageSize]);
	ctx.body = res;
})

module.exports = router;