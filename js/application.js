function validateForm(){
	var n=document.forms["myForm"]["nombre"].value;
	var x=document.forms["myForm"]["correo"].value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
  		alert("Dirección de correo no válida");
  	return false;
  }
}


function menu_blue(color){
				$("#dmenu-orange").css("display","none");
				$("#dmenu-red").css("display","none");
				$("#dmenu-green").css("display","none");
				$("#dmenu-purple").css("display","none");
				$("#dmenu-yellow").css("display","none");
				$("#dmenu-blue").slideToggle("slow");
			}

function menu_orange(color){
				$("#dmenu-blue").css("display","none");
				$("#dmenu-red").css("display","none");
				$("#dmenu-green").css("display","none");
				$("#dmenu-purple").css("display","none");
				$("#dmenu-yellow").css("display","none");
				
				$("#dmenu-orange").slideToggle("slow");
			}

function menu_red(color){
				$("#dmenu-orange").css("display","none");
				$("#dmenu-blue").css("display","none");
				$("#dmenu-green").css("display","none");
				$("#dmenu-purple").css("display","none");
				$("#dmenu-yellow").css("display","none");
				
				$("#dmenu-red").slideToggle("slow");
			}

function menu_green(color){
				$("#dmenu-orange").css("display","none");
				$("#dmenu-red").css("display","none");
				$("#dmenu-blue").css("display","none");
				$("#dmenu-purple").css("display","none");
				$("#dmenu-yellow").css("display","none");
				
				$("#dmenu-green").slideToggle("slow");
			}

function menu_purple(color){
				$("#dmenu-orange").css("display","none");
				$("#dmenu-red").css("display","none");
				$("#dmenu-green").css("display","none");
				$("#dmenu-blue").css("display","none");
				$("#dmenu-yellow").css("display","none");
				
				$("#dmenu-purple").slideToggle("slow");
			}

function menu_yellow(color){
				$("#dmenu-orange").css("display","none");
				$("#dmenu-red").css("display","none");
				$("#dmenu-green").css("display","none");
				$("#dmenu-purple").css("display","none");
				$("#dmenu-blue").css("display","none");
				
				$("#dmenu-yellow").slideToggle("slow");
			}


$(function(){
	$("#close-button-blue").click(function(){
		$("#dmenu-blue").slideToggle("slow");
	});
});


$(function(){
	$("#close-button-orange").click(function(){
		$("#dmenu-orange").slideToggle("slow");
	});
});

$(function(){
	$("#close-button-red").click(function(){
		$("#dmenu-red").slideToggle("slow");
	});
});

$(function(){
	$("#close-button-green").click(function(){
		$("#dmenu-green").slideToggle("slow");
	});
});

$(function(){
	$("#close-button-purple").click(function(){
		$("#dmenu-purple").slideToggle("slow");
	});
});

$(function(){
	$("#close-button-yellow").click(function(){
		$("#dmenu-yellow").slideToggle("slow");
	});
});
