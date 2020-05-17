
	let p = Promise.resolve($.ajax({url:'js/playData.json'}))
	p.then(
		res=>{
			console.log(res);
			//1.渲染类别名称
			let str = ``;
			res.categorylist.forEach(item=>{
				str +=`<div class="mydiv mydiv1">
				<p class="title">${item.phead}</p>
				<ul class="myul">
				`;
				//带图片的<li></li>
				item.tulist.forEach(tuitem=>{
					str +=`
					<li><a href="#">
					<div><img src="../image/${tuitem.limg}"></div>
					<p>${tuitem.discr}（${tuitem.count}）</p>
					</a></li>
					`
				})
				str+=`</ul> <ul class="myul myul2">`;
				//不带图片的li
				item.zilist.forEach(ziitem=>{
					str+=`<li><a href="#">
							${ziitem.discr}（${ziitem.count})
							</a></li>
						`
				})
				str +=`</ul></div> `
			})
			$('.divbox').html(str);
		}
	)