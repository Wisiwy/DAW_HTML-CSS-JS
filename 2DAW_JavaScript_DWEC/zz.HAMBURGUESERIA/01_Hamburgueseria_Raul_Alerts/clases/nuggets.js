 import {Producto} from './producto.js';

//Definición de Refresco
export class Nuggets extends Producto{
    constructor(cantidad, ingredientes,nombre, celiaco, vegetariano){
        super(cantidad, ingredientes, nombre);
        this.celiaco=celiaco; //bool
        this.vegetariano=vegetariano; //bool
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