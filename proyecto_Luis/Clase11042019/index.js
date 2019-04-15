function contadorNombreIgual(arregloPersonas) {
	for(i = 0 ; i < arregloPersonas.length ; i++){
		for(j = i+1 ; j < arregloPersonas.length ; j++){
			if (arregloPersonas[i] === arregloPersonas[j]){
				console.log(arregloPersonas[i]);
				console.log(arregloPersonas[j]);
				console.log("------------");
				arregloPersonas.splice(j,1);
				aumentarContador(arregloPersonas[i]);
			}
		}
	}
}

function aumentarContador(nombre) {
	console.log(aux);
}


let people = [
	  {name: "bob", id:1 }
	, {name: "john", id:2 }
	, {name: "alex", id:3 }
	, {name: "john", id:3 }
	, {name: "bob", id:4 }
];
aux = [];
for(let i = 0 ; i < people.length ; i++){
		
		aux.push((Object.values(people[i]))[0]);
}
console.log(aux);
contadorNombreIgual(aux);
console.log(aux);