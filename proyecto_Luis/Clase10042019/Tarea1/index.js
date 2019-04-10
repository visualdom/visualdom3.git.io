var animal = 'kitty'; //asignar el valor kitty a la variable animal 
var result = (animal === 'kitty') ? 'cute' : 'stillnice'; //si animal tiene el valor kitty entonces result es igual a cute si no entonces result es igual a stillnice
//en este caso la variable result es igual a cute
/*---------------------------------------------------------------*/

var animal = 'kitty'; //variable animal es igual a kitty
var result = ''; //asigna a result un valor de cadena vacia
if (animal ==='kitty'){	//compara si animal es igual exacto a la cadena kitty
	result = 'cute';	//si es igual result es cute
}else{
	result = 'still nice'; //si no es igual result es stillnice
}

//es el mismo codigo que el de arriba pero el de arriba esta hecho con ternaria
//result tiene el valor de cute

/*---------------------------------------------------------------*/
function concatenar(){  //funcion concatenar por que agrega una cadena a una ya existente
	var a = 0; //declara la variable a con valor 0 
	var str = 'not a'; //declara la variable str con la cadena not a
	var b = ''; //declara b con una cadena vacia
	b = a ===0 ? (a = 1, str +=' test' ) : (a = 2); //si a es igual a 0 entonces le asigna el valor 1 a 'a' y concatena la cadena test a la variable str y si no entonces a es igual a 2 y deja str como el inicio
	//en este caso a es igual a 1 y str se le concatena test
	console.log(a); //imprime a en la consola
	console.log(str); //imprime str en la consola que es el valor not a test
	console.log(b); //imprime b en la consola que es el valor de not a test

}
concatenar();//se llama a la funcion

/*---------------------------------------------------------------*/

function alerta() {	// funcion de alertas
	var a = 1 ;	//declara a con valor 1
	a === 1 ? alert('Hey, it is 1!') : 0; //si a es igual a 1 entonces envia una alerta si no no hace nada
	console.log(a); //imprime en consola el valor de a
}

/*---------------------------------------------------------------*/
function alertas(a) {
	a ===1 ? alert('Hey, it is 1!') : alert('weird, what could it be?');
	if (a ===1) alert('Hey, it is 1!') else alert('Weird, what coudl it be?');
} //Cuando la estructura es ifelse requiere los corchetes si no manda un error 

alertas(1);

/*---------------------------------------------------------------*/

function cortes() {
	var animal = 'kitty';
	for (var i = 0; i < 5; i++) {
		(animal ==='kitty') ? break : console.log(i);
	} //No te permite usar break en una ternaria
}


/*---------------------------------------------------------------*/

function casos() {
	var value = 1;
	switch (value) {
		case 1:
		console.log('i will always');
		break;
		case 2:
		console.log('i will never run ');
		break;
	} //ºComo el value siempre es 1 entonces solo entra en el caso en l que es igual a el valor 
}
/*---------------------------------------------------------------*/
function ani() {
	var animal = 'Lion';
	switch (animal) {
		case 'Dog':
			console.log('I will not run since animal !== "Dog"');
			break;
		case 'Cat':
			console.log('I will not run since animal !== "Cat"');
			break;
		default:
			console.log('I will run since animal does not match any other case');
	}. //Imprime en consola el caso default ya que no encontro concidencias con el caso Dog y Cat
}

/*---------------------------------------------------------------*/



function jhon() {
	return 'jhon';
}
function jacob() {
	return 'jacob';
}
function todo(name){
	switch (name) {
		case jhon():
			console.log('I will run if name === "John"');
			break;
		case 'Ja' + 'ne':
			console.log('I will run if name === "Jane"');
			break;
		case john() + ' ' + jacob() + ' Jingleheimer Schmidt':
			console.log('His name is equal to name too!');
			break;
	}
}		//Si le enviamos el nombre de jhon imprime el case de jhon aun siendo una funciono toma el valor
var name = 'jhon';
todo(name);

/*---------------------------------------------------------------*/

var a = 'hello' || ''; //regresa hello ya que el operador devuelve la expresion 1 si no se puede convertir a true 
var b = '' || []; //regresa un arreglo vacio la misma logica del de arriba el segundo no se puede convertir a true
var c = '' || undefined; //lo mismo que el de arriba el valor es undefined
var d = 1 || 5; //devuelve 1
var e = 0 || {}; //devuelve un objeto {}
var f = 0 || '' || 5; //devuelve 5 ya que el 0 se puede representar con boolean lo mismo que la cadena vacia
var g = '' || 'yay' || 'boo'; //devuelve yay ya que cadena vacia representa un bolean pero la segunda expresion ya no


/*---------------------------------------------------------------*/
var a = 'hello' && ''; //devuelve ''
var b = '' && []; //devuelve ''
var c = undefined && 0; //devuelve undefined
var d = 1 &&  5;	//devuelve 5
var e = 0 && {};	//devuelve 0
var f = 'hi' && [] && 'done';	//devuelve 'done'
var g = 'bye' && undefined && 'adios';	//devuelve undefined
//Regresa esos valores ya que  && devuelve las expresiones si no se pueden convertir a false



/*---------------------------------------------------------------*/
var foo = function (val) {
	return val || 'default';
}

console.log(foo('burguer')); // devuelve burguer
console.log(foo(100));		//devuelve 100
console.log(foo([]));		//devuelve []
console.log(foo(0));		//devuelve default
console.log(foo(undefined)); // devuelve default
//da esos valores ya que el condicional or devuelve la expresion si no se puede convertir true

/*---------------------------------------------------------------*/
var isLegal = age >= 18; //No ha sido definido age
var tall = height >= 5.11; //no ha sido deficnido height
var suitable = isLegal && tall; //No se defino age por lo tanto isLegal no esta defino igual que tall
var isRoyalty = status === 'royalty';  //No se ha definido status
var specialCase = isRoyalty && hasInvitation; //isRoyalti no tiene nada por que no se ha definido algo antes no se a definido hasInvitation
var canEnterOurBar = suitable || especialCase; // lo mismo no se define 

/*---------------------------------------------------------------*/
function continuar() {
	for (var i = 0 ; i < 3; i++) {
			if (i ===1) {
				continue;
			}
			console.log(i);
	} //Imprime 0 y 2 ya que en 1 entra al if llega al continue y regresa al siguiente ciclo
}

/*---------------------------------------------------------------*/
function mientras() {
	var i = 0;
	while(i < 3){
		if (i === 1){
			i =2;
			continue;
		}
		console.log(i);
		i++
	} //Pasa lo mismo que con el for imprime 0 y 2 pasa lo mismo con estecontinue que con el del for
}

/*---------------------------------------------------------------*/
function doblefor() {
	nextLoop2Iteration:
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			if (i == j) break nextLoop2Iteration;
			console.log(i, j)
		}
	} //llega al break y salta fuera de los ciclos y termina la ejecucion de la funcion se le especifica saltar hacia una etiqueta
}

/*---------------------------------------------------------------*/
function foo(){
	var a = 'hello' ;

	function bar() {
		var b = 'world';
		console.log(a);
		console.log(b);//si llamamos a la funcion bar en una parte de la funcion foo imprime hello y world pero si no entonces la funcion bar no existe fuera de foo
	}
	bar();
	console.log(a);
	console.log(b); //scope de las variables no conoce el valor de b en este punto
}
console.log(a);  //scope de las variables no conoce el valor de a ni b en este punto
console.log(b);	//scope de las variables no conoce el valor de a ni b en este punto


/*---------------------------------------------------------------*/

function foo() {
	const a =true;
	function bar() {
		const a = false; //esta a si se puede volver a declarar ya que es distinta la a que vive en bar que la que vive en foo
		console.log(a);
	}

	const a = false; //a ya a sido declarada con constante, no se puede volver a declarar a en este bloque de codigo
	a = false;	//No se puede modificar el valor de una constante
	console.log(a);
}
