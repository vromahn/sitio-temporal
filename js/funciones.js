// JavaScript Document
 function fecha(){
	var dayNames = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

	var monthNames = new Array("enero","febrero","marzo","abril","mayo","junio","julio",
                           "agosto","septiembre","octubre","noviembre","diciembre");
	var dt = new Date();
	var y  = dt.getYear();
	if (y < 1000) y +=1900;
		document.write(dayNames[dt.getDay()] + ", " + dt.getDate() + " de " + monthNames[dt.getMonth()] + " de " + y);
 }
 
  function muestraSubMenuV(nombre){	 
  	  if(nombre == 'subMPrograma'){		  				  
		  document.getElementById(nombre).style.display = "block";
	  }	  	 
  }
  
  function ocultaSubMenuV(nombre){
	  if(nombre == 'subMPrograma'){		  				  
		  document.getElementById(nombre).style.display = "none";
	  }		 
  }

  //Precarga las imagenes
  if (document.images) {
	  	lib1 = new Image(315,56); lib1.src = "img/menuV/lib1.gif";
		lib2 = new Image(315,56); lib2.src = "img/menuV/lib2.gif";
		mat1 = new Image(315,56); mat1.src = "img/menuV/mat1.gif";
		mat2 = new Image(315,56); mat2.src = "img/menuV/mat2.gif";
		ali1 = new Image(315,56); ali1.src = "img/menuV/ali1.gif";
		ali2 = new Image(315,56); ali2.src = "img/menuV/ali2.gif";
		reco1 = new Image(315,56); reco1.src = "img/menuV/reco1.gif";
		reco2 = new Image(315,56); reco2.src = "img/menuV/reco2.gif";
		eva1 = new Image(315,56); eva1.src = "img/menuV/eva1.gif";
		eva2 = new Image(315,56); eva2.src = "img/menuV/eva2.gif";
		rieb1 = new Image(315,56); rieb1.src = "img/menuV/rieb1.gif";
		rieb2 = new Image(315,56); rieb2.src = "img/menuV/rieb2.gif";
		cona1 = new Image(315,56); cona1.src = "img/menuV/cona1.gif";
		cona2 = new Image(315,56); cona2.src = "img/menuV/cona2.gif";
		beca1 = new Image(315,56); beca1.src = "img/menuV/beca1.gif";
		beca2 = new Image(315,56); beca2.src = "img/menuV/beca2.gif";
		word1 = new Image(48,28); word1.src = "img/menuV/word1.png";
		word2 = new Image(48,28); word2.src = "img/menuV/word2.png";
		you1 = new Image(48,28); you1.src = "img/menuV/you1.png";
		you2 = new Image(48,28); you2.src = "img/menuV/you2.png";
		fli1 = new Image(48,28); fli1.src = "img/menuV/fli1.png";
		fli2 = new Image(48,28); fli2.src = "img/menuV/fli2.png";
		face1 = new Image(48,28); face1.src = "img/menuV/face1.png";
		face2 = new Image(48,28); face2.src = "img/menuV/face2.png";
		twit1 = new Image(48,28); twit1.src = "img/menuV/twit1.png";
		twit2 = new Image(48,28); twit2.src = "img/menuV/twit2.png";
		issu1 = new Image(48,28); issu1.src = "img/menuV/issu1.png";
		issu2 = new Image(48,28); issu2.src = "img/menuV/issu2.png";
	    us1 = new Image(48,28); us1.src = "img/menuV/us1.png";
		us2 = new Image(48,28); us2.src = "img/menuV/us2.png";
 }
 
 function hiLite(imgName,imgObjName) {
		if (document.images) {					
		  document.images[imgName].src = eval(imgObjName + ".src");
		}
 }
 
 function resaltaDirecciones(nombre){
	 document.getElementById(nombre).style.backgroundImage="url(img/inicio/"+ nombre +".gif)";
 }
 function regresaDirecciones(nombre){
	 document.getElementById(nombre).style.backgroundImage="url(img/inicio/inactivo.gif)";
 }