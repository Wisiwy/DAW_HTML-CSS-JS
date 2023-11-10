        import { Producto } from './producto.js';

export class Postre extends Producto {
    constructor(cantidad, ingredientes, nombre, celiaco, vegetariano, lactosa) {
        super(cantidad, ingredientes, nombre);
        this.celiaco = celiaco;
        this.vegetariano = vegetariano;
        this.lactosa = lactosa;
    }


}