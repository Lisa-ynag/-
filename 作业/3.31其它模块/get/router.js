let http = require('http')
let fs = require("fs"); //对文件重命名
let formidable = require('formidable'); //上传文件
let path = require("path"); //获取后缀名

//创建数组存取数据和获取数据
let arr = [];

exports.indexPage = function(req, res) {
	//渲染页面
	res.render('index');
}

exports.upload = function(req, res) {
	//渲染页面
	res.render('upload');
}

exports.postimg = function(req, res) {
	let usergoods = req.body.goods;
	let userprice = req.body.price;
	
	//处理数据
	let userObj ={
		usergoods,
		userprice
	};
	arr.push(userObj);
	res.send('可以回到首页查看也可以重定向跳转首页，回去查看数据')
}

exports.allphoto = function(req, res){
	let userobj=[];
	Object.assign(userobj,arr);
	console.log(userobj)
	res.render('allphoto',{
		list:userobj
	})

	
}
