///////////////////////////////
// /////// METODOS  /////
///////////////////////////////

/**
 * Metodo es una funcion asociada a un objetos. 
 *  */

var myobj = {
    myMethod: function(parametros){
        //escribir algo
    },

    otroMetodo (parametros2){
        //hacer otra cosa
    }
}
/* ------------------------------------------------------------------ */
///**GETTERS y SETTERS */

var miObjeto = {
    _s: 0,  // Convención: el guion bajo (_) indica que es una propiedad interna

    // Getter
    get s() {
        return this._s;
    },

    // Setter
    set s(valor) {
        this._s = valor;
    }
};

// Usar el getter
console.log(miObjeto.s);  // Imprime: Obteniendo el valor de 's'

// Usar el setter
miObjeto.s = 42;  // Imprime: Estableciendo el valor de 's' a 42

/* ------------------------------------------------------------------ */
///**ELIMINAR PROPIEDAD */

var myObj = new Object();
    myobj.a = 5;
    myobj.b = 6;

    delete myObj.a;
    console.log ("a" in myObj); // Muestra :'false'

/* ------------------------------------------------------------------ */
///**COMPARAR OBJETOS */

// Ejemplo de comparación de objetos

// Crear dos objetos con las mismas propiedades
var objeto1 = { nombre: "Juan", edad: 25 };
var objeto2 = { nombre: "Juan", edad: 25 };

// Intentar comparar los objetos directamente
objeto1 === objeto2 //FALSE

// Intentar comparar las propiedades de los objetos
objeto1.nombre === objeto2.nombre && objeto1.edad === objeto2.edad //TRUE

/**
 * En este ejemplo, aunque los objetos objeto1 y objeto2 tienen las mismas
 * propiedades y valores, la comparación directa (objeto1 === objeto2) 
 * devolverá false porque están ubicados en diferentes lugares de la memoria 
 * (referencias diferentes). La comparación de las propiedades directamente 
 * (objeto1.nombre === objeto2.nombre && objeto1.edad === objeto2.edad)
 * dará el resultado correcto.
 */