import {Producto} from './producto.js';

//Definición de Patatas
export class Patatas extends Producto{
    constructor(cantidad, ingredientes,nombre, opcionCeliaco, opcionVegetariano, tamanho){
        super(cantidad, ingredientes, nombre);
        this.opcionCeliaco= opcionCeliaco; //bool
        this.opcionVegetariano=opcionVegetariano;  //bool
        this.tamanho=tamanho; //P, M, G
    }
}