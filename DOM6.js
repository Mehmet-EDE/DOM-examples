// createElement removeChild
function islem(){
	var a=document.createElement("p");
	console.log(a);
}
function sil(){
	var b=document.getElementById("liste1");
	b.removeChild(b.childNodes[0]);
}
function ekle(){
	var c=document.createElement("LI");
	var d=document.createTextNode("ewqdada");
	c.appendChild(d);
	document.getElementById("liste1").appendChild(c);
}
function degistir(){
	var e=document.createTextNode("EDE");
	console.log(e);
	var f=document.getElementById("liste1").childNodes[2];
	console.log(f);
	f.replaceChild(e, f.childNodes[0]);
} 