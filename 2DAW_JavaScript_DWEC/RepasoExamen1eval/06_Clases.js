//////////////////////////////////////
///////// CLASES en JAVASCRIPT  //////
//////////////////////////////////////

/**Funciones especiales, tienen dos componenetes: 
 *  - Expresiones de clases
 *  - Declaraciones de clases
 */

//**DECLARACIÓN DE CLASES: palabra reservada 'class'
class Rectangulo {
    constructor (alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

//**EXPRESIONES DE CLASES: anonimas o nombradas

//anonima
let Rectangulo = class {
    constructor (alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}
//nombre
let Rectangulo = class Rectangulo2 {
    constructor (alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

/* ------------------------------------------------------------------ */
//**METODOS PROTOTIPO
//**METODOS ESTÁTICOS
