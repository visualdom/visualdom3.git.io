var signo = prompt('Cual es tu signo');

switch (signo) {
    case 'acuario':
        console.log("acuarioFortalezas: Progresista, original, independiente, humanitario");
        break;
    case 'piscis':
        console.log("piscisFortalezas: Progresista, original, independiente, humanitario");
        break;
    case 'aries':
        console.log("ariesFortalezas: Progresista, original, independiente, humanitario");
        break;
    case 'tauro':
        console.log("tauroFortalezas: Progresista, original, independiente, humanitario");
        break;
    case 'geminis':
        console.log("geminisFortalezas: Progresista, original, independiente, humanitario");
        break;
    default:
        console.log("No es un signo zodiacal vàlido");     
        break;
}

var contador= 0;

const llueve = () => Math.random() < 0.25;

do {
    contador++;
} while (!llueve());
//////////////////////////////////////////////////////
console.log(`Fui a ver si llovia ${contador} veces.`)

var sacha = {
    nombre: 'Sacha',
    apellido: 'Liasdash',
    edad: 28,
    peso: 75
};
console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} Kg.`);
const INCREMENTO_PESO = 0.3;
const DIAS_EL_ANIO = 365;
const META = sacha.peso -3;
const aumentarDePeso = (persona) =>{
    persona.peso += INCREMENTO_PESO;
}
const adelgazar = (persona) =>{
    persona.peso -= INCREMENTO_PESO;
}
const comeMucho = () => Math.random() <0.3;
const realizaDeporte = () => Math.random() <0.4;
var dias = 0;
while (sacha.peso > META){
    if (comeMucho()) {
        //aumentar de peso
        aumentarDePeso(sacha);
    }
    if (realizaDeporte()) {
        //adelgazar
        adelgazar(sacha);
    }
    dias++;
}
console.log(`Pasaron ${dias} dias hasta que ${sacha.nombre} pesa ${sacha.peso.toFixed(2)} Kg.`);
/////////////////////////////////////////
for (var i = 1; i <= DIAS_EL_ANIO; i++) {
        var random = Math.random();
    
        if (random < 0.25){
                //aumenta peso
                aumentarDePeso(sacha);
            }else if (random < 0.5){
                    //adelgazar
                    adelgazar(sacha);
                }
            }
