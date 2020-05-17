let http = require('http');
let url = require('url');
//URL:
//http://localhost:8000/news?id=100&status=1#temp
http.createServer((req,res)=>{
	//每次请求都会请求ico图标。if忽略图标请求的处理
	if(req.url =='/favicon.ico'){
		return;
	}
	//format()可以将一个复杂的url对象转换成url
	//:对一个url对象进行格式化操作，返回一个url字符串
	let urlObj = {
		protocol:"http",//协议
		host:'192.168.0.1:8000',//ip和端口号
		pathname:'news',//路径
		query:{id:100,status:1},//请求参数
		hash:'#temp'
	}
	let obj = url.format(urlObj);
	//console.log(obj);
	
	//url.resolve():返回一个"form/to"的字符串，相当于对路径进行拼接
	let result = url.resolve("http://test.com/news","/student");
	console.log(result);//http://test.com/student
	
	res.end();
	
}).listen(8000,'localhost');