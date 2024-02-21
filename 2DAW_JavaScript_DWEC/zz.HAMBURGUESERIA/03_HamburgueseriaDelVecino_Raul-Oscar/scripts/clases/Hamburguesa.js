/* import { Alimento } from "./Alimento";
 */
//Defino la clase hamburguesa y añado los atributos "ingredientes" y un atributo que dice si es apta para veganos.
class Hamburguesa extends Alimento {
    constructor(id, nombre, ingredientes, vegana, cantidad, precio) {
        super(id, nombre, cantidad, precio);
        this.ingredientes = ingredientes;
        //Declaro vegana como un booleano
        this.vegana = Boolean(vegana);
    }
    //Añado los ingredientes a los parametros y la cabecera
    mostrarParametros() {
        return this.nombre + ": " + this.ingredientes + " --> " + this.precio + "€ ";
    }
    mostrarCabecera() {
        return "<strong>| NOMBRE | INGREDIENTES | PRECIO |</strong>";
    }
}