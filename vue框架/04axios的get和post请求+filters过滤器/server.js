let express = require('express');
let app = express();
let bodyParser = require('body-parser');

//设置允许跨域服务该服务
app.all('*',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	//'Access-Control-Allow-Origin',可以根据浏览器的f12查看，把对应的粘贴咋这里就行
	res.header('Access-Control-Allow-Headers','*');
	//res.header('Content-Type','application/json;charset=utf-8');
	next();
});
//get (地址，服务对应的地址触发的回调函数)
//求和
app.get('/get',(req,res)=>{
	let json = JSON.stringify({
		"result":parseInt(req.query.a)+parseInt(req.query.b),
	})
	res.send(json);
})
//解析
app.use(bodyParser.urlencoded({extended:false}))

//减法
app.post('/post',(req,res)=>{
	let json = JSON.stringify({
		"result":parseInt(req.body.a)-parseInt(req.query.b),
	})
	res.send(json);
})
app.listen(8000,()=>{
	console.log("访问地址：http://localhost:8000")
});