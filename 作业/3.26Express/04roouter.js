let express = require('express');
let app = express();



app.get('/',(req,res)=>{
	console.log('index');
	res.send("首页")

})
app.get('/about',(req,res)=>{
	res.send('关于我们');
})
app.post('/',(req,res)=>{
	res.send('post');
})
app.listen(8000);