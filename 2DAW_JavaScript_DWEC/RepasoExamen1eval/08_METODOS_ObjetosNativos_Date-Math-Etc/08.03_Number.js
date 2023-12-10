/////////////////////////////////
////////// NUMBER /////////
////////////////////////////////



//**TO FIXED */ Redondea el número a una cantidad específica de decimales
const numeroDecimal = 5.12345;
const numeroRedondeado = numeroDecimal.toFixed(2); // Resultado: "5.12"

//**TO PRECISION */ Redondea el número al número especificado de dígitos significativos
const numeroPrecision = 12345.6789;
const numeroRedondeadoPrecision = numeroPrecision.toPrecision(4); // Resultado: "1.235e+4"

//**TO EXPONENTIAL */ Devuelve una cadena que representa el número en notación exponencial
const numeroExponencial = 12345.6789;
const numeroEnExponencial = numeroExponencial.toExponential(2); // Resultado: "1.23e+4"

//**MAX VALUE */ El número positivo más grande representable en JavaScript
const numeroMaximo = Number.MAX_VALUE;

//**MIN VALUE */ El número positivo más pequeño representable en JavaScript
const numeroMinimo = Number.MIN_VALUE;

//**NEGATIVE INFINITY */ Representa el valor negativo infinito
const infinitoNegativo = Number.NEGATIVE_INFINITY;

console.log("Número máximo representable:", numeroMaximo);
console.log("Número mínimo representable:", numeroMinimo);
console.log("Infinito negativo:", infinitoNegativo);

//**PARSE INT */ Convierte una cadena a un entero
const cadenaEntero = "123";
const entero = parseInt(cadenaEntero); // Resultado: 123

//**PARSE FLOAT */ Convierte una cadena a un número de punto flotante
const cadenaFlotante = "123.45";
const flotante = parseFloat(cadenaFlotante); // Resultado: 123.45

//**IS NAN */ Comprueba si el valor no es un número
const noEsNumero = isNaN("Hola"); // Resultado: true

//**IS FINITE */ Comprueba si el valor es un número finito
const esFinito = isFinite(42); // Resultado: true

//**TO FIXED */ Redondea el número a una cantidad específica de decimales
const pi = Math.PI;
const piComoCadena = pi.toString(); // Resultado: "3.141592653589793"

//**TO LOCALE STRING */ Devuelve una representación de cadena del número que respeta la configuración regional
const numeroLocalizado = 1234567.89;
const numeroConFormato = numeroLocalizado.toLocaleString(); // Resultado: "1,234,567.89"
