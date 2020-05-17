let express = require('express');
let app = express();
app.get('/',(req,res)=>{
	res.send("hello world");
})
app.listen(8000,()=>{
	console.log("访问地址：http://localhost:8000")
});