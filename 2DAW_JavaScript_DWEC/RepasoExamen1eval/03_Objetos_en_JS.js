//////////////////////////////////////
// /////// OBJETOS en JAVASCRIPT /////
/////////////////////////////////////

/** Elementos programables que podemos manipular sus propiedades, 
 * realizar tareas con sus METODOS o ejecutar un EVENTO relacionado 
 * con el mismo. Ej document
 * 
 *- PROPIEDADES 
        document.bgcolor = red;
 *- MÉTODOS 
        document.write('Hola que ase);
 *- EVENTOS
        onclick = ejecutarFuncion; */

 /* ------------------------------------------------------------------ */
 //////////////////////////////
 ////  ENUMERAR PROPIEDADES ///
 //////////////////////////////
 /** Bucle FOR...IN
  *  OBJECT.KEY
  *  OBJECT-GETOWNPROPERTYNAME
  * 
  */
 
// Objeto de ejemplo
var persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Ejemplo"
};


// Bucle for...in
console.log("Bucle for...in:");
for (var propiedad in persona) {
    if (persona.hasOwnProperty(propiedad)) {
        console.log(propiedad + ": " + persona[propiedad]);
    }
}


// Object.keys()
console.log("\nObject.keys():");
var claves = Object.keys(persona);
for (var i = 0; i < claves.length; i++) {
    var clave = claves[i];
    console.log(clave + ": " + persona[clave]);
}


// Object.getOwnPropertyNames()
console.log("\nObject.getOwnPropertyNames():");
var todasLasPropiedades = Object.getOwnPropertyNames(persona);
for (var j = 0; j < todasLasPropiedades.length; j++) {
    var propiedad = todasLasPropiedades[j];
    console.log(propiedad + ": " + persona[propiedad]);
}
  