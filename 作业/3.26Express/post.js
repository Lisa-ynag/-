let express = require('express');
let app = express();
let bodyParser= require('body-parser');


//加载静态资源
 app.use(express.static('static'));
 
 //parse application/x-www-form-urlencoded
 //解析
 app.use(bodyParser.urlencoded({extended:false}))
 app.post('/post',(req,res)=>{
	 console.log('post',req.body.username);
	 res.send({msg:"post请求返回的数据"+req.body.username,code:1})
 })
 app.listen(8000);