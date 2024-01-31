/* import { Alimento } from "./Alimento.js"; */
//Defino la clase Postre heredando casi todo de la clase padre pero añadiendo el sabor.
class Postre extends Alimento {
    constructor(id, nombre, sabor, cantidad, precio) {
        super(id, nombre, cantidad, precio);
        //añado el parametro sabor
        this.sabor = sabor;
    }
    //edito los metodos para añadir el atributo valor tanto a la cabecera como a los parámetros.
    mostrarParametros() {
        return this.nombre + " " + this.sabor + " --> " + this.precio + "€ ";
    }
    mostrarCabecera() {
        return "<strong>| NOMBRE | SABOR | PRECIO |</strong>";
    }
}