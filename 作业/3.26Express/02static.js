let express = require('express');
let app = express();
/* app.use()
	第一个参数：路径，/ /*所有路径 /temp指定路径 */
/* 中间件：完成特定功能的函数
	在一个请求中可以使用多个中间件
	第二个参数：回调函数，指定特定功能的代码
	next结束当前中间件，执行下一个中间件。（如果不调用可能会出现死循环）*/
// app.use("/temp",(req,res,next)=>{
// 	console.log("我是第一个中间件");
// 	next();//继续执行下一个中间件
// })
// app.use("/",(req,res,next)=>{
// 	console.log("我是第二个中间件");
// 	next();
// })
// app.get('/',(req,res)=>{
// 	console.log("执行默认响应");
// 	res.send("");
	
// })
// app.get('/temp',(req,res)=>{
// 	console.log("执行temp响应");
// 	res.send("");
// })

/* 系统内置了一个express.static中间件，专门用于加载静态资源 */
app.use(express.static('static'));
app.use(express.static('static2'));
// app.get('/',(req,res)=>{
// 	console.log('执行响应')
// 	res.send('');
// })
app.listen(8000,()=>{
	console.log("访问地址：http://localhost:8000")
});