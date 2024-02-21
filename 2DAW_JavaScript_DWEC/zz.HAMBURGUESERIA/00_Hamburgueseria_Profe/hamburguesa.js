import {Producto} from './producto.js';

//Definición de Hamburguesa
export class Hamburguesa extends Producto{
    constructor(cantidad, ingredientes, nombre, opcionCeliaco, opcionVegetariano){
        super(cantidad, ingredientes, nombre);
        this.opcionCeliaco=opcionCeliaco; //bool
        this.opcionVegetariano=opcionVegetariano;  //bool
    }

    //override de la función padre
    funcionIngredientes(){
        return `Estos son los ingredientes de la hamburguesa: ${this.ingredientes}`
    }
   
}