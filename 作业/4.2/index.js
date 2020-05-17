let fs = require('fs');
const server = require('http').createServer((req,res)=>{
	if(req.url == '/favicon.ico'){return;}
	if(req.url=="/"){
		fs.readFile('./socket.html',(err,data)=>{
			res.end(data);
		})
	}
});

const io = require('socket.io')(server);
io.on("connection",client=>{
	client.on('ask',data=>{
		
		console.log('接收的消息：',data);
		io.emit('back','服务器返回数据'+data);
	});
});
server.listen(8000);