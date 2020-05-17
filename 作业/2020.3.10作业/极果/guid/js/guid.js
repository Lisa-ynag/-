 $(function(){
	 

  $.ajax({
        url:'./js/guid.json',
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
		  <div class="lidi">
			  <a href="#" class="xin"></a>
			  <span class="xinnum">${item.xinum}</span>
			  <a href="#" class="reply"></a>
			  <span class="rennum">${item.renum}</span>
		  </div>
		  <div class="mydiv mydiv1"></div>
		  <div class="mydiv mydiv2"></div>
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