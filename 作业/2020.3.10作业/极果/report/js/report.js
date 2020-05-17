 $(function(){
	 

  $.ajax({
        url:'./js/report.json',
        dataType:'json',
        success(date){
            let str = '';
            date.lists.forEach(item=>{
                str += ` <div class="myli1Box">
					<div class="bgBox">
						<img src="../image/${item.imgsrc}" >
						<div class="bgChind">
							<p>${item.pti}</p>
							<div class="divbox">
								<div>
									<span class="touxian"><img src="../img/${item.txsrc}" ></span>
									<i>${item.nicheng}</i>
									<span>${item.riqi}</span>
								</div>
								<div class="shouChan">
									<a href="#" class="xin"></a>
									<span class="xinnum">${item.xinum}</span>
									<a href="#" class="reply"></a>
									<span class="rennum">${item.renum}</span>
								</div>
							</div>
							
						</div>
					</div>
					<p class="text"><a href="">${item.text}</a></p>
				</div> `
            });
            $(".listul .myli1").html(str)
        }
    })
	$('.cilk').click(function(){
		$('.cilk').css('display','none');
		$('.cilk2').css('display','block');
	})
 })