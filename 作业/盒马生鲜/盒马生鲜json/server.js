let express = require('express');
let fs = require('fs');//读取文件
let path = require('path');//处理路径

let app = express();

let getdetailFile = path.join(__dirname,'json/getdetail.json');
let getGoodsFile = path.join(__dirname,'json/getGoods.json');
let goodsSortsFile = path.join(__dirname,'json/goodsSorts.json');
let scrollXListFile = path.join(__dirname,'json/scrollXList.json');
let sortItemsFile = path.join(__dirname,'json/sortItems.json');

//getdetail数据
app.get('/getdetail',(req,res)=>{
	//处理，读取文件
	let content = fs.readFileSync(getdetailFile);
	//console.log("content",content)
	//转换
	let newcontent = JSON.parse(content);
	//响应数据
	resMsg(newcontent,res);
})
//getGoods数据
app.get('/getGoods',(req,res)=>{
	//处理，读取文件
	let content = fs.readFileSync(getGoodsFile);
	//console.log("content",content)
	//转换
	let newcontent = JSON.parse(content);
	//响应数据
	resMsg(newcontent,res);
})
//goodsSorts数据
app.get('/goodsSorts',(req,res)=>{
	//处理，读取文件
	let content = fs.readFileSync(goodsSortsFile);
	//console.log("content",content)
	//转换
	let newcontent = JSON.parse(content);
	//响应数据
	resMsg(newcontent,res);
})
//scrollXList数据
app.get('/scrollXList',(req,res)=>{
	//处理，读取文件
	let content = fs.readFileSync(scrollXListFile);
	//console.log("content",content)
	//转换
	let newcontent = JSON.parse(content);
	//响应数据
	resMsg(newcontent,res);
})
//sortItems数据
app.get('/sortItems',(req,res)=>{
	//处理，读取文件
	let content = fs.readFileSync(sortItemsFile);
	//console.log("content",content)
	//转换
	let newcontent = JSON.parse(content);
	//响应数据
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
app.listen(3000);
