/* import { Alimento } from "./Alimento"; */
//Defino la clase bebida heredando casi todo de la clase padre pero cambiando el precio.
class Bebida extends Alimento {
    constructor(id, nombre, precio, cantidad) {
        super(id, nombre, precio, cantidad);
    }
}