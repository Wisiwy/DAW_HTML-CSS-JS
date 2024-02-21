////////////////////////////
////////// ARRAYS /////////
///////////////////////////

/***************/
//** METODOS **/
/**************/

//En la carpeta de 08_Metodos

/******************/
//** DECLARACION **/
/******************/
// Puedes declarar un array de dos maneras:
var array = new Array(); // Declaración vacía
var array2 = new Array(1, 2, 3, 4); // Declaración con valores iniciales

/*********************/
//** INICIALIZACIÓN **/
/********************/

// Puedes inicializar un array asignando valores a sus elementos.
// Por ejemplo, asignamos el valor 5 al elemento en la posición 5.
array[5] = 5;

/*********************/
//** USOS con BUCLE **/
/*********************/

// Creación de un array de códigos de productos usando un bucle for.
var codigos_productos = new Array();
for (var i = 0; i < 10; i++) {
    codigos_productos[i] = "Codigo_producto_" + i;
}

// Mostramos los códigos de productos en el documento usando document.write.
for (var i=0; i<10; i++) {
    document.write(codigos_productos[i] + "<br>");
}

/*********************/
//** LENGTH y PROTOTYPE **/
/*********************/

// 1. length:
// Utilizamos la propiedad length para iterar a través del array.
for (var i=0; i<codigos_productos.length; i++) {
    document.write(codigos_productos[i] + "<br>");
}

// 2. prototype:
// Puedes agregar propiedades y métodos al prototipo de Array.

// Ejemplo de nueva propiedad en el prototipo de Array.
Array.prototype.otra_propiedad = "Soy una propiedad adicional";

// Ejemplo de nuevo método en el prototipo de Array.
Array.prototype.mostrarElementos = function() {
    for (var i = 0; i < this.length; i++) {
        document.write(this[i] + "<br>");
    }
};

// Crear un nuevo array y utilizar el nuevo método.
var nuevoArray = new Array("Elemento1", "Elemento2", "Elemento3");
nuevoArray.mostrarElementos();
