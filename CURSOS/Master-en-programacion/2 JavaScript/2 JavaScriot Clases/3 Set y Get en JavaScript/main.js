// Get y Set en JavaScript

class Employee {

    name;
    surname; // Publicas
    #age; // Privadas
    #departament;
    #dni;

    constructor(nameIn, surnameIn,){
        this.name = this.nameIn;
        this.surname = this.surnameIn;
    }

    getAge(){
        return this.#age;
    }

    setAge(age) {
        this.#age = age;
    }

    get dni() {
        return this.#dni;
    }

    set dni(dni) {
        this.#dni = dni;
    }

}

let employee1 = new Employee ('Juan', 'Lopez');

employee1.dni = '42327202'; // En la invocacion de los metods se usan como propiedades

console.log(employee1.dni)

