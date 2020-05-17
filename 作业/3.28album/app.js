//搭建服务器  分配路由
let express = require('express');
let app = express();
let router = require('./router.js');

//设置模板引擎
app.set('view engine','ejs');

//加载静态资源
app.use(express.static('public'));
app.use(express.static('uploadimg'));

app.get('/',router.indexPage);
//渲染跳转页面
app.get('/upload',router.upload);

app.post('/POSTIMG',router.postimg);
app.get('/allphoto',router.allphoto);

//404页面 前面的处理匹配到了就不会走到这里
app.use((req,res)=>{
	res.render('404');
})

app.listen(8000);