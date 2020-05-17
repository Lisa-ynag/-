let fs = require("fs"); //读取文件
let path = require("path"); //读取后缀

function staticFn(pathname, res) {
	//根据名称 获取到后缀，设置不同的响应头 path
	//根据名称 读取static文件夹下的对应文件 fs
	let extname = path.extname(pathname);
	if (extname == ".html") {
		//读取文件 fs,readFile()
		fs.readFile('./static' + pathname, (err, data) => {
			if (err){
				//如果html地址输入错误，跳转到404页面 fs,readFile('404')
				fs.readFile('./static/404.html', (err, data) =>{
					res.end(data)
				})
			} else {
				//设置响应头
				res.writeHead(200, {"Content-Type": "text/html;charset=TUF-8"});
				res.end(data)
			}
		})
	} else if (extname == ".js") {
		fs.readFile('./static/js' + pathname, (err, data) => {
			//设置响应头
			res.writeHead(200, {"Content-Type": "text/html;charset=TUF-8"});
			res.end(data)
		})

	} else {
		fs.readFile('./uploadimg' + pathname, (err, data) => {
			//设置响应头
			res.writeHead(200, {"Content-Type": "image/jpg"});
			res.end(data)
		})
	}
}
module.exports = staticFn;
