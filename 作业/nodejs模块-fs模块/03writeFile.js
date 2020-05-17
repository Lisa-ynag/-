let http = require('http');
let fs = require('fs');

http.createServer((req,res)=>{
	//不处理小图标的请求
	if (req.url == '/favicon.ico'){return;}
	//创建文件
	fs.writeFile('./03hello.txt','hello hello',err=>{
		if(err){
			throw ree;
		}else{
			res.end('success');
		}
	})
	
}).listen(8000)