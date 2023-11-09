export class Producto {

    constructor(cantidad, ingredientes, nombre) {
        this.cantidad = cantidad;
        this.ingredientes = ingredientes;
        this.nombre = nombre;
    }
    /* Getters y Setters */
    set precio(precio) {
        this.precio = precio;
    }
    get precio() {
        return this.precio;
    }

    funcionIngredientes() {
        return `Estos son los ingredientes: ${this.ingredientes}`
    }
}