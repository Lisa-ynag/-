let http = require("http");
let fs = require("fs");//对文件重命名
let formidable = require('formidable');//上传文件
let path = require("path");//获取后缀名

http.createServer((req,res)=>{
	if(req.method.toLocaleLowerCase()=="post"){
		//1.创建一个formidable对象
		let form = new formidable.IncomingForm();
		//2.设置文件上传的路径
		form.uploadDir = "./uploadimg";
		//3.设置上传文件保留原来文件的扩展名，默认是false
		form.keepExtensions = true;
		//4.parse()解析node中req解析的数据
		form.parse(req,(err,fields,files)=>{
			console.log(fields);
			console.log(files);
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
			 console.log(time);
			 
			 //获取后缀名
			 let extname = path.extname(files.pic.name);
			 let newPath = __dirname+'/uploadimg/'+random+time+extname;
			 
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
}).listen(8000);