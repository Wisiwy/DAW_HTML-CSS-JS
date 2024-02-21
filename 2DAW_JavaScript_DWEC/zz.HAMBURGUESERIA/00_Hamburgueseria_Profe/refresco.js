import { Producto } from './producto.js';

//Definición de Refresco
export class Refresco extends Producto {
    constructor(cantidad, ingredientes, nombre, alcohol, azucar, tamanho) {
        super(cantidad, ingredientes, nombre);
        this.alcohol = alcohol; //bool
        this.azucar = azucar; //bool

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