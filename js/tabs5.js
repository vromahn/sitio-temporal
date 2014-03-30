/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

$(document).ready(function(){
	$(".menu > li").click(function(e){
		switch(e.target.id){
			case "pue":
				//change status & style menu
				
				$("#pue").addClass("active");
				$("#qro").removeClass("active");
				$("#qroo").removeClass("active");
				$("#slp").removeClass("active");
				$("#sin").removeClass("active");
				$("#son").removeClass("active");
				$("#tab").removeClass("active");
				
				//display selected division, hide others
				$("div.pue").fadeIn();
				$("div.qro").css("display", "none");
				$("div.qroo").css("display", "none");
				$("div.slp").css("display", "none");
				$("div.sin").css("display", "none");
				$("div.son").css("display", "none");
				$("div.tab").css("display", "none");
				
				
			break;
			case "qro":
				//change status & style menu
				
				$("#pue").removeClass("active");
				$("#qro").addClass("active");
				$("#qroo").removeClass("active");
				$("#slp").removeClass("active");
				$("#sin").removeClass("active");
				$("#son").removeClass("active");
				$("#tab").removeClass("active");
				
				//display selected division, hide others
				$("div.qro").fadeIn();
				$("div.pue").css("display", "none");
				$("div.qroo").css("display", "none");
				$("div.slp").css("display", "none");
				$("div.sin").css("display", "none");
				$("div.son").css("display", "none");
				$("div.tab").css("display", "none");
				
			break;
			case "qroo":
				//change status & style menu
				
				
				$("#pue").removeClass("active");
				$("#qro").removeClass("active");
				$("#qroo").addClass("active");
				$("#slp").removeClass("active");
				$("#sin").removeClass("active");
				$("#son").removeClass("active");
				$("#tab").removeClass("active");
				
				//display selected division, hide others
				$("div.qroo").fadeIn();
				$("div.pue").css("display", "none");
				$("div.qro").css("display", "none");
				$("div.slp").css("display", "none");
				$("div.sin").css("display", "none");
				$("div.son").css("display", "none");
				$("div.tab").css("display", "none");
				
			break;
			case "slp":
				//change status & style menu
				
				
				$("#pue").removeClass("active");
				$("#qro").removeClass("active");
				$("#qroo").removeClass("active");
				$("#slp").addClass("active");
				$("#sin").removeClass("active");
				$("#son").removeClass("active");
				$("#tab").removeClass("active");
				
				//display selected division, hide others
				$("div.slp").fadeIn();
				$("div.pue").css("display", "none");
				$("div.qro").css("display", "none");
				$("div.qroo").css("display", "none");
				$("div.sin").css("display", "none");
				$("div.son").css("display", "none");
				$("div.tab").css("display", "none");
				
			break;
			case "sin":
				//change status & style menu
				
				$("#pue").removeClass("active");
				$("#qro").removeClass("active");
				$("#qroo").removeClass("active");
				$("#slp").removeClass("active");
				$("#sin").addClass("active");
				$("#son").removeClass("active");
				$("#tab").removeClass("active");
				
				//display selected division, hide others
				$("div.sin").fadeIn();
				$("div.pue").css("display", "none");
				$("div.qro").css("display", "none");
				$("div.qroo").css("display", "none");
				$("div.slp").css("display", "none");
				$("div.son").css("display", "none");
				$("div.tab").css("display", "none");
				;
			break;
			case "son":
				//change status & style menu
				
				$("#pue").removeClass("active");
				$("#qro").removeClass("active");
				$("#qroo").removeClass("active");
				$("#slp").removeClass("active");
				$("#sin").removeClass("active");
				$("#son").addClass("active");
				$("#tab").removeClass("active");
				
				//display selected division, hide others
				$("div.son").fadeIn();
				$("div.pue").css("display", "none");
				$("div.qro").css("display", "none");
				$("div.qroo").css("display", "none");
				$("div.slp").css("display", "none");
				$("div.sin").css("display", "none");
				$("div.tab").css("display", "none");
				
			break;
			case "tab":
				//change status & style menu
				
				$("#pue").removeClass("active");
				$("#qro").removeClass("active");
				$("#qroo").removeClass("active");
				$("#slp").removeClass("active");
				$("#sin").removeClass("active");
				$("#son").removeClass("active");
				$("#tab").addClass("active");
				
				//display selected division, hide others
				$("div.tab").fadeIn();
				$("div.pue").css("display", "none");
				$("div.qro").css("display", "none");
				$("div.qroo").css("display", "none");
				$("div.slp").css("display", "none");
				$("div.sin").css("display", "none");
				$("div.son").css("display", "none");
				
			break;
			
		}
		//alert(e.target.id);
		return false;
	});
});