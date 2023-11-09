import { Producto } from "./producto";

export class Patatas extends Producto{
    constructor(cantidad, ingredientes, nombre, tamanho){
        super(cantidad,ingredientes,nombre);
        this.tamanho = tamanho; //Opciones. S, M , L
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