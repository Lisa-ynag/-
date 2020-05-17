let http = require('http');
let url = require("url");

http.createServer((req,res)=>{
	//不处理小图标的请求
	if (req.url == '/favicon.ico'){return;}
	//设置响应头
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8","Access-Control-Allow-Origin":"*"});
	
	
	
	let  json = JSON.stringify({
    "lists":[
        {
            "imgsrc":"k1.jpg",
            "pti":"SCIO 微型光谱仪",
			"ptitow":"可以测定食物成分寄营养",
			"jiage":"￥1212",
            "xinum":3,
            "renum":3
        
        },
        {
            "imgsrc":"k2.jpg",
            "pti":"B&O BeoSound 35 音响",
			"ptitow":"支持所有音乐流媒体服务",
			"jiage":"￥512",
            "xinum":3,
            "renum":3
        
        },
        {
            "imgsrc":"k3.jpg",
            "pti":"Mozbli 触控吸色笔",
			"ptitow":"能吸取65000种颜色",
			"jiage":"暂无",
            "xinum":3,
            "renum":3
        
        },
        {
            "imgsrc":"k4.jpg",
            "pti":"XPLORER 2 航拍飞行器",
			"ptitow":"搭载自动避障系统",
			"jiage":"￥433",
            "xinum":3,
            "renum":3
        
        },
      {
          "imgsrc":"k1.jpg",
          "pti":"SCIO 微型光谱仪",
      	"ptitow":"可以测定食物成分寄营养",
      	"jiage":"￥1212",
          "xinum":3,
          "renum":3
      
      },
      {
          "imgsrc":"k2.jpg",
          "pti":"B&O BeoSound 35 音响",
      	"ptitow":"支持所有音乐流媒体服务",
      	"jiage":"￥512",
          "xinum":3,
          "renum":3
      
      },
      {
          "imgsrc":"k3.jpg",
          "pti":"Mozbli 触控吸色笔",
      	"ptitow":"能吸取65000种颜色",
      	"jiage":"暂无",
          "xinum":3,
          "renum":3
      
      },
      {
          "imgsrc":"k4.jpg",
          "pti":"XPLORER 2 航拍飞行器",
      	"ptitow":"搭载自动避障系统",
      	"jiage":"￥433",
          "xinum":3,
          "renum":3
      
      },
	   {
	       "imgsrc":"k1.jpg",
	       "pti":"SCIO 微型光谱仪",
	   	"ptitow":"可以测定食物成分寄营养",
	   	"jiage":"￥1212",
	       "xinum":3,
	       "renum":3
	   
	   },
	   {
	       "imgsrc":"k2.jpg",
	       "pti":"B&O BeoSound 35 音响",
	   	"ptitow":"支持所有音乐流媒体服务",
	   	"jiage":"￥512",
	       "xinum":3,
	       "renum":3
	   
	   },
	   {
	       "imgsrc":"k3.jpg",
	       "pti":"Mozbli 触控吸色笔",
	   	"ptitow":"能吸取65000种颜色",
	   	"jiage":"暂无",
	       "xinum":3,
	       "renum":3
	   
	   },
	   {
	       "imgsrc":"k4.jpg",
	       "pti":"XPLORER 2 航拍飞行器",
	   	"ptitow":"搭载自动避障系统",
	   	"jiage":"￥433",
	       "xinum":3,
	       "renum":3
	   
	   },
	  {
	      "imgsrc":"k1.jpg",
	      "pti":"SCIO 微型光谱仪",
	  	"ptitow":"可以测定食物成分寄营养",
	  	"jiage":"￥1212",
	      "xinum":3,
	      "renum":3
	  
	  },
	  {
	      "imgsrc":"k2.jpg",
	      "pti":"B&O BeoSound 35 音响",
	  	"ptitow":"支持所有音乐流媒体服务",
	  	"jiage":"￥512",
	      "xinum":3,
	      "renum":3
	  
	  },
	  {
	      "imgsrc":"k3.jpg",
	      "pti":"Mozbli 触控吸色笔",
	  	"ptitow":"能吸取65000种颜色",
	  	"jiage":"暂无",
	      "xinum":3,
	      "renum":3
	  
	  },
	  {
	      "imgsrc":"k4.jpg",
	      "pti":"XPLORER 2 航拍飞行器",
	  	"ptitow":"搭载自动避障系统",
	  	"jiage":"￥433",
	      "xinum":3,
	      "renum":3
	  
	  }
    ],
	"lists2":[
		{
		    "imgsrc":"k4.jpg",
		    "pti":"XPLORER 2 航拍飞行器",
			"ptitow":"搭载自动避障系统",
			"jiage":"￥433",
		    "xinum":3,
		    "renum":3
		
		},
		{
		    "imgsrc":"k3.jpg",
		    "pti":"Mozbli 触控吸色笔",
			"ptitow":"能吸取65000种颜色",
			"jiage":"暂无",
		    "xinum":3,
		    "renum":3
		
		},
		{
		    "imgsrc":"k1.jpg",
		    "pti":"B&O BeoSound 35 音响",
			"ptitow":"支持所有音乐流媒体服务",
			"jiage":"￥512",
		    "xinum":3,
		    "renum":3
		
		},
		{
		    "imgsrc":"k2.jpg",
		    "pti":"SCIO 微型光谱仪",
			"ptitow":"可以测定食物成分寄营养",
			"jiage":"￥1212",
		    "xinum":3,
		    "renum":3
		
		},
		{
		    "imgsrc":"k3.jpg",
		    "pti":"Mozbli 触控吸色笔",
			"ptitow":"能吸取65000种颜色",
			"jiage":"暂无",
		    "xinum":3,
		    "renum":3
		
		},
	  {
	      "imgsrc":"k4.jpg",
	      "pti":"XPLORER 2 航拍飞行器",
	  	"ptitow":"搭载自动避障系统",
	  	"jiage":"￥433",
	      "xinum":3,
	      "renum":3
	  
	  },
	{
	    "imgsrc":"k1.jpg",
	    "pti":"SCIO 微型光谱仪",
		"ptitow":"可以测定食物成分寄营养",
		"jiage":"￥1212",
	    "xinum":3,
	    "renum":3
	
	},
	  {
	      "imgsrc":"k2.jpg",
	      "pti":"B&O BeoSound 35 音响",
	  	"ptitow":"支持所有音乐流媒体服务",
	  	"jiage":"￥512",
	      "xinum":3,
	      "renum":3
	  
	  },
	 
	  {
	      "imgsrc":"k3.jpg",
	      "pti":"Mozbli 触控吸色笔",
	  	"ptitow":"能吸取65000种颜色",
	  	"jiage":"暂无",
	      "xinum":3,
	      "renum":3
	  
	  },
	  {
	      "imgsrc":"k4.jpg",
	      "pti":"XPLORER 2 航拍飞行器",
	  	"ptitow":"搭载自动避障系统",
	  	"jiage":"￥433",
	      "xinum":3,
	      "renum":3
	  
	  },
	  
	 {
	     "imgsrc":"k2.jpg",
	     "pti":"B&O BeoSound 35 音响",
	 	"ptitow":"支持所有音乐流媒体服务",
	 	"jiage":"￥512",
	     "xinum":3,
	     "renum":3
	 
	 },
	  {
	      "imgsrc":"k3.jpg",
	      "pti":"Mozbli 触控吸色笔",
	  	"ptitow":"能吸取65000种颜色",
	  	"jiage":"暂无",
	      "xinum":3,
	      "renum":3
	  
	  }
		
	]
})
	res.end(json);
}).listen(8000,'localhost');