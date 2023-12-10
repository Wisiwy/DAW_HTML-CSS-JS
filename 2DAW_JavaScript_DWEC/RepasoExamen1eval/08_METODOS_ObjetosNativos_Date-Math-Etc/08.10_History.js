/////////////////////////////////
////////// DOCUMENT /////////
////////////////////////////////

// Métodos importantes de la clase History

//**BACK() */ Navega hacia atrás en el historial.
window.history.back();

//**FORWARD() */ Navega hacia adelante en el historial.
window.history.forward();

//**GO() */ Navega a una página específica en el historial.
window.history.go(2); // Navega 2 páginas hacia adelante.

// Propiedades importantes de la clase History

//**LENGTH */ Devuelve la cantidad de entradas en el historial.
const longitudHistorial = window.history.length;

//**STATE */ Devuelve el estado actual del historial.
const estadoHistorial = window.history.state;

//**CURRENT */ Devuelve la URL de la página actual en el historial.
const urlActualHistorial = window.history.current;

//**NEXT */ Devuelve la URL de la página siguiente en el historial.
const urlSiguienteHistorial = window.history.next;

//**PREVIOUS */ Devuelve la URL de la página anterior en el historial.
const urlAnteriorHistorial = window.history.previous;

// Imprimir los resultados en la consola
console.log("Longitud del historial:", longitudHistorial);
console.log("Estado actual del historial:", estadoHistorial);

