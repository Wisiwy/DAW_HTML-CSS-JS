let btn_Guardar = document.getElementById("btn_Guardar");




class Persona {
    constructor(nombre, id, edad, comida_favorita){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

let coleccionPersonas = [];

function almacenarContactosColeccion(){

let name = document.getElementById("nombre").value;
let kid = document.getElementById("id").value;
let edad = document.getElementById("edad").value;
let fav_food = document.getElementById("comida_favorita").value;

let auxPer = new Persona(name, kid, age, fav_food);
coleccionPersonas.push(auxPer);

name = "" ;
kid ="";
edad = "";
fav_food ="" ;

}

import{initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";


