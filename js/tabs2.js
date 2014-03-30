/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

$(document).ready(function(){
	$(".menu > li").click(function(e){
		switch(e.target.id){
			case "ags":
				//change status & style menu
				$("#ags").addClass("active");
				$("#bc").removeClass("active");
				$("#bcs").removeClass("active");
				$("#camp").removeClass("active");
				$("#chis").removeClass("active");
				$("#chi").removeClass("active");
				//display selected division, hide others
				$("div.ags").fadeIn();
				$("div.bc").css("display", "none");
				$("div.bcs").css("display", "none");
				$("div.camp").css("display", "none");
				$("div.chis").css("display", "none");
				$("div.chi").css("display", "none");
			break;
			case "bc":
				//change status & style menu
				$("#ags").removeClass("active");
				$("#bc").addClass("active");
				$("#bcs").removeClass("active");
				$("#camp").removeClass("active");
				$("#chis").removeClass("active");
				$("#chi").removeClass("active");
				//display selected division, hide others
				$("div.bc").fadeIn();
				$("div.ags").css("display", "none");
				$("div.bcs").css("display", "none");
				$("div.camp").css("display", "none");
				$("div.chis").css("display", "none");
				$("div.chi").css("display", "none");
			break;
			case "bcs":
				//change status & style menu
				$("#ags").removeClass("active");
				$("#bc").removeClass("active");
				$("#bcs").addClass("active");
				$("#camp").removeClass("active");
				$("#chis").removeClass("active");
				$("#chi").removeClass("active");
				//display selected division, hide others
				$("div.bcs").fadeIn();
				$("div.ags").css("display", "none");
				$("div.bc").css("display", "none");
				$("div.camp").css("display", "none");
				$("div.chis").css("display", "none");
				$("div.chi").css("display", "none");
			break;
			case "camp":
				//change status & style menu
				$("#ags").removeClass("active");
				$("#bc").removeClass("active");
				$("#bcs").removeClass("active");
				$("#camp").addClass("active");
				$("#chis").removeClass("active");
				$("#chi").removeClass("active");
				//display selected division, hide others
				$("div.camp").fadeIn();
				$("div.ags").css("display", "none");
				$("div.bc").css("display", "none");
				$("div.bcs").css("display", "none");
				$("div.chis").css("display", "none");
				$("div.chi").css("display", "none");
			break;
			case "chis":
				//change status & style menu
				$("#ags").removeClass("active");
				$("#bc").removeClass("active");
				$("#bcs").removeClass("active");
				$("#camp").removeClass("active");
				$("#chis").addClass("active");
				$("#chi").removeClass("active");
				//display selected division, hide others
				$("div.chis").fadeIn();
				$("div.ags").css("display", "none");
				$("div.bc").css("display", "none");
				$("div.bcs").css("display", "none");
				$("div.camp").css("display", "none");
				$("div.chi").css("display", "none");
				
			break;
			case "chi":
				//change status & style menu
				$("#ags").removeClass("active");
				$("#bc").removeClass("active");
				$("#bcs").removeClass("active");
				$("#camp").removeClass("active");
				$("#chis").removeClass("active");
				$("#chi").addClass("active");
				//display selected division, hide others
				$("div.chi").fadeIn();
				$("div.ags").css("display", "none");
				$("div.bc").css("display", "none");
				$("div.bcs").css("display", "none");
				$("div.camp").css("display", "none");
				$("div.chis").css("display", "none");
				
			break;
		}
		//alert(e.target.id);
		return false;
	});
});