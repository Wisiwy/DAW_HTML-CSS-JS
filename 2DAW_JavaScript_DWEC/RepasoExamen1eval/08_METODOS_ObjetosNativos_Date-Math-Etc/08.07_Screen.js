/////////////////////////////////
////////// SCREEN /////////
////////////////////////////////

//**WIDTH */ Devuelve el ancho de la pantalla en píxeles
const anchoPantalla = screen.width; // Devuelve un número

//**HEIGHT */ Devuelve la altura de la pantalla en píxeles
const alturaPantalla = screen.height; // Devuelve un número

//**AVAIL WIDTH */ Devuelve el ancho disponible de la pantalla en píxeles (descontando barras de herramientas, etc.)
const anchoDisponible = screen.availWidth; // Devuelve un número

//**AVAIL HEIGHT */ Devuelve la altura disponible de la pantalla en píxeles (descontando barras de herramientas, etc.)
const alturaDisponible = screen.availHeight; // Devuelve un número

//**COLOR DEPTH */ Devuelve la profundidad de color de la pantalla en bits por píxel
const profundidadColor = screen.colorDepth; // Devuelve un número

//**PIXEL DEPTH */ Devuelve la profundidad de píxeles de la pantalla en bits por píxel
const profundidadPixel = screen.pixelDepth; // Devuelve un número

// Imprimir los resultados en la consola
console.log("Ancho de la pantalla:", anchoPantalla);
console.log("Altura de la pantalla:", alturaPantalla);
console.log("Ancho disponible de la pantalla:", anchoDisponible);
console.log("Altura disponible de la pantalla:", alturaDisponible);
console.log("Profundidad de color:", profundidadColor);
console.log("Profundidad de píxeles:", profundidadPixel);
