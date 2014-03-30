/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

$(document).ready(function(){
	$(".menu > li").click(function(e){
		switch(e.target.id){
			case "coa":
				//change status & style menu
				
				$("#coa").addClass("active");
				$("#col").removeClass("active");
				$("#df").removeClass("active");
				$("#dur").removeClass("active");
				$("#mex").removeClass("active");
				$("#gua").removeClass("active");
				//display selected division, hide others
				$("div.coa").fadeIn();
				
				$("div.col").css("display", "none");
				$("div.df").css("display", "none");
				$("div.dur").css("display", "none");
				$("div.mex").css("display", "none");
				$("div.gua").css("display", "none");
			break;
			case "col":
				//change status & style menu
				
				$("#coa").removeClass("active");
				$("#col").addClass("active");
				$("#df").removeClass("active");
				$("#dur").removeClass("active");
				$("#mex").removeClass("active");
				$("#gua").removeClass("active");
				//display selected division, hide others
				$("div.col").fadeIn();
				$("div.coa").css("display", "none");
				$("div.df").css("display", "none");
				$("div.dur").css("display", "none");
				$("div.mex").css("display", "none");
				$("div.gua").css("display", "none");
			break;
			case "df":
				//change status & style menu
				
				$("#coa").removeClass("active");
				$("#col").removeClass("active");
				$("#df").addClass("active");
				$("#dur").removeClass("active");
				$("#mex").removeClass("active");
				$("#gua").removeClass("active");
				//display selected division, hide others
				$("div.df").fadeIn();
				$("div.coa").css("display", "none");
				$("div.col").css("display", "none");
				$("div.dur").css("display", "none");
				$("div.mex").css("display", "none");
				$("div.gua").css("display", "none");
			break;
			case "dur":
				//change status & style menu
				
				$("#coa").removeClass("active");
				$("#col").removeClass("active");
				$("#df").removeClass("active");
				$("#dur").addClass("active");
				$("#mex").removeClass("active");
				$("#gua").removeClass("active");
				//display selected division, hide others
				$("div.dur").fadeIn();
				$("div.coa").css("display", "none");
				$("div.col").css("display", "none");
				$("div.df").css("display", "none");
				$("div.mex").css("display", "none");
				$("div.gua").css("display", "none");
			break;
			case "mex":
				//change status & style menu
				
				$("#coa").removeClass("active");
				$("#col").removeClass("active");
				$("#df").removeClass("active");
				$("#dur").removeClass("active");
				$("#chi").addClass("active");
				$("#gua").removeClass("active");
				//display selected division, hide others
				$("div.mex").fadeIn();
				$("div.coa").css("display", "none");
				$("div.col").css("display", "none");
				$("div.df").css("display", "none");
				$("div.dur").css("display", "none");
				$("div.gua").css("display", "none");
			break;
			case "gua":
				//change status & style menu
				
				$("#coa").removeClass("active");
				$("#col").removeClass("active");
				$("#df").removeClass("active");
				$("#dur").removeClass("active");
				$("#chi").removeClass("active");
				$("#gua").addClass("active");
				//display selected division, hide others
				$("div.gua").fadeIn();
				$("div.coa").css("display", "none");
				$("div.col").css("display", "none");
				$("div.df").css("display", "none");
				$("div.dur").css("display", "none");
				$("div.mex").css("display", "none");
			break;
		}
		//alert(e.target.id);
		return false;
	});
});