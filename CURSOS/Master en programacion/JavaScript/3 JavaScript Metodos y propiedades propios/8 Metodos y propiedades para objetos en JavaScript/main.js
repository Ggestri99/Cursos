// Sintaxsis

// /* <array>.forEach((elemento, indice)=>{
//     // Codigo a ejecutar con cada elemento
// /* })

// Metodos y propiedades para rrays de objetos

let jugadores = [
    {nombre: 'Maria', apellidos:'Zuli', puntuacion: 4.6},
    {nombre: 'Juan', apellidos:'Gomez', puntuacion: 7},
    {nombre: 'Laura', apellidos:'Lopez', puntuacion: 9.6},
];

// Ciclo forEach ECMA 2015

let jugadoresAptos = [];

jugadores.forEach(elem => {
    if(elem.puntuacion >= 5){
        jugadoresAptos.push(elem);
    }
})
console.log(jugadoresAptos);


//Sintaxis de map

// /* <array>.map((elemento, indice)=>{
//     // Codigo a ejecutar con cada elemento
//     // return
// /* })


// Ciclo map ECMA 2015

let nombreJugadores = jugadores.map((elem, i) => {
    return  `${i+1}.- ${elem.nombre} ${elem.apellidos}.`
})

console.log(nombreJugadores);


// Sintaxis Filter

// /* <array>.filter((elemento, indice)=>{
//     // return <expresion-consicional-con-elemento>
// /* })


// Ciclo fliter ECMA 2015

let jugadoresNoAptos = jugadores.filter((elem) => {
    return elem.puntuacion < 5;
})

console.log(jugadoresNoAptos);

