let mysql = require('mysql');
let connection = mysql.createConnection({
	host:'localhost',
	user :'root',
	password :'xzx123456',
	database:'hrprodbtwo'
})
connection.connect(err=>{
	if(err){
		console.log('connection error',err);
		return;
	}
	console.log('connection success!')
});//连接
//插入
// let insertstr = 'INSERT INTO student (StudentNo,LoginPwd,StudentName,Sex,GradeId,Phone,Address,BornDate,Email,IdentityCard) VALUES (?,?,?,?,?,?,?,?,?,?)';
// let insertparam = ['10866','111666','李洋','1','11','13897643215','湖南省长沙市','1993-12-1','liyang@qq.com','431126199308164628'];
// connection.query(insertstr,insertparam,(err,res)=>{
// 	if(err){
// 		console.log('插入失败',err);
// 		return;
// 	}
// 	console.log('插入成功',res)
// })
//删除
// let delstr = 'DELETE FROM student WHERE StudentNo= ?';
// let delparam = [10066];
// connection.query(delstr,delparam,(err,res)=>{
// 	if(err){
// 		console.log('删除失败',err);
// 		return;
// 	}
// 	console.log('删除成功',res)
// })

//修改
// let updatestr = 'UPDATE student SET Address=? , Email=? WHERE studentno = ?'
// let updateparam = ['长沙市','liyan@qq.com','1001'];
// connection.query(updatestr,updateparam,(err,res)=>{
// 	if(err){
// 		console.log('修改失败',err);
// 		return;
// 	}
// 	console.log('修改成功',res)
// })

//查询
let eleestr = `SELECT * FROM student LIMIT 10,10`
connection.query(eleestr,(err,res)=>{
	if(err){
		console.log('查询失败',err);
		return;
	}
	console.log('查询成功',res)
})
connection.end();//结束