var listaElementoUno = document.getElementById("C1").addEventListener("click",usa);
var listaElementoUno = document.getElementById("C2").addEventListener("click",canada);
var listaElementoUno = document.getElementById("C3").addEventListener("click",france);

function usa() {
	
	alert(
		"ID elemento: "
		+ document.getElementById("C1").id + "\n ISO ID: "
		+ document.getElementById("C1").dataset.id + "\n Dial Code: "
		+ document.getElementById("C1").dataset.dialcode
		);
}	

function canada() {
	
	alert(
		"ID elemento: "
		+ document.getElementById("C2").id + "\n ISO ID: "
		+ document.getElementById("C2").dataset.id + "\n Dial Code: "
		+ document.getElementById("C2").dataset.dialcode
		);
	
}
function france() {
	
	alert(
		"ID elemento: "
		+ document.getElementById("C3").id + "\n ISO ID: "
		+ document.getElementById("C3").dataset.id + "\n Dial Code: "
		+ document.getElementById("C3").dataset.dialcode
		);
	
}