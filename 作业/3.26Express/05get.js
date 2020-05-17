let express = require('express');
let app = express();
//解决同服务器跨域问题
app.use(express.static('static'));

app.get('/',(req,res)=>{
	console.log(req.query);
	res.send({
		msg:"temp"
	})
})
app.listen(8000);