/* Firebase: Servicio web. Base de datos. */

//Declaracion de varialbes
let btn_guardar = document.getElementById("btn_guardar");
//let btn_importar = document.getElementById("btn_importar");

let modificado = false;

//Event listener para botones
btn_guardar.addEventListener("click", almacenarContacto);
//btn_importar.addEventListener("click", importarDB);

//1. Cramos una clase persona
class Persona {
    constructor(nombre, id, edad, comida_favorita) {
        this.nombre = nombre;//string
        this.id = id;//int
        this.edad = edad; //string
        this.comida_favorita = comida_favorita; //string
    }
}

let coleccionPersonas = [];

//2.Función para pasar la información del form a una coleccion de perseonas
function almacenarContactosColeccion() {
    let name = document.getElementById("nombre").value;
    let kid = document.getElementById("id").value;
    let age = document.getElementById("edad").value;
    let fav_food = document.getElementById("comida_favorita").value;

    let auxPer = new Persona(name, kid, age, fav_food);
    coleccionPersonas.push(auxPer);

    name = "";
    kid = "";
    age = "";
    fav_food = "";
    /*    name = document.getElementById("nombre").value = "";
       kid = document.getElementById("id").value = "";
       age = document.getElementById("edad").value = "";
       fav_food = document.getElementById("comida_favorita").value = ""; */

}

//3.Copiar la configuración de FireBase de JS
//se ha creado un app web y te sale el código de JS
//para utiliszar sin emplear node.js(CDN)
//Import the fuctions you need from de SDKs you need
//IMPORTANTE: Crea una Cloud Firestore DB, no una Realtime Database
//Buscar agregar CDN para ver qué direcciones te permiten hacer las importaciones.

//Códio de API docs pegao y modificado. (COPIADO de web FIREBASE)
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
    getFirestore,
    setDoc,
    doc,
    collection,
    getDocs,
    deleteDoc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";


//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfA5rI34H0Qrwla8TN-aZHoHCZur7oAV8",
    authDomain: "dwec-firebasejs-ex1.firebaseapp.com",
    projectId: "dwec-firebasejs-ex1",
    storageBucket: "dwec-firebasejs-ex1.appspot.com",
    messagingSenderId: "533394013999",
    appId: "1:533394013999:web:8b2d72f2fd230927492bda",
    measurementId: "G-GMTBP9HCMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//4.Crear nuestro contexto, getFirestor devuelve objeto DB
var database = getFirestore(app); //le pasamos la config de firestore. Creamos la DB

importarDB();

//5.Insertar datos en nuestra FireStore DB
async function almacenarContacto(evento) {
    let name = document.getElementById("nombre").value;
    let kid = document.getElementById("id").value;
    let age = document.getElementById("edad").value;
    let fav_food = document.getElementById("comida_favorita").value;

    let auxPer = new Persona(name, kid, age, fav_food);

    name = "";
    kid = "";
    age = "";
    fav_food = "";

    //estructura: Coleccion /subcoleccion-documentos / documentos -elemenots
    await setDoc(doc(database, 'usuarios', auxPer.id), {
        nombre: auxPer.nombre,
        edad: auxPer.edad,
        comida: auxPer.comida_favorita,
    });
    alert('¡Información guardada!');
    importarDB();
}

//6. Recuperar datos de nuestra FireStore DB
//"Fotografia de todos los datos actuales.

async function importarDB() {
    let muestra = document.getElementById("muestra");
    muestra.innerHTML = "";

    //traemos la info de nuestra base de dato
    const querySnapshot = await getDocs(collection(database, "usuarios"));
    querySnapshot.forEach((doc) => {
        //doc.data() is never undefined for queay doc snapshots
        console.log(doc.id, "=>", doc.data());

        //`se usa acento para poderusar el ${}
        muestra.innerHTML += `<div><h4> ${doc.id}</h4> 
        <p>${doc.data().nombre}</p>
        <p>${doc.data().edad}</p>
        <p>${doc.data().comida}</p> <br>
        
        <input type = "button" class = "btn_eliminar" value= "Eliminar" id= el${doc.id}>
        <input type = "button" class = "btn_editar" value= "Editar" id= ed${doc.id}>
        </div>`;
        //en id añadimos "el" "ed" eliminar id o editar id
    })

    //recopilación de todos los botones y asignaci´n de callback a evento cancelIdleCallback
    var btnsEliminar = document.querySelectorAll(".btn_eliminar");
    var btnsEditar = document.querySelectorAll(".btn_editar");
    btnsEliminar.forEach (btn =>{
        btn.addEventListener("click", eliminarDatosDB);
    })
    btnsEditar.forEach (btn =>{
        btn.addEventListener("click", editandoCampo);
    })
    alert("Importado Todo.");
}