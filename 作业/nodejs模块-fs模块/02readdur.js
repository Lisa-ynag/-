let http = require('http');
let fs = require('fs');

http.createServer((req,res)=>{
	//不处理小图标的请求
	if (req.url == '/favicon.ico'){return;}
	
	//fs.readdir(路径，[，设置读取选项]，读取完成后的回调函数(err,files))
	// fs.readdir('./','utf-8',(err,files)=>{
	// 	console.log(files);
	// 	res.end();
	// })
	
	//2.读取imgages文件夹下第一张图片
	fs.readdir('./images/',"utf-8",(err,files)=>{
		console.log(files);
		fs.readFile('./images/'+files[0],(err,data)=>{
			res.end(data);
		})
	})
	
}).listen(8000)