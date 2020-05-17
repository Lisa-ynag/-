let url = require('url');

let allGoods = [];


exports.indexPage = function(req,res){
	//渲染页面
	res.render('index');
}
exports.addGoods = function(req,res){
	//渲染页面
	res.render('addGoods');
}
exports.uploadGoods = function(req,res){
	let param = url.parse(req.url,true).query;
	
	allGoods.push({"proname":param.goods,"price":param.price});
	console.log(param.goods,param.price);
	res.send("创建成功");
}

exports.showGoods = function(req,res){
	//渲染页面
	res.render('showGoods',{
		"goods":allGoods
	});
}

exports.deleleGoods = function(req,res){
	//1.接收要删除的索引下标
	let index = req.url.split('=')[1];
	
	//2.删除数据，splice(开始下标，删除个数)
	allGoods.splice(index,1);
	res.send('删除成功');
}