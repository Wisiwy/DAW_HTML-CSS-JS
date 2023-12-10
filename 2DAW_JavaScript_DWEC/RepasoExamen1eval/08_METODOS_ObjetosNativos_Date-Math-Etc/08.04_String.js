/////////////////////////////////
////////// STRING /////////
////////////////////////////////

const cadena = "Hola, mundo!";


//**LENGTH */ Obtiene la longitud de la cadena
const longitud = cadena.length; // Resultado: 12

//**TO UPPER CASE */ Convierte la cadena a mayúsculas
const mayusculas = cadena.toUpperCase(); // Resultado: "HOLA, MUNDO!"

//**TO LOWER CASE */ Convierte la cadena a minúsculas
const minusculas = cadena.toLowerCase(); // Resultado: "hola, mundo!"

//**CHAR AT */ Obtiene el carácter en la posición especificada
const caracter = cadena.charAt(0); // Resultado: "H"

//**INDEX OF */ Busca la primera aparición de un carácter o subcadena y devuelve su posición
const posicion = cadena.indexOf("mundo"); // Resultado: 6

//**LAST INDEX OF */ Busca la última aparición de un carácter o subcadena y devuelve su posición
const ultimaPosicion = cadena.lastIndexOf("o"); // Resultado: 8

//**CONCAT */ Combina dos o más cadenas
const cadenaConcatenada = cadena.concat(" ¡Adiós!"); // Resultado: "Hola, mundo! ¡Adiós!"

//**SUBSTRING */ Extrae una parte de la cadena desde el índice especificado
const subcadenaSubstring = cadena.substring(6, 11); // Resultado: "mundo"

//**SLICE */ Extrae una parte de la cadena entre dos índices
const subcadenaSlice = cadena.slice(6, 11); // Resultado: "mundo"

//**SPLIT */ Divide la cadena en un array de subcadenas
const arrayDeSubcadenas = cadena.split(", "); // Resultado: ["Hola", "mundo!"]

//**REPLACE */ Reemplaza una subcadena por otra
const cadenaReemplazada = cadena.replace("mundo", "universo"); // Resultado: "Hola, universo!"

//**SEARCH */ Busca una expresión regular en la cadena y devuelve la posición
const posicionBusqueda = cadena.search(/mun/); // Resultado: 6

//**MATCH */ Busca una expresión regular en la cadena
const coincidencia = cadena.match(/o/g); // Resultado: ["o", "o", "o"]

//**TRIM */ Elimina los espacios en blanco al principio y al final de la cadena
const cadenaConEspacios = "   ¡Hola, mundo!   ";
const cadenaSinEspacios = cadenaConEspacios.trim(); // Resultado: "¡Hola, mundo!"

//**TO STRING */ Convierte un valor a cadena de texto
const numero = 42;
const numeroComoCadena = numero.toString(); // Resultado: "42"

//**REPEAT */ Repite la cadena un número de veces
const cadenaRepetida = "abc".repeat(3); // Resultado: "abcabcabc"


