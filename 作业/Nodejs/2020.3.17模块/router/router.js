let http = require('http');
let url = require('url');

/* 
req.url:
http://localhost:8000/login?username=zhangsan
http://localhost:8000/register?username=zhangsan
 */
http.createServer((req,res)=>{
	// req request 请求
	// res response 响应
	if(req.url == '/favicon.ico'){
		return;
	}
	//设置响应头
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
	//问题1 如何得到test?
	//问题2  如何输出不同的名称 （注册名，登录名）
	let urlObj = url.parse(req.url,true);
	//url.parse()将字符串转换成对象，第二个对象如果是true 将query也会变成对象。没有true，query还是字符串。
	if(urlObj.pathname == '/register'){
		res.end('注册名：'+ urlObj.query.username);
	}else if(urlObj.pathname == '/login'){
		res.end('登录名：'+ urlObj.query.username);
	}else{
		res.end('请求不存在');
	}
	
}).listen(8000)