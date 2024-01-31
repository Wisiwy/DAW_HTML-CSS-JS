/*Defino 1 clase padre "Alimento" con un constructor común (id, nombre y precio) 
* además de almacenar la cantidad de unidades que hay de cada Alimento.
* Luego definire las clases hijos que heredan de Alimento.
* La clase padre "Alimento" contara también con dos funciones útiles:
*   - mostrarParametros() para mostrar los parametros de la clase de una forma bonita.
*   - mostrarCabecera() para mostrar la cabezera de la clase de una forma bonita.
*/

class Alimento {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 0;
    }
    mostrarParametros() {
        return this.nombre + " --> " + this.precio + "€ ";
    }
    mostrarCabecera() {
        return "<strong>| NOMBRE | PRECIO |</strong>";
    }
}