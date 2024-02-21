
///////////////////////////////
// /////// TIPOS DE DATOS /////
///////////////////////////////

/*TIPADO DINÁMICO. Una var puede camibar de tipo. (ocacions problemas
        ¿¡Atencion a los parser y sumas 2 +2 = 22!? */


/**
 * NÚMEROS
 * 
 * Solo existe un tipo de dato Numerico. Conocido como Double.
 *      - Formato punto flotanta 64 bits. 
 *      - Posible usar Hexadecimal 0x.
 * */

var numero = 0;
var numero2 = "23";
numero2 = Numero(numero2);
numero2 = parseInt(numero2);
numero2 = parseFloat(numero2);

/**
 * STRING
 * 
 * Definir cualquier cadracter de UNICODE. Entre "" o ''-
 * Secuencias de ESCAPE:
 * 
 *  \\ - Barra invertida.
 *  \' - Comilla simple.
 *  \" - Comilla doble.
 *  \n - Salto de línea
 *  \t - Tabulacion horizontal. 
 *  \v - Tabulación vertical.
 *  \f - Salto de pagina
 *  \r - Retorno de carro. 
 *  \b - Retroceso
 */


/**
 * BOOLEANOS
 * True or false. 
 */

/* ------------------------------------------------------------------ */


///////////////////////////////
// /////// VARIABLES  /////
///////////////////////////////

/**
 * Zonas de memoria de ordenador se identifican con nombre y guardan ciertos datos. 
 *  - Declarar variable
 *  - Inicializar variable.
 * 
 */

var global = prompt('Intro valor: ');
let local1, local2, local3 = 0; //se puede hacer en una sola linea 
const local = local1 + 1;

/* ------------------------------------------------------------------ */

///////////////////////////////
// /////// TIPOS DE DATOS /////
///////////////////////////////

var modulo = 25 % 4 ; //dara el resto de la division 1
var exponente = 2**5; //dos elevado a 5 = 32 
const valor = 4;
var incrementoDecremento = valor++ + valor--; //incrementa decrementa valor variable 

/* += , -=, *=, /* (divide y asigna) , %= (modulo y asigna) */

/* LOGICOS
*
* && (AND) , || (OR) , ! (NEGACION) */

/**
 * OPERADORES DE COMPARACION
 * < , <=, ==, >, >=, !=, ===, !== 
 * 
 * === : estrictamente igual, valor y tipo dato
 * !== : estrictamente diferente en valor y dato
 * ?: -> para operadores ternarios
 * 
 * */  

/* ------------------------------------------------------------------ */

///////////////////////////////////////
// /////// ESTRUCTURAS DE CONTROL /////
///////////////////////////////////////

// Ejemplo de IF-ELSE
var numero = 10;
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}
   

// Ejemplo de SWITCH
var dia = "Lunes";
switch (dia) {
    case "Lunes":
        console.log("Es el primer día de la semana.");
        break;
    case "Martes":
        console.log("Es el segundo día de la semana.");
        break;
    // ... otros casos ...
    default:
        console.log("No es un día válido.");
}


// Ejemplo de FOR
for (var i = 0; i < 5; i++) {
    console.log("Iteración " + i);
}


// Ejemplo de FOR-IN
// itera sobre los elementos de un objeto en un orden arbitrario, ejecutando el bloque de código una vez por cada uno.
var persona = { nombre: "Juan", edad: 25, ciudad: "Ejemplo" };
for (var propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}


// Ejemplo de FOR-OF
// ejecuta un bloque para cad elemento en un obj iterable (string, array , nodelist, map...)

var colores = ["rojo", "verde", "azul"];
for (var color of colores) {
    console.log(color);
}


// Ejemplo de WHILE
var contadorWhile = 0;
while (contadorWhile < 5) {
    console.log("While - Iteración " + contadorWhile);
    contadorWhile++;
}


// Ejemplo de DO-WHILE
var contadorDoWhile = 0;
do {
    console.log("Do-While - Iteración " + contadorDoWhile);
    contadorDoWhile++;
} while (contadorDoWhile < 5);

// CLAUSURA DE ITERACIONES 
// break; continue;  return; throw;