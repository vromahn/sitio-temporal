/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

$(document).ready(function(){
	$(".menu > li").click(function(e){
		switch(e.target.id){
			case "tamps":
				//change status & style menu
				
				$("#tamps").addClass("active");
				$("#tlax").removeClass("active");
				$("#ver").removeClass("active");
				$("#yuc").removeClass("active");
				$("#zac").removeClass("active");
				
				
				//display selected division, hide others
				$("div.tamps").fadeIn();
				$("div.tlax").css("display", "none");
				$("div.ver").css("display", "none");
				$("div.yuc").css("display", "none");
				$("div.zac").css("display", "none");
				
				
				
			break;
			
			case "tlax":
				//change status & style menu
				
				$("#tamps").removeClass("active");
				$("#tlax").addClass("active");
				$("#ver").removeClass("active");
				$("#yuc").removeClass("active");
				$("#zac").removeClass("active");
				
				
				
				//display selected division, hide others
				$("div.tlax").fadeIn();
				$("div.tamps").css("display", "none");
				$("div.ver").css("display", "none");
				$("div.yuc").css("display", "none");
				$("div.zac").css("display", "none");
			
				
			break;
			
			case "ver":
				//change status & style menu
				
				$("#tamps").removeClass("active");
				$("#tlax").removeClass("active");
				$("#ver").addClass("active");
				$("#yuc").removeClass("active");
				$("#zac").removeClass("active");
				
				
				//display selected division, hide others
				$("div.ver").fadeIn();
				$("div.tamps").css("display", "none");
				$("div.tlax").css("display", "none");
				$("div.yuc").css("display", "none");
				$("div.zac").css("display", "none");
				
			break;
			case "yuc":
				//change status & style menu
				
				
				$("#tamps").removeClass("active");
				$("#tlax").removeClass("active");
				$("#ver").removeClass("active");
				$("#yuc").addClass("active");
				$("#zac").removeClass("active");
				
				
				//display selected division, hide others
				$("div.yuc").fadeIn();
				$("div.tamps").css("display", "none");
				$("div.tlax").css("display", "none");
				$("div.ver").css("display", "none");
				$("div.zac").css("display", "none");
				
			break;
			case "zac":
				//change status & style menu
				
				
				$("#tamps").removeClass("active");
				$("#tlax").removeClass("active");
				$("#ver").removeClass("active");
				$("#yuc").removeClass("active");
				$("#zac").addClass("active");
				
				
				//display selected division, hide others
				$("div.zac").fadeIn();
				$("div.tamps").css("display", "none");
				$("div.tlax").css("display", "none");
				$("div.ver").css("display", "none");
				$("div.yuc").css("display", "none");
				
				
			break;
			
			
		}
		//alert(e.target.id);
		return false;
	});
});