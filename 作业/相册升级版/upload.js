let  http = require('http');
let url = require('url');
let staticFn = require("./static.js")//加载静态资源
let formidable = require('formidable');//上传文件
let fs = require("fs"); //读取文件
let path = require("path"); //读取后缀

http.createServer((req,res)=>{
	if(req.url=='favicon.ico'){return;}
	res.writeHead(200,{"Content-Type":"text/plain;charset=UTF-8"});
	//判断是否是Post请求
	if(req.method.toLowerCase()=='get'){
		let requrl = url.parse(req.url,true);
		//console.log(requrl);
		//查看所有图片信息
		if(requrl.pathname=="/showImages"){
			fs.readdir('./uploadimg/'+requrl.query.album,'utf-8',(err,files)=>{
				console.log(files);
				let jsonobj = JSON.stringify({
					"imagearr":files
				})
				res.end(jsonobj);
			})
			
		}else if(requrl.pathname=="/add"){
			//创建相册 在uploadimg下创建文件夹
			//fs.mkdir创建文件夹
			let albumname = requrl.query.albumname;
			//创建之前先读取一遍，如果有就提示已经存在，没有在mkdir
			fs.readdir('./uploadimg',"utf-8",(err,files)=>{
				if(err){
					throw Error('创建相册失败')
				}
				console.log('files',files)
				if(files.indexOf(albumname)==-1){
					fs.mkdir('./uploadimg/'+albumname,err=>{
						if(err){
							throw Error('创建相册失败')
						}
						res.end('创建成功')
					})
				}else{
					console.log(2222)
					res.end('相册已经存在')
				}
			})
		}else if(requrl.pathname=="/deletealbum"){
			//删除相册+以及文件夹下的所以图片
			let path = './uploadimg/'+ requrl.query.album;//得到文件名
			//读取改文件夹下所有文件并且删除
			let files = fs.readdirSync(path);
			console.log(files)
			files.forEach(file=>{
				let delpath = path +"/"+file;
				fs.unlinkSync(delpath);
			})
			//删除文件夹
			fs.rmdir(path,err=>{
				if(err){
					throw Error('删除文件夹失败')
				}
				res.end(JSON.stringify({
					"delstatus":1
				}))
			})
			
		}else if(requrl.pathname=="/showallalbum"){
			//显示所有相册 readdir
			fs.readdir('./uploadimg',"utf-8",(err,files)=>{
				if(err){
					throw Error('读取失败')
				}
				res.end(JSON.stringify({
					"album":files
				}))
			})
			
		}else{
			staticFn(requrl.pathname,res);
		}
		
		
	}else{
		//post请求，上传图片功能
		//1.创建一个formidable对象
		let form = new formidable.IncomingForm();
		//2.设置文件上传的路径
		form.uploadDir = "./uploadimg";
		//3.设置上传文件保留原来文件的扩展名，默认是false
		form.keepExtensions = true;
		//4.parse()解析node中req解析的数据
		form.parse(req,(err,fields,files)=>{
			//console.log(fields);
			//console.log(files);
			 if(err) throw err;
			
			/* 由于上传的名称默认会被第三方模块进行命名
			 为了避免重名的情况以及一般会根据自己的规则进行存放
			 （随机数+时间数）*/
			 //__dirname全局变量，可以获取到当前文件所在文件夹的完整路径
			 // cons.log(__dirname)//
			 //获取到原来的上传路径
			 let oldPath = __dirname + "/" + files.pic.path;
			 //随机数+时间戳
			 let random = parseInt(Math.random()*10000);
			 let time = +new Date();
			 //console.log(time);
			 
			 //获取后缀名
			 let extname = path.extname(files.pic.name);
			 let newPath = __dirname+'/uploadimg/'+fields.album+"/"+random+time+extname;
			 //重命名fs.rename(oldPath,newPath,callback)
			 fs.rename(oldPath,newPath,err=>{
				 console.log(oldPath);
				 console.log(newPath);
				 if(err){
					 throw Error("重命名失败！"+err);
				 }
				 res.end('success');
			 })	
		})
	}
	
}).listen(3000)