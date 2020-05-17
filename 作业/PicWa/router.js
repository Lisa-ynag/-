let express = require("express");
let app = express();
let fs = require("fs");
let url = require("url");
//上传文件插件
let formidable = require("formidable");
//实例化插件
let form = new formidable.IncomingForm();
form.uploadDir = './upload';
form.keepExtensions = true;

//用一个数组来存放文件夹和里面的照片
let arr = [];

//解析post参数
let bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
	extended: false
}));

//首页
exports.index = function(req, res) {
	res.render("index");

}
//404
exports.error = function(req, res, next) {
	res.render("404");

}
//上传

exports.load = function(req, res) {
	res.render("load");
}
//上传图片的方法
exports.loadFile1 = function(req, res) {
	//参数解析			错误非文件数据，下一步方法
	form.parse(req, function(err, fields, files, next) {
		if (err) {
			console.log(err);
		} else {
			console.log(fields);
			let ffss = fields.xiangce;
			var extname = files.pic.path;
			//旧的路径
			var oldpath = __dirname + "/" + files.pic.path;
			//新的路径
			var newpath = __dirname + '/upload/' + fields.xiangce + "/" + extname;
			console.log(newpath);
			fs.readFile(oldpath, function(err, data) {
				if (err) {
					console.log("读取不到文件");
				} else {
					//拷贝到指定文件夹下
					fs.writeFile(newpath, data, function(err) {
						if (err) {
							console.log("创建文件失败");
						} else {
							console.log("拷贝成功");
						}
					});
					//删除暂放处的原文件
					fs.unlink(oldpath, function(err) {
						if (err) {
							console.log("删除原文件失败");
						} else {
							console.log("删除成功");
						}

					})
				}
			})
		}
	});
	res.render("index");
}

//查看相册网页
exports.showImg=function(req,res){
	//若为空路由过去对应的ejs模板("不传参数")
	res.render("showImg");
}
//查看相册本体
exports.showImgFun=function(req,res){
	let parseUrl=url.parse(req.url,true);
	arr.forEach((item,index)=>{
		if (parseUrl.query.xiangce==item.from) {
			console.log(item);
			res.render("showImgText",{pic:item});
		}
	})
}
//创建相册网页
exports.mkdir1=function(req,res){
	res.render("mkdir");
}
//创建相册本体方法
exports.mkdirDo=function(req,res){
	let parseUrl=url.parse(req.url,true);
	//创建的文件夹名
	let name=parseUrl.query.dirname;
	fs.exists(__dirname+"/upload/"+name,function(existx){
		let mess="";
		//假如已存在这个文件夹
		if (existx) {
			console.log("文件夹已存在,请重新重新确认后再新增");
		}else{
			fs.mkdir("./upload/"+name,function(err){
				if (err) {
					console.log("创建失败");
				}else{
					console.log("创建成功")
				}
			})
		}
	})
	res.render("mkdir");
}
//修改相册名网页
exports.rename1=function(req,res){
	res.render("rename");
}
//修改相册本体方法
exports.renameDo=function(req,res){
	let parseUrl=url.parse(req.url,true);
	//旧名
	let old=parseUrl.query.old;
	//新名
	let newname=parseUrl.query.new;
	//第一个参数是旧，第二个是新，第三个是方法回调
	fs.rename(__dirname+"/upload/"+old,__dirname+"/upload/"+newname,function(err){
		if (err) {
			res.send("更改失败");
		}else{
			res.send("更改成功");
		}
	})
}
 
//获取所有相册(需要用到同步方法)
exports.findAlbum=function(req,res){
	//每次进入这个方法先清空原先数据
	arr=[];
	//同步读取
	let uploadDir=fs.readdirSync("./upload/");
	uploadDir.forEach((items,index)=>{
		//定义一个空的数组用来存放图片
		let picArr=[];
			//items是每个文件夹(相册)
			//再同步读取每个相册内的所有文件图片
			let xcDir=fs.readdirSync("./upload/"+items);
			xcDir.forEach((xcItem,index)=>{
				picArr.push(xcItem);
			})//xcDir.forEach
			arr.push({from:items,picArr:picArr});
	})//uploadDir.forEach
	//异步读取的话是获取不了数据的
	res.send(arr);
}
