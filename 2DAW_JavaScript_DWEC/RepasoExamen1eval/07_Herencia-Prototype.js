
///////////////////////////////////////////////////
////////// HERENCIA: PROTOTYPE y EXTENDS  /////////
///////////////////////////////////////////////////
/****************/
//**PROTOTYPE  ****/
/****************/

// Definir un constructor para la clase base
function Animal(nombre) {
    this.nombre = nombre;
}

// Agregar un método a la clase base
Animal.prototype.saludar = function() {
    console.log("Hola, soy " + this.nombre);
};

// Definir un constructor para la clase derivada (hereda de Animal)
function Perro(nombre, raza) {
    // Llamar al constructor de la clase base
    Animal.call(this, nombre);

    // Agregar una propiedad específica de la clase derivada
    this.raza = raza;
}

// Establecer la herencia entre las clases (Perro hereda de Animal)
Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

// Agregar un método específico de la clase derivada
Perro.prototype.ladrar = function() {
    console.log("Guau, soy un perro de raza " + this.raza);
};

// Crear instancias de las clases
var miAnimal = new Animal("Animal");
var miPerro = new Perro("Buddy", "Labrador");

// Usar métodos de la clase base y de la clase derivada
miAnimal.saludar();  // Salida: Hola, soy Animal
miPerro.saludar();   // Salida: Hola, soy Buddy
miPerro.ladrar();     // Salida: Guau, soy un perro de raza Labrador

/* En este ejemplo, Animal es la clase base con un constructor y un método saludar. 
Perro es la clase derivada que hereda de Animal mediante la prototipación. 
Luego, se crea una instancia de cada clase (miAnimal y miPerro) y se utilizan sus métodos.
La línea Perro.prototype = Object.create(Animal.prototype); establece la herencia, haciendo 
que el prototipo de Perro sea un nuevo objeto creado a partir del prototipo de Animal. Esto
 permite a Perro heredar las propiedades y métodos de Animal. */

/* ------------------------------------------------------------------ */
/****************/
//**EXTENDS  ****/
/****************/
    //super()
        //funciones objeto padre

 // Definir la clase base
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

// Definir la clase derivada que hereda de Animal
class Perro extends Animal {
    constructor(nombre, raza) {
        // Llamar al constructor de la clase base usando super
        super(nombre);
        
        // Agregar una propiedad específica de la clase derivada
        this.raza = raza;
    }

    ladrar() {
        console.log(`Guau, soy un perro de raza ${this.raza}`);
    }
}

// Crear instancias de las clases
const miAnimal = new Animal("Animal");
const miPerro = new Perro("Buddy", "Labrador");

// Usar métodos de la clase base y de la clase derivada
miAnimal.saludar();  // Salida: Hola, soy Animal
miPerro.saludar();   // Salida: Hola, soy Buddy
miPerro.ladrar();     // Salida: Guau, soy un perro de raza Labrador
