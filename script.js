var showText1Var = true;
var showText2Var = true;
var showText3Var = true; 
var showText4Var = true; 
var showText5Var = true; 

function showText1() {
	if (showText1Var == true){
   		document.getElementById('text1').style.display = "block";
   		showText1Var = false;
	}
   	else{
   		document.getElementById('text1').style.display = "none";
   		showText1Var = true;
   	}	
}

function showText2() {
   if (showText2Var == true){
   		document.getElementById('text2').style.display = "block";
   		document.getElementById('text2a').style.display = "block";
   		showText2Var = false;
	}
   	else{
   		document.getElementById('text2').style.display = "none";
   		document.getElementById('text2a').style.display = "none";
   		showText2Var = true;
   	}	
}

function showText3() {
   if (showText3Var == true){
   		document.getElementById('text3').style.display = "block";
   		showText3Var = false;
	}
   	else{
   		document.getElementById('text3').style.display = "none";
   		showText3Var = true;
   	}	
}

function showText4() {
   if (showText4Var == true){
   		document.getElementById('text4').style.display = "block";
   		document.getElementById('text4a').style.display = "block";
   		showText4Var = false;
	}
   	else{
   		document.getElementById('text4').style.display = "none";
   		document.getElementById('text4a').style.display = "none";
   		showText4Var = true;
   	}	
}

function showText5() {
   if (showText5Var == true){
   		document.getElementById('text5').style.display = "block";
   		document.getElementById('text5a').style.display = "block";
   		showText5Var = false;
	}
   	else{
   		document.getElementById('text5').style.display = "none";
   		document.getElementById('text5a').style.display = "none";
   		showText5Var = true;
   	}	
}
