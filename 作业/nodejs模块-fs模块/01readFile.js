let http = require('http');
let fs = require('fs');
http.createServer((req,res)=>{
	//不处理小图标的请求
	if (req.url == '/favicon.ico'){
		return;
	}
	//设置响应头
	//res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
		
		//1.读取文本
		/* fs.readFile(路径[，设置读取选项]，读取完成后的回调函数(err,data)) 
				如果没有设置第二个参数，则返回原始的buffer。*/
		// fs.readFile('./01test.txt',"UTF-8",(err,data)=>{
		// 	console.log(data);
		// 	res.end(data);
		// });
		// //2读取图片
		res.writeHead(200,{"Content-type":"image/jpg"});
		fs.readFile('./temp.png',(err,data)=>{
			res.end(data);
		});
		//3.读取网页html
		// res.writeHead(200,{
		// 	"Content-type":"text/html;charset=UTF-8"
		// 	});
		// fs.readFile('./01index.html',(err,data)=>{
		// 	res.end(data);
		// });
}).listen(8000)