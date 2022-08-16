//Las clases son moldes para fabricar objetos del mismo tipo

//Sintaxis de declaracion e instacias con funcion constructora
    // function Identificador(<param1>,<param2>,...,    <paramN>) {
    //     this.<propiedad1> = <param1>;
    //     this.<propiedad1> = <param2>;
    //     ...
    //     this.<propiedad1> = <paramN>;
    //     this.<metodo> = codigo metodo
    // }

    // let objeto = new Identificador(<valor1>,<valor2>,...,<valorN>);

    //--------------------------------------------

    // tercera forma de declarar objetos mediante funcion constructora

    function Jugador (nombreIn, apellidoIn, dorsalIn, golesIn) {
        this.nombre = nombreIn;
        this.apellidos = apellidoIn;
        this.dorsal = dorsalIn;
        this.goles = golesIn;

        this.marcarGol = function () {
            this.goles++;
        }
    }

    // Pódemos instanciar todos los objetos que necesitemso

    let jugador3 = new Jugador('Rafael','Varane','08',0);
    let jugador4 = new Jugador('Julio','Iglesias', '01', 0);

    jugador3.marcarGol();
    jugador4.marcarGol();
    console.log(jugador3);
    console.log(jugador4);

    console.log(Jugador);

