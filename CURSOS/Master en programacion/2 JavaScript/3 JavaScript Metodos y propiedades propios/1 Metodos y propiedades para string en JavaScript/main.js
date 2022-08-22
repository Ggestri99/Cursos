//Metodos y propiedades para string en JavaScript

// let nombre = new String('Juan');
let nombre = 'Juan';

console.log(nombre.length); // Devuelve la longitud del string

console.log(nombre.toLowerCase()) // Devuelve el valor transformado a minusculas;
console.log(nombre.toUpperCase()) // Devuelve el valor transformado a mayusculas;

console.log(nombre);

console.log(nombre.charAt(2)); // Devolver el caraacter de la posicion

console.log(nombre.indexOf('n')); // Nos devuelve la posicion de la primera coincidencia 
console.log(nombre.indexOf('x')); // Devuelve -1 si no encuentra el caracter

nombre = 'Amanda';

console.log(nombre.lastIndexOf('a')); // Devuelve la posicion de l aultima coincidencia
console.log(nombre.includes('nda')); // Devuelve true o false si encuentra la cadena;
console.log(nombre.startsWith('A')); // Devuelve true o false si comienza por el caracter que le pasamos
console.log(nombre.endsWith('z')); // Devuelve true o flase si finaliza por el caracter

let apellidos = 'Perez Gomez';

let nombreCompleto = nombre.concat(' ' + apellidos);

console.log(nombreCompleto);

let frase = '                En un lugar de la Mancha                 ';

console.log(frase.trim()); // Elimina al comienzo y al final los espacios en blanco;

let password = '01234abcd';

console.log(password.slice(2, 5)); // Devuelve el fragmento desde la primera posicion incluida 
                              //   Hasta la segunda posicion excluida

console.log(password.slice(-2)); // Pasando argumento negativo, devuelve los n ultimos carateres

