/////////////////////////////////
////////// WINDOW /////////
////////////////////////////////

/* 
    o Se considera el objeto más importante de JavaScript.
    o Permite gestionar las ventanas del navegador.
    o Es un objeto implícito, con lo cual no es necesario
        nombrarlo para acceder a los objetos que se
        encuentran debajo de su nivel de jerarquía. */

//**CLOSED */ Indica si la ventana actual está cerrada o no
const ventanaCerrada = window.closed; // Devuelve true o false

//**DOCUMENT */ Devuelve el objeto `Document` asociado a la ventana
const documentoVentana = window.document; // Devuelve el objeto Document

//**FRAMES */ Devuelve una colección de objetos `Window` que representan los frames dentro de la ventana
const framesVentana = window.frames; // Devuelve una colección de objetos Window

//**HISTORY */ Proporciona acceso al historial de navegación del navegador
const historialNavegacion = window.history; // Devuelve el objeto History

//**LENGTH */ Devuelve la cantidad de frames en la ventana
const cantidadFrames = window.length; // Devuelve un número

//**TOOLBAR */ Devuelve la barra de herramientas de la ventana
const barraHerramientas = window.toolbar; // Devuelve el objeto Toolbar

//**STATUS */ Devuelve la barra de estado de la ventana
const barraEstado = window.status; // Devuelve una cadena

//**SCROLLBARS */ Devuelve las barras de desplazamiento de la ventana
const barrasDesplazamiento = window.scrollbars; // Devuelve el objeto Scrollbars

// Imprimir los resultados en la consola
console.log("Ventana cerrada:", ventanaCerrada);
console.log("Documento de la ventana:", documentoVentana);
console.log("Frames de la ventana:", framesVentana);
console.log("Historial de navegación:", historialNavegacion);
console.log("Cantidad de frames:", cantidadFrames);
console.log("Barra de herramientas:", barraHerramientas);
console.log("Barra de estado:", barraEstado);
console.log("Barras de desplazamiento:", barrasDesplazamiento);
