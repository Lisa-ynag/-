let mysql = require('mysql');
let connection = mysql.createConnection({
    host:'localhost',
    user :'root',
    password :'xzx123456',
    database:'hrprodbtwo'
})
connection.connect(err=>{
    if (err) {
        console.log('connection error',err);
        return;
    }
    console.log('connection success');
})
//插入
// let insertstr = 'INSERT INTO student (studentNo,loginPwd,StudentName,Sex,GradeId,Phone,Address,BornDate,Email,IdentityCard) VALUES (?,?,?,?,?,?,?,?,?,?)';
// let insertpararm = ['10086','123456','熊大','1','11','18888888888','深圳市宝安区','1999-9-19','xiongda@qq.com','11111111'];
// connection.query(insertstr,insertpararm,(err,res)=>{
//     if (err) {
//         console.log('插入失败',err);
//         return;
//     }
//     console.log('插入成功',res);
// })
//删除
// let delstr = 'DELETE FROM student WHERE StudentNo =?';
// let delparam = '10066';
// connection.query(delstr,delparam,(err,res)=>{
//     if (err) {
//         console.log('删除失败',res);
//         return;
//     }
//     console.log('删除成功',res);
// })
//修改
// let updatestr = 'UPDATE student SET Address =?,Email = ? WHERE StudentNo = ?';
// let updateparam = ['深圳市','123@qq.com','1000'];
// connection.query(updatestr,updateparam,(err,res)=>{
//     if (err) {
//         console.log('修改失败',err);
//         return;
//     }
//     console.log('修改成功',res);
// })
//查询
let elestr= 'SELECT * FROM student LIMIT 10,10'
connection.query(elestr,(err,res)=>{
    if (err) {
        console.log('查询失败',err);
        return;
    }
    console.log('查询成功',res);
})
connection.end();