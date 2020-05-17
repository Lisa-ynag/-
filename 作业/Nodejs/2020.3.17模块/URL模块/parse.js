let http = require('http');
let url = require('url');
//URL:
//http://localhost:8000/news?id=100&status=1#temp
http.createServer((req,res)=>{
	//每次请求都会请求ico图标。if忽略图标请求的处理
	if(req.url =='/favicon.ico'){
		return;
	}
	//req.url属性 可以获取到请求的url中路径以及参数部分的内容。不能获取到锚点内容
	console.log('success',req.url);//news?id=100&status=1
	//url.parse()将字符串转换成对象
	let urlObj = url.parse(req.url,true);
	console.log('parse后',url.parse(req.url));
	
	console.log('访问路径',urlObj.pathname);
	res.end();
}).listen(8000,'localhost');