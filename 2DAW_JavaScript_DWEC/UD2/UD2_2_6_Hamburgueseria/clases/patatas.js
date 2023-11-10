import { Producto } from "./producto.js";

export class Patatas extends Producto{
    constructor(cantidad, ingredientes, nombre, tamanho){
        super(cantidad,ingredientes,nombre);
        this._tamanho = tamanho; //Opciones. S, M , L
    }
    set tamanho(tamanho) {
        return this._tamanho = tamanho; //Str: S,M,L
    }

    get tamanho() {
        return this._tamanho; //Str: S,M,L
    }

    funcionIngredientes(){
        return `Ingredientes ${this.nombre}: ${this.ingredientes}`
    }
}