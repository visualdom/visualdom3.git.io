const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = {crossDomain: true};


//callback = cb = fn

function obtenerPersonaje(id) {
    // console.log(id);
    return new Promise((resolve, reject) => {
        const url =`${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $
            .get(url, opts, function (data) {
                resolve(data);
            })
            .fail( () => reject(id))

        
    })     
}
// function obtenerPersonaje(id, callback) {
//     // console.log(id);
//     const url =`${API_URL}${PEOPLE_URL.replace(':id', id)}`;
//     $
//         .get(url, opts, callback)
//         .fail(function () {
//             console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
//         })   
// }
function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`);
}
async function obtenerPersonajes() {
    var ids = [1,2,3,4,5,6,7];
    var promesas = ids.map((id) => obtenerPersonaje(id));
    try{
        var personajes = await Promise.all(promesas);
        console.log(personajes);
    }catch(id){
        onError(id);
    }

    // Promise
    //     .all(promesas)
    //     .then(personajes => console.log(personajes))
    //     .catch(onError)
}

obtenerPersonajes();




// obtenerPersonaje(1)
//     .then(function (personaje) {
//         console.log(`El personaje 1 es ${personaje.name}`);
//         return obtenerPersonaje(2);
//     }).then(function (personaje) {
//         console.log(`El personaje 2 es ${personaje.name}`);
//         return obtenerPersonaje(3);
//     }).then(function (personaje) {
//         console.log(`El personaje 3 es ${personaje.name}`);
//         return obtenerPersonaje(4);
//     }).then(function (personaje) {
//         console.log(`El personaje 4 es ${personaje.name}`);
//         return obtenerPersonaje(5);
//     }).then(function (personaje) {
//         console.log(`El personaje 5 es ${personaje.name}`);
//         return obtenerPersonaje(6);
//     }).then(function (personaje) {
//         console.log(`El personaje 6 es ${personaje.name}`);
//         return obtenerPersonaje(7);
//     }).then(function (personaje) {
//         console.log(`El personaje 7 es ${personaje.name}`);
//         // return obtenerPersonaje(2);
//     })
//     .catch(onError)
//     ;






// obtenerPersonaje(1, function (personaje) {
//     console.log(`Hola, yo soy ${personaje.name}`)

//     obtenerPersonaje(2,function (personaje) {
//         console.log(`Hola, yo soy ${personaje.name}`)

//         obtenerPersonaje(3, function (personaje) {
//             console.log(`Hola, yo soy ${personaje.name}`)

//             obtenerPersonaje(4, function (personaje) {
//                 console.log(`Hola, yo soy ${personaje.name}`)

//                 obtenerPersonaje(5, function (personaje) {
//                     console.log(`Hola, yo soy ${personaje.name}`)

//                     obtenerPersonaje(6, function (personaje) {
//                         console.log(`Hola, yo soy ${personaje.name}`)

//                         obtenerPersonaje(7,function (personaje) {
//                             console.log(`Hola, yo soy ${personaje.name}`)
//                         });
//                     })
//                 })
//             })
//         });
//     }) ;    
// });


// function (persona) {
//     console.log(`Hola, yo soy ${persona.name}`)
//     if (callback) {
//         callback();    
//     }
// }