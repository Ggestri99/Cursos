// Metodos inmutables (no mdifican el valor del arrray)

let frutas = ['Manzanas', 'Naranjas','Kiwi', 'Fresas', 'Platanos', 'Mandarinas']

let frutasSeleccionadas = frutas.slice(2, 4); // Extrae elementos desde una posicion incluida hasta otra posicion excluido
console.log(frutasSeleccionadas);
console.log(frutas);

let hayPomelos = frutas.includes('Pomelos'); // Devuelve true o flse segun exista el elemnto o no
console.log(hayPomelos);

let mensaje = frutas.join(' | '); //Une los elementos separados por el strin del argumento (por defecto coma)
console.log(mensaje);

let vehiculosEuropeos = ['SEAT', 'Renault', 'Mercedes Benz']

let marcasVehiculos = vehiculosEuropeos.concat('Subaru','Hyunday');

console.log(vehiculosEuropeos);
console.log(marcasVehiculos);

let vehiculosAsiaticos = ['Toyota', 'Mazda'];

marcasVehiculos = vehiculosEuropeos.concat(vehiculosAsiaticos);

console.log(vehiculosEuropeos);
console.log(marcasVehiculos);
