let http = require('http');
let fs = require('fs');

http.createServer((req,res)=>{
	//不处理小图标的请求
	if (req.url == '/favicon.ico'){return;}
	
	//检测状态
	fs.stat('./05stat.js',(err,stats)=>{
		if(err){
			throw err;
		}else{
			console.log(stats.isDirectory());//false不是目录
			console.log(stats.isFile());//true是文件
		}
	})
	res.end('')
}).listen(8000)