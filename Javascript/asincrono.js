
class Persona {
        constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
        if (fn){
            fn(this.nombre, this.apellido);
        }
    }
    soyAlto(){
        return this.altura > 1.8;
    }
}
class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura);
    }
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`);
        if (fn){
            fn(this.nombre, this.apellido, true);
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`);
    if (esDev){
        console.log(`Àh mira, no sabia que eras desarrollador/a`);

    }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.72);
var erika = new Persona("Erika", "Luna", 1.75);
var arturo = new Desarrollador("Arturo", "Martinez",1.89);

sacha.saludar(responderSaludo);
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);