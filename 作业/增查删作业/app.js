let express = require('express');
let app = express();
let router = require('./router.js');
//设置模板引擎
app.set('view engine','ejs');
//加载静态资源
app.use(express.static('public'));

//首页
app.get("/",router.indexPage);
//进入新增页面
app.get("/addGoods",router.addGoods);
//实现新增功能
app.get("/uploadGoods",router.uploadGoods);
//进入查询页面
app.get("/showGoods",router.showGoods);

//删除产品
app.get("/deleleGoods",router.deleleGoods);

//404页面 前面的处理匹配到了就不会走到这里
app.use((req,res)=>{
	res.render('404');
})

app.listen(8000);