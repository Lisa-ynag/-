let express = require('express');
let app = express();

//配置模板
app.set("view engine","ejs");

app.set("views",__dirname+"/ejs");

app.get('/',(req,res)=>{
	console.log('响应');
	//渲染页面 render（被渲染的模板引擎的名称，数据）
	res.render('index',{
		person:{
			name:'liyang',
			age:18
		},
		arr:[
			{proname:"电视",price:2000},
			{proname:"眼镜",price:200},
			{proname:"手机",price:3000}
		]
	})
})
app.listen(8000);