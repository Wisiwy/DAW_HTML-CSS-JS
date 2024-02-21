import { Producto } from "./producto.js";

export class Hamburguesa extends Producto {

    constructor(cantidad, ingredientes, nombre, celiaco, vegetariano) {
        super(cantidad, ingredientes, nombre);
        this.celiaco = celiaco;
        this.vegetariano = vegetariano;
    }
    //Override función padre
    funcionIngredientes(){
        return `Estos son los ingredientes de la hamburguesa: ${this.ingredientes}`
    }
}