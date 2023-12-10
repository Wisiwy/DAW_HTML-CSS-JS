//////////////////////////////////////////////
////////// FUNCIONES PREDEFINIDAS de JS /////
/////////////////////////////////////////////


//**ESCAPE() */ Codifica una cadena en formato URI. **UNESCAPE() */ Decodifica 
const cadenaOriginal = "¡Hola, mundo!";
const cadenaCodificada = escape(cadenaOriginal);

//**EVAL() */ Evalúa una cadena de texto como código JavaScript.
const resultadoEval = eval("2 + 2"); // Resultado: 4

//**ISFINITE() */ Comprueba si un valor es un número finito.
const esFinito = isFinite(42); // Resultado: true

//**ISNAN() */ Comprueba si un valor no es un número.
const noEsNumero = isNaN("Hola"); // Resultado: true

//**STRING() */ Convierte un valor a una cadena.
const cadenaDesdeNumero = String(42);

//**NUMBER() */ Convierte un valor a un número.
const numeroDesdeCadena = Number("42");

//**PARSEINT() */ Convierte una cadena a un entero.
const enteroDesdeCadena = parseInt("42");

//**PARSEFLOAT() */ Convierte una cadena a un número de punto flotante.
const flotanteDesdeCadena = parseFloat("42.5");

// Imprimir los resultados en la consola
console.log("Cadena codificada:", cadenaCodificada);
console.log("Cadena decodificada:", cadenaDecodificada);
console.log("Resultado de eval:", resultadoEval);
console.log("¿Es finito?:", esFinito);
console.log("¿No es un número?:", noEsNumero);
console.log("Cadena desde número:", cadenaDesdeNumero);
console.log("Número desde cadena:", numeroDesdeCadena);
console.log("Entero desde cadena:", enteroDesdeCadena);
console.log("Flotante desde cadena:", flotanteDesdeCadena);
