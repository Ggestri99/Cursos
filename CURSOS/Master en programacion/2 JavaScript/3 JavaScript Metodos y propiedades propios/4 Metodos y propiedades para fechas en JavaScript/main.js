// Metodos y propiedades para fechas

// Date

// Obtener la fecha actual 

let fechaActual = new Date();
console.log(fechaActual);

// Establecer fechas en JavaScript
// 1° Opcion pasando argumentos: año, mes (indexado a 0), dia, hora, minutos, segundos, milisegundos

let fechaNacimiento = new Date(1990, 1, 11); // 11 Febrero de 1990
console.log(fechaNacimiento)

// 2° opcion pasando argumento fecha-strinf 'yyyy-MM-dd' (meses no indexados a cero)

let fechaExpedicion = new Date('2021-03-15'); // 15 Marzo 2021
console.log(fechaExpedicion);

// 3° Pasando argumento en milisegundo desde era Epoch

let fechaAleatoria = new Date(545465485774);
console.log(fechaAleatoria);

//Metodos de instancias de date

console.log(fechaActual.getFullYear()); // Devuelve el año en tipo number
console.log(fechaActual.getMonth()); // Devuelve el mes en tipo number indexado a cero

let meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Nobiembre',
    'Diciembre',
];

console.log(meses[fechaActual.getMonth(5)])

console.log(fechaActual.getDate()); // Nos duelve el dia del mes
console.log(fechaActual.getDay()); // Devuelve el dia de la semana
console.log(fechaActual.getHours()); // Nos duelve la hora
console.log(fechaActual.getMinutes()); // Devuelve los minutos
console.log(fechaActual.getSeconds()); // Nos duelve los segunos
console.log(fechaActual.getMilliseconds()); // Devuelve los milisegundos

// Para el calculo de fechas utilizamos los milisegundo

console.log(fechaActual.getTime());// Milisegundos desde Epoch

let fechaSalida = new Date(fechaActual.getTime() + 3 * 24 * 60 * 60 * 1000); // Dentro de trees dias
console.log(fechaSalida)