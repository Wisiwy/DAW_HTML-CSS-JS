import { Producto } from "./producto";

export class Refresco extends Producto {
    constructor(cantidad, ingredientes, nombre, alcohol, azucar, tamanho) {
        super(cantidad, ingredientes, nombre);
        this.alcohol = alcohol;
        this.azucar = azucar;
        this.tamanho = tamanho; //S , M , L
    }

    set tamanho(tamanho) {
        return this.tamanho = tamanho; //Str: S,M,L
    }

    get tamanho() {
        return this.tamanho; //Str: S,M,L
    }

    funcionIngredientes(){
        return `Ingredientes ${this.nombre}: ${this.ingredientes}`
    }
}