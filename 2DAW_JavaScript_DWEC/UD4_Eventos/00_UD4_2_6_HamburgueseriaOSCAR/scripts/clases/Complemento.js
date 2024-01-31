/* import { Alimento } from "./Alimento";
 *///Defino la clase Complemento heredando todo de la clase padre.
class Complemento extends Alimento {
    constructor(id, nombre, cantidad, precio) {
        super(id, nombre, cantidad, precio);
    }
}