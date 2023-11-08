import {Producto} from './producto.js';

//Definición de Postre
export class Postre extends Producto{
    constructor(cantidad, ingredientes,nombre, opcionCeliaco, opcionVegetariano){
        super(cantidad, ingredientes, nombre);
        this.opcionCeliaco= opcionCeliaco; //bool
        this.opcionVegetariano=opcionVegetariano;  //bool
        this.aptoInLactosa=aptoInLactosa;  //bool
    }
}

