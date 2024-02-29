export class Producto{
    constructor(precio, ingredientes){
        this.precio = precio;
        this.ingredientes = ingredientes;
    }

    obtenerPrecios(){
        return this.precio;
    }

    obtenerIngredientes(){
        return this.ingredientes;
    }

}