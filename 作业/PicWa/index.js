var express = require("express");
var app = express();
var formidable = require("formidable");
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
	extended: false
}));

var router = require("./router.js");

//配置静态
app.use(express.static("static"));
app.use(express.static("upload"));

//配置模板
app.set("view engine", "ejs");
//配置模板路径文件夹
app.set("views", __dirname + "/ejs");

//配置首页指向到index.ejs
app.get("/", router.index);

//上传页面
app.get("/load", router.load);

//上传图片方法
app.post("/loadFile", router.loadFile1);

//查看页面
app.get("/showImg", router.showImg);

//查看图片本体
app.get("/showImgFun", router.showImgFun);

//创建页面
app.get("/mkdir", router.mkdir1);

//创建文件方法本体
app.get("/mkdirDo", router.mkdirDo);

//修改页面
app.get("/rename", router.rename1);

//修改名字本体
app.get("/renameDo", router.renameDo);

//动态读取所有相册名
app.get("/findAlbum", router.findAlbum);



//配置404页面,防止别人乱跑
app.use(router.error);

app.listen(3000);
