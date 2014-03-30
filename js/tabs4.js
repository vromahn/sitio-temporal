/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

$(document).ready(function(){
	$(".menu > li").click(function(e){
		switch(e.target.id){
			case "gue":
				//change status & style menu
				
				$("#gue").addClass("active");
				$("#hgo").removeClass("active");
				$("#jal").removeClass("active");
				$("#mich").removeClass("active");
				$("#mor").removeClass("active");
				$("#nay").removeClass("active");
				$("#nl").removeClass("active");
				$("#oax").removeClass("active");
				//display selected division, hide others
				$("div.gue").fadeIn();
				$("div.hgo").css("display", "none");
				$("div.jal").css("display", "none");
				$("div.mich").css("display", "none");
				$("div.mor").css("display", "none");
				$("div.nay").css("display", "none");
				$("div.nl").css("display", "none");
				$("div.oax").css("display", "none");
				
			break;
			case "hgo":
				//change status & style menu
				
				$("#gue").removeClass("active");
				$("#hgo").addClass("active");
				$("#jal").removeClass("active");
				$("#mich").removeClass("active");
				$("#mor").removeClass("active");
				$("#nay").removeClass("active");
				$("#nl").removeClass("active");
				$("#oax").removeClass("active");
				//display selected division, hide others
				$("div.hgo").fadeIn();
				$("div.gue").css("display", "none");
				$("div.jal").css("display", "none");
				$("div.mich").css("display", "none");
				$("div.mor").css("display", "none");
				$("div.nay").css("display", "none");
				$("div.nl").css("display", "none");
				$("div.oax").css("display", "none");
			break;
			case "jal":
				//change status & style menu
				
				
				$("#gue").removeClass("active");
				$("#hgo").removeClass("active");
				$("#jal").addClass("active");
				$("#mich").removeClass("active");
				$("#mor").removeClass("active");
				$("#nay").removeClass("active");
				$("#nl").removeClass("active");
				$("#oax").removeClass("active");
				//display selected division, hide others
				$("div.jal").fadeIn();
				$("div.gue").css("display", "none");
				$("div.hgo").css("display", "none");
				$("div.mich").css("display", "none");
				$("div.mor").css("display", "none");
				$("div.nay").css("display", "none");
				$("div.nl").css("display", "none");
				$("div.oax").css("display", "none");
			break;
			case "mich":
				//change status & style menu
				
				
				$("#gue").removeClass("active");
				$("#hgo").removeClass("active");
				$("#jal").removeClass("active");
				$("#mich").addClass("active");
				$("#mor").removeClass("active");
				$("#nay").removeClass("active");
				$("#nl").removeClass("active");
				$("#oax").removeClass("active");
				//display selected division, hide others
				$("div.mich").fadeIn();
				$("div.gue").css("display", "none");
				$("div.hgo").css("display", "none");
				$("div.jal").css("display", "none");
				$("div.mor").css("display", "none");
				$("div.nay").css("display", "none");
				$("div.nl").css("display", "none");
				$("div.oax").css("display", "none");
			break;
			case "mor":
				//change status & style menu
				
				$("#gue").removeClass("active");
				$("#hgo").removeClass("active");
				$("#jal").removeClass("active");
				$("#mich").removeClass("active");
				$("#mor").addClass("active");
				$("#nay").removeClass("active");
				$("#nl").removeClass("active");
				$("#oax").removeClass("active");
				//display selected division, hide others
				$("div.mor").fadeIn();
				$("div.gue").css("display", "none");
				$("div.hgo").css("display", "none");
				$("div.jal").css("display", "none");
				$("div.mich").css("display", "none");
				$("div.nay").css("display", "none");
				$("div.nl").css("display", "none");
				$("div.oax").css("display", "none");
			break;
			case "nay":
				//change status & style menu
				
				$("#gue").removeClass("active");
				$("#hgo").removeClass("active");
				$("#jal").removeClass("active");
				$("#mich").removeClass("active");
				$("#mor").removeClass("active");
				$("#nay").addClass("active");
				$("#nl").removeClass("active");
				$("#oax").removeClass("active");
				//display selected division, hide others
				$("div.nay").fadeIn();
				$("div.gue").css("display", "none");
				$("div.hgo").css("display", "none");
				$("div.jal").css("display", "none");
				$("div.mich").css("display", "none");
				$("div.mor").css("display", "none");
				$("div.nl").css("display", "none");
				$("div.oax").css("display", "none");
			break;
			case "nl":
				//change status & style menu
				
				$("#gue").removeClass("active");
				$("#hgo").removeClass("active");
				$("#jal").removeClass("active");
				$("#mich").removeClass("active");
				$("#mor").removeClass("active");
				$("#nay").removeClass("active");
				$("#nl").addClass("active");
				$("#oax").removeClass("active");
				//display selected division, hide others
				$("div.nl").fadeIn();
				$("div.gue").css("display", "none");
				$("div.hgo").css("display", "none");
				$("div.jal").css("display", "none");
				$("div.mich").css("display", "none");
				$("div.mor").css("display", "none");
				$("div.nay").css("display", "none");
				$("div.oax").css("display", "none");
			break;
			case "oax":
				//change status & style menu
				
				$("#gue").removeClass("active");
				$("#hgo").removeClass("active");
				$("#jal").removeClass("active");
				$("#mich").removeClass("active");
				$("#mor").removeClass("active");
				$("#nay").removeClass("active");
				$("#nl").removeClass("active");
				$("#oax").addClass("active");
				//display selected division, hide others
				$("div.oax").fadeIn();
				$("div.gue").css("display", "none");
				$("div.hgo").css("display", "none");
				$("div.jal").css("display", "none");
				$("div.mich").css("display", "none");
				$("div.mor").css("display", "none");
				$("div.nl").css("display", "none");
				$("div.nay").css("display", "none");
			break;
		}
		//alert(e.target.id);
		return false;
	});
});