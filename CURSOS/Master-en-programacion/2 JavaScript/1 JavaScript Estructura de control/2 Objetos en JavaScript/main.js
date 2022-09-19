//Los objetos nos permiten representar los conjuntos de datos

//Sintaxis de declaracion con literal 
    //let identificador = {
    //     <propiedad1>:<valor>,
    //     <propiedad1>:<valor>,
    //     ...
    //     <propiedad1>:<valor>,
    //     <propiedad1>:<valor>,
    //     <metodo>(){
    //         codigo
    //         }
    //}

//Los metodos son funciones que se ejecutan dentro de un objeto 

//Sintaxis de acceso a mioembros
    //identificador.<propiedad/metodo>

//----------------------------------------------------

//Primera forma de declarar objetos mediante literal 

let jugador1 = {
    nombre: 'Sergio',
    apellidos: 'Ramos', //Las propiedades son publicas
    dorsal: '4',
    goles: 0,
    equipos:['Sevilla','Real Madrid'],
    marcarGol(){
        this.goles++;
    }
}

//acceso a los miembros (notacion del punto)

console.log(jugador1.apellidos);

jugador1.marcarGol();

console.log(jugador1.goles);

jugador1.apellidos = 'Ramos Gonzalez';

console.log(jugador1.apellidos);