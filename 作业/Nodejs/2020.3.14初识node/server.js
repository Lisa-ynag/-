//node搭建服务器初体验

/* require表示导包， */
let http = require('http');

/* 
创建了一个服务
表示服务器接收到浏览器发送过来的请求时，对应的进入到方法内的函数。
 */
let server = http.createServer(function(req,res){
	/* req request请求
		res response响应
		设置响应头*/
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
	res.end('hello node! 你好')
})
/* 参数1：端口号（可以随意设置，尽量别设置被占用的端口）
	参数2 ip地址 127.0.0.1 == localhost*/
server.listen(9000,"localhost");
/* cd..返回上级目录命令 */