 export class Producto {

    constructor(cantidad, ingredientes, nombre) {
        this.cantidad = cantidad;
        this.ingredientes = ingredientes;
        this.nombre = nombre;
    }
    /* Getters y Setters: Diferenciamos default, pequeño y grande */
    set precio(precio) {
        this._precio = precio;
    }
    set precioP(precioP) {
        this._precioP = precioP;
    }

    set precioG(precioG) {
        this._precioG = precioG;
    }

    get precio() {
        return this._precio;
    }
    get precioP() {
        return this._precioP;
    }
    get precioG() {
        return this._precioG;
    }

    funcionIngredientes() {
        return `Estos son los ingredientes: ${this.ingredientes}`;
    }
}