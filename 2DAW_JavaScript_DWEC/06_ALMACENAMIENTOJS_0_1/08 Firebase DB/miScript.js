/*
Persistencia de datos
DB as a service 
Como Firebase o mLab (emplea MongoDB)
*/ 

/*
1.
Firabase Console
FireStore Cloud Console
Crear un nuevo proyecto
Realtime DB - de pruebas
*/

//Declaración de variables
let btn_Guardar = document.getElementById("btn_Guardar");
let btn_Importar = document.getElementById("btn_Importar");
let modificando = false;

//Event listener para botones
btn_Guardar.addEventListener("click",almacenarContactos);
btn_Importar.addEventListener("click",importarDB);

//1. Creamos una clase persona
class Persona{
    constructor(nombre, id, edad,comida_favorita){
        this.nombre=nombre; //String
        this.id=id;  //String
        this.edad=edad;  //String
        this.comida_favorita = comida_favorita; //String
    }
}

let coleccionPersonas = []; 

//2. Función para pasar la informacion del form a una coleccion de personas
function almacenarContactosColeccion(){
    let name = document.getElementById("nombre").value;
    let kid =document.getElementById("id").value;
    let age =document.getElementById("edad").value;
    let fav_food =document.getElementById("comida_favorita").value;
   
    let auxPer = new Persona(name, kid, age,fav_food);
    coleccionPersonas.push(auxPer);

    name ="";
    kid ="";
    age ="";
    fav_food =""

    /*name = document.getElementById("nombre").value="";
    kid =document.getElementById("id").value="";
    age =document.getElementById("edad").value="";
    fav_food =document.getElementById("comida_favorita").value="";*/
}

//3. Copiar la configuración de FireBase de JS
//se ha creado un app web y te sale el código de JS
//para utilizar sin emplear node.js (CDN)
//Import the functions you need from the SDKs you need
//IMPORTANTE: Crea un una Cloud Firestore DB, no una Realtime Database
//Buscar agregar CDN para ver qué direcciones te permiten hacer las importaciones

//Código de API docs pegado y modificado
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore,
        setDoc,
        doc, 
        collection,
        getDocs,
        deleteDoc,
        getDoc,
        updateDoc
      } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",  
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//FIN-Código de API docs pegado y modificado

//4. Crear nuestro contexto, getFirestore devuelve objeto DB
var database = getFirestore(app);

importarDB();

//5. Insertar datos en nuestra FireStore DB
async function almacenarContactos(evento){

    let name = document.getElementById("nombre").value;
    let kid =document.getElementById("id").value;
    let age =document.getElementById("edad").value;
    let fav_food =document.getElementById("comida_favorita").value;

    let auxPer = new Persona(name, kid, age,fav_food);

    name ="";
    kid ="";
    age ="";
    fav_food="";

    //Estructura: Coleccion/ Subcoleccion-Documentos/ Documentos-Elementos
    await setDoc(doc(database,'usuarios', auxPer.id),{
        nombre: auxPer.nombre,
        edad: auxPer.edad,
        comida: auxPer.comida_favorita
    });

    alert('¡Información guardada!');
    importarDB();
}


//6. Recuperar datos de nuestra FireStore DB
//"Fotografía" de los TODOS datos actuales
//https://firebase.google.com/docs/firestore/query-data/get-data?hl=es-419
async function importarDB(){
    let muestra = document.getElementById("muestra");
    muestra.innerHTML="";

    const querySnapshot = await getDocs(collection(database, "usuarios"));
    querySnapshot.forEach((doc) => {
         // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        muestra.innerHTML+= `<div><h4> ${doc.id}</h4>
                                <p>${doc.data().nombre}</p>
                                <p>${doc.data().edad}</p>
                                <p>${doc.data().comida}</p><br> 
                                
                                <input type="button" class="btn_Eliminar" value="Eliminar" id=el${doc.id}>
                                <input type="button" class="btn_Editar" value="Editar" id=ed${doc.id}>
                                </div>`;
    });         

    //Recopilación de todos los botones y asignación de callback a evento click
    var btnsEliminar= document.querySelectorAll(".btn_Eliminar");
    var btnsEditar = document.querySelectorAll(".btn_Editar");
    btnsEliminar.forEach(btn =>{
        btn.addEventListener("click",eliminarDatoDB);
    })
    btnsEditar.forEach(btn =>{
        btn.addEventListener("click",editandoCampo);
    })

    alert("Importado todo.");
}

//7. Eliminar datos de nuestra FireStore DB
async function eliminarDatoDB(evento){

    let id_dato = evento.target.id;
    id_dato= id_dato.slice(2);
    console.log(id_dato); 

    await deleteDoc(doc(database,'usuarios',id_dato));
    alert("Elminada selección.");
    importarDB();
}


//8-1. Dejamos la apliación en un estado de edición
async function editandoCampo(evento){
    //8-2. Pasamos al formulario la información recuperada por id de un elemento solo
    let id_dato= evento.target.id;

    //Modificación del botón por propósito de UX 
    let current_btn= document.getElementById(evento.target.id);
    current_btn.value="Terminar";
    current_btn.className=".btn_modificacion";
    current_btn.addEventListener("click",actualizarDatoDB);

    //Nos quedamos con el id util para la DB
    id_dato= id_dato.slice(2); 
    const docuDB = await getDoc(doc(database,'usuarios',id_dato));

    document.getElementById("nombre").value= docuDB.data().nombre;
    document.getElementById("id").value= docuDB.id;
    document.getElementById("edad").value= docuDB.data().edad;
    document.getElementById("comida_favorita").value= docuDB.data().comida;
 
    //8-3. Modificamos el campo deseado.

    //8-4. Preparamos la información a pasar en newFields

    //8-5. Llamamos a la función de actualizar


}


//9. Actualizar campo de un dato en concreto de nuestra DB
async function actualizarDatoDB(evento){

    let name = document.getElementById("nombre").value;
    let kid =document.getElementById("id").value;
    let age =document.getElementById("edad").value;
    let fav_food =document.getElementById("comida_favorita").value;

    let auxPer = new Persona(name, kid, age,fav_food);

    //modificación de botón al finalizar
    let current_btn= document.getElementById(evento.target.id);
    current_btn.value="Editar";
    current_btn.className=".btn_Editar";
    current_btn.addEventListener("click",editandoCampo);

    let id_dato= evento.target.id;
    id_dato= id_dato.slice(2); 

    let newFields ={
        nombre: auxPer.nombre,
        edad: auxPer.edad,
        comida: auxPer.comida_favorita
    }
    
    await updateDoc(doc(database,'usuarios',id_dato), newFields);

    name = document.getElementById("nombre").value="";
    kid =document.getElementById("id").value="";
    age =document.getElementById("edad").value="";
    fav_food=document.getElementById("comida_favorita").value="";

    importarDB();
}





