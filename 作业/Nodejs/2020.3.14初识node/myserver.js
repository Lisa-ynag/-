//导入模块
let http = require('http');
//创建服务器，接收浏览器发送过来的请求
http.createServer((req,res)=>{
	//设置响应头 方式一
	//res.setHeader(name,value)
	//res.setHeader("Content-type":"text/html;charset=UTF-8");
	//设置响应头 方式二
	//res.writeHead（状态码，状态描述内容）
	//text/html 表示网页
	//text/plain纯文本
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
	res.write("<h1>开开心心的标题</h1>");
	res.write("<p>段落一下</p>");
	res.end('恭喜你，成功了');
}).listen(8000,"localhost");
