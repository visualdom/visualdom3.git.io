// function heredaDe(prototypoHijo, protoypoPadre) {
//     var fn = function(){
//     }
//     fn.prototype = protoypoPadre.prototype;
//     prototypoHijo.prototype = new fn;
//    prototypoHijo.prototype.constructor = prototypoHijo;
// }


// function Persona(nombre, apellido, altura) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.altura = altura;
//     return this;
// }
class Persona {
        constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
        
    }
    soyAlto(){
        return this.altura > 1.8;
    }
}
class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura);
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`);
    }
}
// Persona.prototype.saludar = function(){
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
// }
// Persona.prototype.soyAlto = function(){
//     return this.altura > 1.8;
// }

// function Desarrollador(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
// }
// heredaDe(Desarrollador, Persona);

// Desarrollador.prototype.saludar = function () {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`);
// }


// var sacha = new Persona('Sacha', 'Lifszyc', 1.72);
// var erika = new Persona("Erika", "Luna", 1.75);
// var arturo = new Persona("Arturo", "Martinez",1.89);


