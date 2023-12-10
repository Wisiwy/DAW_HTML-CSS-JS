/////////////////////////////////
////////// DOCUMENT /////////
////////////////////////////////

/* Corresponde a la URL de la página Web en uso.
     Su principal función es la de consultar las diferentes partes que forman una URL como por ejemplo:
         DOMINIO / PROTOCOLO / PUERTO
 */

//**ASSIGN() */ Carga una nueva URL.
window.location.assign("https://www.ejemplo.com");

//**RELODA() */ Recarga la página actual.
window.location.reload();

//**REPLACE() */ Reemplaza la ubicación actual por una nueva URL.
window.location.replace("https://www.nueva-url.com");

// PROPIEDADES importantes de la clase Location

//**HREF */ Devuelve la URL completa.
const urlCompleta = window.location.href;

//**PROTOCOL */ Devuelve el protocolo de la URL.
const protocolo = window.location.protocol;

//**HOST */ Devuelve el nombre de host y el número de puerto de la URL.
const host = window.location.host;

//**HOSTNAME */ Devuelve el nombre de host de la URL.
const nombreHost = window.location.hostname;

//**PORT */ Devuelve el número de puerto de la URL.
const numeroPuerto = window.location.port;

//**PATHNAME */ Devuelve la ruta y el nombre de archivo de la URL.
const rutaArchivo = window.location.pathname;

//**SEARCH */ Devuelve la cadena de consulta de la URL.
const cadenaConsulta = window.location.search;

//**HASH */ Devuelve el fragmento de identificador de la URL.
const fragmentoIdentificador = window.location.hash;

// Imprimir los resultados en la consola
console.log("URL completa:", urlCompleta);
console.log("Protocolo:", protocolo);
console.log("Nombre de host y puerto:", host);
console.log("Nombre de host:", nombreHost);
console.log("Número de puerto:", numeroPuerto);
console.log("Ruta y nombre de archivo:", rutaArchivo);
console.log("Cadena de consulta:", cadenaConsulta);
console.log("Fragmento de identificador:", fragmentoIdentificador);


