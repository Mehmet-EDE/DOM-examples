function islem(){
	document.getElementById("ede").style.backgroundColor="gold";
    document.getElementById("ede").style.color="red";
}
//attribute setAtribute 
function islem2(){
	document.getElementById("ede2").setAttribute("href","https://www.youtube.com/");
 var a=document.getElementById("ede2").attributes;
 console.log(a);
}
function targetekle(){
	var b=document.getElementById("ede2");
	console.log(b);
	//console.log(b.hasAttribute("target"));
	if (!b.hasAttribute("target")) {
     b.setAttribute("target","_blank");
	}
}
