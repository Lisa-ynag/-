 $(function(){
	 

  $.ajax({
        url:'http://localhost:8000',
        dataType:'json',
        success(date){
            let str = '';
            date.lists.forEach(item=>{
                str += ` <li>
		  <div class="liimg">
			  <img src="../image/${item.imgsrc}" >
		  </div>
		  <p class="pti">
			  ${item.pti}
		  </p>
		  <p class="ptitow">
		  			  ${item.ptitow}
		  </p>
		  
		  <div class="lidi">
			<span class="jiage">${item.jiage}</span>
			<div class="right">
			  <a href="#" class="xin"></a>
			  <span class="xinnum">${item.xinum}</span>
			  <a href="#" class="reply"></a>
			  <span class="rennum">${item.renum}</span>
			  </div>
		  </div>
		  
	  </li> `
            });
            $(".listul").html(str)
        }
    })
	$('.cilk').click(function(){
		$('.cilk').css('display','none');
		$('.cilk2').css('display','block');
	})
 })