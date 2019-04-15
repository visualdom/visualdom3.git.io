function contarAparecidos(persona, personas) {
	var cont = 0;
	for (let nombre of personas) {
		if (persona.name === nombre.name){
			cont ++;
		}
	}
	return persona.name, cont;
}
function eliminarDuplicados(arreglo){
	for(var i = 0 ; i < arreglo.length; i++){
		for(var j = i+1 ; j < arreglo.length ; j++){
			if(arreglo[j] !== undefined){
				console.log(arreglo[i].name);
				if(arreglo[i].name === arreglo[j].name){
					console.log('repetido');
				}
			}
		}
	}
	return 0;
}

let people = [{name: "bob", id:1 }, {name: "john", id:2 }, {name: "alex", id:3 }, {name: "john", id:3 }, {name: "bob", id:4 }];
var cantidad = [];
for(var persona of people){
	var cont = contarAparecidos(persona, people);
	var nombre = persona.name;
	cantidad.push({nombre: nombre, cantidad: cont});
}
eliminarDuplicados(cantidad);
