/////////////////////////////////
////////// ARRAY /////////
////////////////////////////////

//**PUSH */ Añade uno o más elementos al final del array y devuelve la nueva longitud del array
const array = [1, 2, 3];
const nuevaLongitud = array.push(4, 5); // Resultado: 5

//**CONCAT */ Combina dos o más arrays
const array1 = [1, 2];
const array2 = [3, 4];
const arrayConcatenado = array1.concat(array2); // Resultado: [1, 2, 3, 4]

//**JOIN */ Convierte todos los elementos de un array en una cadena 
        //(separada por un carácter opcional (,  -  /)
const arrayCadenizado = array.join(", "); // Resultado: "1, 2, 3, 4, 5"

//**REVERSE */ Invierte el orden de los elementos en un array 
const arrayInvertido = array.reverse(); // Resultado: [5, 4, 3, 2, 1]

//**UNSHIFT */ Añade uno o más elementos al principio del array y devuelve la nueva longitud del array
const nuevaLongitudUnshift = array.unshift(0, -1); // Resultado: 7

//**SHIFT */ Elimina el primer elemento del array y devuelve ese elemento
const primerElemento = array.shift(); // Resultado: 0

//**POP */ Elimina el último elemento del array y devuelve ese elemento
const ultimoElemento = array.pop(); // Resultado: 1

//**SLICE */ Extrae una porción del array y devuelve un nuevo array
var numeros = new Array(1,2,3,4,5,6,7,8,9);
const primerosCinco = array.slice(0, 5); // Resultado: [1,2,3,4,5]
const ultimosCuatro = array.slice(-4); // Resultado: [9,8,7,6]

//**SORT */ Ordena los elementos de un array. 
            //Se puede definir una función para ordenarlo con un criterio
const arrayDesordenado = [3, 1, 4, 1, 5, 9, 2];
const arrayOrdenado = arrayDesordenado.sort(); // Resultado: [1, 1, 2, 3, 4, 5, 9]

//**SPLICE */ Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
const frutas = ['manzana', 'pera', 'uva', 'sandía', 'kiwi'];
// Eliminamos 2 elementos a partir del índice 1 (pera y uva) e insertamos plátano y mango
const frutasEliminadas = frutas.splice(1, 2, 'plátano', 'mango');
// Resultante será ['manzana', 'plátano', 'mango', 'sandía', 'kiwi'],

//**LENGTH */ Propiedad que devuelve o establece la cantidad de elementos en un array
const cantidadElementos = array.length; // Resultado: 5

//**PROTOTYPE */ Propiedad que permite agregar propiedades y métodos al prototipo de un array
Array.prototype.multiplicarPorDos = function() {
    return this.map(item => item * 2);
};

const arrayOriginal = [1, 2, 3];
const arrayMultiplicado = arrayOriginal.multiplicarPorDos(); // Resultado: [2, 4, 6]


