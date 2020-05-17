const express = require('express');
const route = express.Router();
const mysql = require('mysql');
const moment = require('moment');
//数据库连接池配置
var pool = mysql.createPool({
	connectionLimit:10,//连接池大小
	host:'localhost',//主机
	user :'root',//数据库用户名
	password :'xzx123456',//密码
	database:'hrprodbtwo'//数据库名称
});
route.get("/getStudents",(req,res)=>{
	console.log(req.query.stuname);
	let sql = "select * from student where 1=1";
	let params = [];
	//拼接sql语句
	if(req.query.stuno){
		sql+=" and StudentNo = ?";
		params.push(req.query.stuno);
	}
	//根据筛选条件查询学生信息（学生姓名条件可能有可能没有）
	if(req.query.stuname){
		sql +=" and StudentName like ?";
		params.push("%"+ req.query.stuname + "%");
		console.log(sql,params)
	}
	console.log('getStudents:',req.query);
	
	pool.getConnection(function(err,connection){
		if(err) throw err;
		connection.query(sql,params,function(error,results,fields){
			connection.release();
			console.log(results);
			//将查询结果传入到ejs中进行渲染展示
			res.render('student',{
				res:results,
				moment:moment,
				stuname:req.query.stuname,
				stuno:req.query.stuno
			})
			if(error)throw error;
		});
	});
	
})
route.get('/deleteStu',(req,res)=>{
	//接收删除的studentno
	let sql = "delete from student where StudentNo=?";
	let params = [req.query.id];
	
	pool.getConnection(function(err,connection){
		if(err) throw err;
		connection.query(sql,params,function(error,results,fields){
			connection.release();
			console.log(results);
			//返回状态
			res.json({
				delstatus:1
			})
			if(error)throw error;
		});
	});
})
//显示编辑页面
route.get('/editStu',(req,res)=>{
	//接收student 查询当前学生的所有信息
	//将查询的信息，渲染到编辑页面中
	let sql = "select * from student where studentno=?";
	let params = [req.query.studentno];
	pool.getConnection(function(err,connection){
		if(err) throw err;
		connection.query(sql,params,function(error,results,fields){
			connection.release();
			console.log(results);
			res.render('editStu',{
				studentobj:{
					StudentNo:results[0].StudentNo,
					StudentName:results[0].StudentName,
					Sex:results[0].Sex,
					Address:results[0].Address,
					Email:results[0].Email
				}
			})
			if(error)throw error;
		});
	});
})
//修改学生
route.get('/updateStudent',(req,res)=>{
	//获取到student所有信息（编号，姓名，性别，住址，email）
	let sql = `update student set studentname=?,
									sex=?,
									address=?,
									email=?
								where studentno=?`;
	let params = [];
	params.push(req.query.StudentName);
	params.push(req.query.Sex);
	params.push(req.query.Address);
	params.push(req.query.Email);
	params.push(req.query.StudentNo);
	pool.getConnection(function(err,connection){
		if(err) throw err;
		connection.query(sql,params,function(error,results,fields){
			connection.release();
			console.log(results);
			//回到首页
			res.redirect('/getStudents');
			if(error)throw error;
		});
	});
})
module.exports = route;//暴露