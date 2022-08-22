// Metodos y propiedades para arrays

let frutas = ['Manzanas', 'Naranjas', 'Kiwis'];

//Propiedades

console.log(frutas.length); // Numeros de elementos del array

// Metodos mutables(modificar los valores de la variable)

let frutaExtraida =  frutas.pop(); // pop extrae el ultimo elemento del array 
console.log(frutaExtraida);
console.log(frutas);


frutas.push('Albaricoques', 'Cerezas'); // Añade uno o varios elmentos al final del array
console.log(frutas);

frutas.shift(); // Extraer el primer elemento del array y desplazar a la izquierda al resto
console.log(frutas);

frutas.unshift('Platanos', 'Fresas'); // Añade uno o varios elementos al inicio del arraydesplaxzando al resto a la derecha
console.log(frutas); 

// Metodo splice para eliminar o sustitur elementos
//splice(indice, cantidad, elementos opcionales a sustituir)

frutas.splice(1,2); 
console.log(frutas);

frutas.splice(1,2,'Platanos','Fresas')
console.log(frutas);

frutas.splice(1,1,'Peras');
console.log(frutas);

frutas.splice(2, 0, 'Sandia', 'Piña');
console.log(frutas);

frutas.sort();
console.log(frutas);

frutas.reverse();
console.log(frutas);

// Los metodos en JavaScript se pueden encadenar

let marcaVehiculo = ['Dacta', 'VW', 'SEAT', 'Auidi', 'Renault']

marcaVehiculo.sort().reverse();
console.log(marcaVehiculo);