let http = require('http');
let fs = require('fs');

http.createServer((req,res)=>{
	//不处理小图标的请求
	if (req.url == '/favicon.ico'){return;}
	
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
	//创建文件夹
	fs.mkdir("./myfolder",err=>{
		if(err){
			throw err;
		}else{
			//文件夹创建成功后，继续在该文件夹内创建文件
			fs.writeFile('./myfolder/temp.txt','时间呀',err=>{
				res.end('文件写好啦');
			})
		}
	})
	
}).listen(8000)