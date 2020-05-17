let http = require('http');
let url = require("url");

http.createServer((req, res) => {
	//不处理小图标的请求
	if (req.url == '/favicon.ico') {
		return;
	}
	//设置响应头
	res.writeHead(200, {
		"Content-type": "text/html;charset=UTF-8",
		"Access-Control-Allow-Origin": "*"
	});

	if (req.method.toUpperCase() == "POST") {
		console.log(req.method);
		//node处理post请求是，会把请求的数据拆分成一小段一小段的二进制数据
		//接收时也是分批接收
		let allData = "";
		req.on("data", chunk => {
			//有数据传来就会对应的触发data
			allData += chunk;
		})
		//当所有Post请求的数据接收完毕后，会触发回调函数
		req.on("end", () => {
			let dataString = allData.toString();
			//解码
			dataString = decodeURIComponent(dataString);
			console.log(dataString);
			res.end(dataString)
		})
	}
}).listen(8000, 'localhost');
