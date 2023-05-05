

var fonts = ["Arial","Byriani","Calibri","Comic Sans","Courier New","Helvetica Neue", "Impact", "Montserrat","Open Sans","Oswald","Poppins","Roboto","Special Elite","Tahoma","Times New Roman","Ubuntu","Verdana"];
var string = "";
var select = document.getElementById("fonte")
for(var a = 0; a < fonts.length ; a++){
	var opt = document.createElement('option');
	opt.value = opt.innerHTML = fonts[a];
	opt.style.fontFamily = fonts[a];
	select.add(opt);
}
function fontChange(){
	var x = document.getElementById("fonte").selectedIndex;
  var y = document.getElementById("fonte").options;
	document.body.insertAdjacentHTML("beforeend", "<style> #text{ font-family:'"+y[x].text+"';}"+
																	 "#fonte{font-family:'"+y[x].text+"';</style>");
	document.getElementById("box_texto").style.fontFamily = y[x].text;
}

fontChange();

