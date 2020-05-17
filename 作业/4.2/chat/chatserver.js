let express = require('express');
let app = express();
let http = require('http');
let session = require('express-session');

//4.配置session
app.use(session({
  secret: 'keyboard cat',//密钥
  resave: false,//如果session没有修改，也重新保存session。默认true
  saveUninitialized: true,//每次请求都设置session cookie
  //cookie: { secure: true }
}))

//1.1将服务器请求交给express进行处理
let server = http.createServer(app);
let io= require('socket.io').listen(server);

//2.1设置模板引擎
app.set("view engine","ejs");
//2.2加载静态资源
app.use(express.static('public'));
app.get('/',(req,res)=>{
	res.render('index');
})
//3.接收昵称，进行校验（非空，重名。。。）
app.get('/check',(req,res)=>{
	console.log(req.query.nickName)
	let nickName = req.query.nickName;
	//非空判断
	if(!nickName){
		res.send('用户昵称不能为空！');
		return;
	}
	//重复判断
	
	//将用户昵称存储到session
	 req.session.nickName = nickName;
	
	//页面跳转
	res.redirect('/chat');
	
})
//4.使用session 配置

//5.聊天页面处理
app.get('/chat',(req,res)=>{
	res.render('chat',{
		nickName:req.session.nickName,
		});
})
//6.监听/分发
io.on('connection',client=>{
	client.on('ask',data=>{
		io.emit('back',data)
	})
})
//1.2监听
server.listen(3000);