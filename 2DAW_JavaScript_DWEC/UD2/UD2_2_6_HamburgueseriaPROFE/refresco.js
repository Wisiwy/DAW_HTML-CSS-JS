import {Producto} from './producto.js';

//Definición de Refresco
export class Refresco extends Producto{
    constructor(cantidad, ingredientes, nombre, alcohol, azucar, tamanho){
        super(cantidad, ingredientes, nombre);
        this.alcohol=alcohol; //bool
        this.azucar=azucar; //bool
        this.tamanho=tamanho; //P, M, G
    }
}