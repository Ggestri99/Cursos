//Sintaxis de delcaracion e instacias con factory functions

// function identificador(<param1>,<param2>,...,<paramN>) {
//     return {
//         <param1>,
//         <param2>,
//         ...
//         <paramN>
//     }
// }

// let objeto = new identificador(valor1,valor2,...,valorN);

//--------------------------------------------

//Cuarta forma de declarar objetos mediante factory fuctioons

function Empleado (nombre, apellido){
    return {
        nombre,
        apellido,
    }
}

let empleado1 = Empleado('Juan','Lopez Perez');

console.log(empleado1);