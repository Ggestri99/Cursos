// Propiedades provadas en JavaScript

class Employee {

    name;
    surname; // Publicas
    #age; // Privadas
    #departament;

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

}

let employee1 = new Employee ('Juan', 'Lopez');
//Error la propiedad no es accesible

employee1.setAge(44);
console.log(employee1.getAge());