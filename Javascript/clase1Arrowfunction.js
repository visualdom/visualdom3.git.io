var sacha ={
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
};
MAYORIA_DE_EDAD = 18;

//  var esMayorDeEdad = function (){
//      return persona.edad >= MAYORIA_DE_EDAD;
//  }

 const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `);
    if(persona.ingeniero){
        console.log('Ingeniero');
    }
    else{
        console.log('No es Ingeniero');
    }
    if(persona.cocinero){
        console.log('Cocinero');
    }
    if(persona.cantante){
        console.log('Cantante');
    }
    if(persona.dj){
        console.log('DJ');
    }
    if(persona.guitarrista){
        console.log('Guitarrista');
    }
    if(persona.drone){
        console.log('Drone');
    }
}
function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    }else{
        console.log(`${persona.nombre} es menor de edad`);
    }
}

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('Acceso denegado');
    }
}
imprimirProfesiones(sacha);
imprimirSiEsMayorDeEdad(sacha);