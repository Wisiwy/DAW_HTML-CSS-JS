//Importación de otros ficheros y clases de JS
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import
//https://lenguajejs.com/javascript/oop/clases/
//Definición de métodos privados
//https://lenguajejs.com/javascript/oop/metodos-clase/



/*
¿Qué es un módulo?

Un módulo es una pieza de código que se utiliza para encapsular 
y separar una funcionalidad específica de una aplicación en un 
archivo separado. Los módulos pueden contener variables, funciones 
y clases que se pueden exportar e importar a otros archivos.

Los módulos en JavaScript se introdujeron en la versión ES6 (ECMAScript 2015) 
y se utilizan ampliamente en el desarrollo de aplicaciones web modernas.
https://vabadus.es/blog/otros/organiza-y-reutiliza-tu-codigo-con-modulos-en-javascript
*/


export class Producto{

    
    constructor(cantidad, ingredientes, nombre){
        //this.precio=precio; 
        this.cantidad=cantidad; //int
        this.ingredientes=ingredientes;  //String
        this.nombre=nombre;  //String
    }

    //Getters Setters
    //Estableceré condición "admin" de acceso para este SET
    set precio (precio){
        this._precio= precio; //Decimal 
    }

    get precio() {
        return this._precio;
    }

    funcionIngredientes(){
        return `Estos son los ingredientes: ${this.ingredientes}`
    }
}

//Otro procedimiento para exprotar
//https://es.javascript.info/import-export
//export{Producto};
