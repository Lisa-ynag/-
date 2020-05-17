let express = require('express');
let fs = require('fs');//读取文件
let path = require('path');//处理路径

let app = express();

let top250File = path.join(__dirname,'json/top250.json');
let coming_soonFile = path.join(__dirname,'json/coming_soon.json');
let in_theatersFile = path.join(__dirname,'json/in_theaters.json');
let subjectFile = path.join(__dirname,'json/subject.json');
let searchFile = path.join(__dirname,'json/search.json');

//top250电影数据
app.get('/top250',(req,res)=>{
	//处理，读取文件
	let content = fs.readFileSync(top250File);
	//console.log("content",content)
	//转换
	let newcontent = JSON.parse(content);
	//响应数据
	resMsg(newcontent,res);
})
//即将上映的电影
app.get('/coming_soon',(req,res)=>{
	//处理，读取文件
	let content = fs.readFileSync(coming_soonFile);
	//console.log("content",content)
	//转换
	let newcontent = JSON.parse(content);
	//响应数据
	resMsg(newcontent,res);
})
//正在上映的电影
app.get('/in_theaters',(req,res)=>{
	//处理，读取文件
	let content = fs.readFileSync(in_theatersFile);
	//转换
	let newcontent = JSON.parse(content);
	//响应数据
	resMsg(newcontent,res);
})
//电影详情
app.get('/subject',(req,res)=>{
	//处理，读取文件
	let content = fs.readFileSync(subjectFile);
	let newcontent = JSON.parse(content);
	resMsg(newcontent,res);
})
//搜索mock
app.get('/search',(req,res)=>{
	//处理，读取文件
	let content = fs.readFileSync(searchFile);
	let newcontent = JSON.parse(content);
	resMsg(newcontent,res);
})

//响应数据（增加success状态属性封装）
function resMsg(resObj,res){
	resObj={
		success:1,
		...resObj
	}
	res.send(JSON.stringify(resObj));
}
app.listen(8000);