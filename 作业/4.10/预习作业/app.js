let express= require('express');
let app= express();
let  mysql = require('mysql');
let setting = require('./settings');
//createConnection方法创建连接对象（正式的说法：使用createConnection方法创建一个表示与mysql数据库服务器之间连接的connection对象
let connection = mysql.createConnection(setting.db);
connection.connect();

let selectSQL= 'select * from student';
let  arr=[];
connection.query(selectSQL,(err,res)=>{
    if (err) {
        throw err;
        return;
    }
    for(let i= 0;i<res.length;i++){
        arr[i]=res[i]
    }
    app.get('/',(req,res)=>{
        res.send(arr);
    })
});
connection.end();
app.listen(8000);