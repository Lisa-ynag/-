let http = require('http');
let url = require("url");

http.createServer((req,res)=>{
	//不处理小图标的请求
	if (req.url == '/favicon.ico'){return;}
	//设置响应头
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8","Access-Control-Allow-Origin":"*"});
	
	let params = url.parse(req.url,true,).query;
	console.log(params.username,params.age);
	// res.end(`<p>用户名：${params.username}</p>
	// 		<p>年龄：${params.age}</p>`);
	
	
	let  json = JSON.stringify({
		"username":"wanwu",
		"age":60
	})
	res.end(json);
}).listen(8000,'localhost');