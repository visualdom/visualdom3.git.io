//Se obtienen los numeros
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var cero = document.getElementById('cero');
//Se obtienen las operaciones
var suma = document.getElementById('suma');
var resta = document.getElementById('resta');
var multiplicacion = document.getElementById('multiplicacion');
var division = document.getElementById('division');
var porcentaje = document.getElementById('porcentaje');
var igual = document.getElementById('igual');
//se obtienen cambio de signo y punto decimal y limpiar
var punto = document.getElementById('punto');
var negativopositivo = document.getElementById('negativopositivo');
var limpiar = document.getElementById('limpiar');
//se declaran los operandos y resultados y operacion a realizar
var operandoa;
var operandob;
var operacion;
var resultado;
//----------------------------------------------------------------
var evento = new Event("funcionLanzada");
uno.addEventListener(
	"funcionLanzada",
	function(e){
    	console.log("hola");
  	},
     false
  );
// uno.dispatchEvent(evento);
uno.addEventListener("click", function(e) {
	uno.dispatchEvent(evento);
},false);