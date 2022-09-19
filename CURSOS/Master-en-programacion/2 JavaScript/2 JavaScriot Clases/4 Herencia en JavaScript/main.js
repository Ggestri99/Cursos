// La herencia es un mecanismo en POO mediante el cual una clase puede heredar de otra para utlizar el codigo de la clase que hereda

// Herencia de clases en JavaScript

class Rectangle {

    constructor(widthIn, heigthIn){
        this.width = widthIn;
        this.heigth = heigthIn;
    }

    getSuperfice() {
        return this.width * this.heigth;
    }
}

let polygon1 = new Rectangle(10, 20);
console.log(polygon1.getSuperfice());

class Square extends Rectangle {
    constructor(side){
        super(side, side)
    }

    getSquareSurface () {
        return super.getSuperfice();
    }

}

let square1 = new Square (15);
console.log(square1.getSquareSurface());
