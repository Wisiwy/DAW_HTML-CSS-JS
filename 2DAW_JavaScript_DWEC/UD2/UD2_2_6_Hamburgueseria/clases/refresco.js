import { Producto } from "./producto.js";

export class Refresco extends Producto {
    constructor(cantidad, ingredientes, nombre, alcohol, azucar, tamanho) {
        super(cantidad, ingredientes, nombre);
        this.alcohol = alcohol;
        this.azucar = azucar;
        this._tamanho = tamanho; //S , M , L
    }



    set tamanho(tamanho) {
        return this._tamanho = tamanho; //Str: S,M,L
    }

    get tamanho() {
        return this._tamanho; //Str: S,M,L
    }


    funcionIngredientes() {
        return `Ingredientes ${this.nombre}: ${this.ingredientes}`
    }
}