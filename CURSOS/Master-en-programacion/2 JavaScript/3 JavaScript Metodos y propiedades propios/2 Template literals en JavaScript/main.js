// caracteristicas

// Permite interpolar expresiones dentro de las cadenas
// Escribir cadenas multilinea sin secuencias de escape


// Sintaxis 

//  let identificador = `...caracteres ${<expresion>}...
//     ...
//     `;


//----------------------------------------------

//Template literals

let nombre = 'Laura';
let apellido = 'Gomez Perez';
let resultado = 9.6;

let mensaje = `La jugadora ${nombre} ${apellido}
tiene un resultado de ${resultado}`;

console.log(mensaje);