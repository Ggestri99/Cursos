// Sintaxis de declaracion

// class Identificador{

//     constructor(parametros){
//         this.propiedad = parametro;
//         this.propiedad = parametro;
//         ...
//     }

//     metodos
// }

// let identificador = new identificadorClase(parametros)


//---------------------------------------------

// Declaracion de clases (ECMA6)

class Vehicle{

    constructor(brandIn, modelIn, colorIn, priceIn) {
        this.brand = brandIn;
        this.color = colorIn;
        this.model = modelIn;
        this.price = priceIn;
    }

    getColor(){
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getpriceWityhTaxes(tax){
        return this.price + this.price * tax;
    }
}


//Instancia de objetos de una clase

let vehicle1 = new Vehicle('Renault', 'Megane', 'Gris', 16000)

console.log(vehicle1)

console.log(vehicle1.getpriceWityhTaxes(0.21))