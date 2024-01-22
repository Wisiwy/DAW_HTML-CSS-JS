var date = new Date();

console.log(date);
/* Msj date */
var year = date.getFullYear();
var month = date.getMonth() + 1;
var dau = date.getDay();
console.log("Hola hoy es " + day + "del mes " + month + "del año " + year);

/* MATH OBJECT */
console.log(Math.PI);
console.log(Math.min(1, 2, 3, 5, 123, 52)); //calcula el minimo de los numeros
console.log(Math.round(4.4)); // redondeo
console.log(Math.floor(4.4)); // redondeo
console.log(Math.ceil(4.4)); // redondeo

var aleatoio = Match.random() * 100;
function generarNum(numeroMax) {
    return Math.round(Math.random() * numeroMax);
}

/* ARRAYS */
var colores = ["verde", "Azul", "rojo"]
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]); //undefined

colores.length;
colores.push("negro"); //añadir elementos al array
console.log(ccolores[3]); //ahora tiene valor "negro"

/* Bucles */
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
}

colores.forEach(element => {

});
/* Ejercicios */
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    if (i % 2)
        console.log(numeros[i]);
    suma += numeros[i];
    console.log("Suma: " + suma)
}
