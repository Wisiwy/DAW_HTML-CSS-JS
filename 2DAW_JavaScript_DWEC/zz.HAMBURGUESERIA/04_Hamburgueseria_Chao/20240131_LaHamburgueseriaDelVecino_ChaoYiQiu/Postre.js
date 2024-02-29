import { Producto } from "./Producto.js";

export class Postre extends Producto{
    constructor(precio, ingredientes){
        super(precio, ingredientes);
    }

    obtenerPrecios(){
        return this.precio;
    }

    obtenerIngredientes(){
        return this.ingredientes;
    }
}