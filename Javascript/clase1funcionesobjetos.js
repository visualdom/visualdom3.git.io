var sacha = {
    nombre: 'Sacha',
    apellido: 'Susnisky',
    edad: 28
};
var nombre = 'Sacha', apellido = 'Lifszyc';
var edad = 28;
var nombreEnMayusculas = nombre.toUpperCase();
var nombreEnMinusculas = nombre.toLowerCase();
var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;
var nombreCompleto = nombre + apellido
var nombreCompleto2 = `${nombre} ${apellido}`;
var str = nombre.substr(1, 2);


console.log(nombreEnMayusculas);
console.log(nombre);
console.log(nombreEnMinusculas);
console.log(primeraLetraDelNombre);
console.log(cantidadDeLetrasDelNombre);
console.log(nombreCompleto);
console.log(nombreCompleto2);
console.log(str);

var precioVino = 200.3;
var total = Math.round(precioVino * 100 * 3)/100;
var totalStr = total.toFixed(3);
var total2 = parseFloat(totalStr);

console.log(total);
console.log(total2);
console.log(totalStr);
console.log(`${nombre} ${apellido} tiene ${edad} años`);

function saberNombre(persona){
    var { nombre} = persona
    console.log(nombre.toUpperCase());
}

function cumpleanos(persona){
    return{
        ...persona
    }
}


saberNombre(sacha);