let http = require('http');
let fs = require('fs');
let url = require('url');
let path = require('path');

http.createServer((req, res) => {
	//不处理小图标的请求
	if (req.url == '/favicon.ico') {return;}
	
	
	let pathname = url.parse(req.url).pathname;
	
	console.log(pathname);
	fs.readFile('./staticdemo' + pathname,(err,data) => {
		if(err){
			/* throw err;
			    当地址输入不正确时，显示404页面*/
			fs.readFile("./staticdemo/404.html",(err,data) => {
				res.writeHead(200, {
					"Content-type": "text/html;charset=utf-8"
				});
				res.end(data);
			})
		} else {
			/* 需要根据不同的后缀设置不同的响应头
			   使用path模块的extname()可以的到扩展名*/
			let extname = path.extname(pathname);
			let contenthead = getHead(extname);
			res.writeHead(200,{
				"Content-type": contenthead
			});
			res.end(data);
		}
	})
	
}).listen(8000);

function getHead(extname){
	switch(extname){
		case '.html':
			return "text/html;charset=UTF-8";
		case '.png':
			return "image/jpg";
		case '.css':
			return "text/css";
	}
	
}
