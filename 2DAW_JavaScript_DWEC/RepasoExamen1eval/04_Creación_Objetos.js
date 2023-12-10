//////////////////////////////////////
// /////// CREACION DE OBJETOS /////
/////////////////////////////////////

/****  Con INICIADOR de OBJETO*/
var person = {
    nombre: 'Maria',
    edad: 34,
    color_pelo: 'rubio'
}
//creacion de objeto si cumple condicion
if (condicion > 1) var x = { saludo: 'Hola' }

//objeto cuya propiedad es otro objeto
var myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } }

 /* ------------------------------------------------------------------ */

 //**** FUNCIÓN CONSTRUCTORA.  */

 function Car (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
 }
 var myCar = new Car ("Eagle", "Talon",1993)

