//Info indexedDB
//https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API/Using_IndexedDB
//https://developer.chrome.com/docs/devtools/storage/indexeddb/?utm_source=devtools


var db;

//1. Iniciar base de datos  
function initDB(){
    var solicitud = indexedDB.open("DB-contactos");

    //3 posibles eventos desde la DB
    //2. cuando hay fallo 
    solicitud.addEventListener("error", mostrarError);
    //3. cuando se crea o abre bien la DB
    solicitud.addEventListener("success", comenzar);
    //4. cuando intenta abrir un DB no existente
    solicitud.addEventListener("upgradeneeded", crearAlmacen);

}

window.addEventListener("load",initDB);

function mostrarError(evento){
    alert("Tenemos un error: " +evento.code + " : " + evento.message);
}

function comenzar(evento){
    db = evento.target.result;
    console.log("funcion comenzar");

    //8.Llamamos a mostrar
    mostrar();
}

function crearAlmacen(evento){
    var baseDatos= evento.target.result;
    //Expresamos nombre de almacen/coleccion y documento. Los elementos tendran id único
    var almacen = baseDatos.createObjectStore("Contactos", {keyPath: "id"});
    //nombre, key, llave unica?
    almacen.createIndex("buscarNombre", "nombre", {unique: false});

    console.log("funcion crear almacén");
}

//Creación de CRUD
//Todo se hace mediante transacciones
//5. Responder al botn para guardar elementos
let btnGuardar= document.querySelector("#btn_Guardar");

function almacenarContacto(){
    var N = document.querySelector("#nombre").value;
    var I = document.querySelector("#id").value;
    var E = document.querySelector("#edad").value;

    //6. Operacion de escritura a DB
    // se indicar el almacen, tipo de transaccion (read only, read Write)
    let transaccion = db.transaction(["Contactos"], "readwrite");
    //abrir almacen con object store( si no, no se puede hacer) 
    let almacen = transaccion.objectStore("Contactos");
    //añadir el elemento
    //add: si la llave no existe, almacena un nuevo objeto. si existe, no hace nada 
    almacen.add({
        nombre: N,
        id: I,
        edad: E
    });

    N ="";
    I ="";
    E ="";

   /* N = document.querySelector("#nombre").value ="";
    I = document.querySelector("#id").value="";
    E = document.querySelector("#edad").value="";*/

    //9. Para actualizar la muestra tras guardar nuevo resultado
    transaccion.addEventListener("complete", mostrar());
}


//7. Cursores para elegir mediante punteros los elementos de la DB
let cajaContactos;
cajaContactos= document.getElementById("muestra");

function mostrar(){
    cajaContactos.innerHTML="";
    
   // se indicar el almacen, tipo de transaccion (read only, read Write)
   let transaccion = db.transaction(["Contactos"]);
   //abrir alamacen con object store( si no, no se puede hacer) 
   let almacen = transaccion.objectStore("Contactos");


   let puntero = almacen.openCursor();
   puntero.addEventListener("success", mostrarContactos);
}

function mostrarContactos(evento){
    let puntero = evento.target.result;
    if(puntero){
        cajaContactos.innerHTML+="<div>"+
        puntero.value.nombre + ' / '+
        puntero.value.id + ' / '+
        puntero.value.edad + 
        //11.añadimos el botón para editar
        "<input type='button' class='btn_editar' value='Editar' onclick = 'seleccionarContacto(\""
        + puntero.value.id +"\")'>"+
        "</div>";
        //8. Sin esta línea el puntero se detiene en el primer elemento
        puntero.continue();
    }
}

//10. Modificar elementos de la indexedDB
function seleccionarContacto(key){
    // se indicar el almacen, tipo de transaccion (read only, read Write)
    let transaccion = db.transaction(["Contactos"],"readwrite");
    //abrir alamacen con object store( si no, no se puede hacer) 
    let almacen = transaccion.objectStore("Contactos");

    //va a buscar lo que le pasamos como parámetro, key
    let solicitud = almacen.get(key);
    solicitud.addEventListener("success",
        function(){
            document.querySelector("#nombre").value = solicitud.result.nombre;
            document.querySelector("#id").value = solicitud.result.id;
            document.querySelector("#edad").value = solicitud.result.edad;
            //pasamos lo recogido al formulario
        }
    );

    //12.
    let padreBoton= document.querySelector(".padre_boton");
    padreBoton.innerHTML = "<input type='button' class='btn_Actualizar' value='Actualizar'"+
    "onclick ='actualizarContacto()'>";
}

function actualizarContacto(){
    var N = document.querySelector("#nombre").value;
    var I = document.querySelector("#id").value;
    var E = document.querySelector("#edad").value;

    //6. Operacion de escritura a DB
    // se indicar el almacen, tipo de transaccion (read only, read Write)
    let transaccion = db.transaction(["Contactos"], "readwrite");
    //abrir alamacen con object store( si no, no se puede hacer) 
    let almacen = transaccion.objectStore("Contactos");
    //añadir el elemento
    //put se diferencia de add
    //en que si existe la llave, la modifica, si no, no hace nada
    almacen.put({
        nombre: N,
        id: I,
        edad: E
    })

    N ="";
    I ="";
    E ="";
    /*var N = document.querySelector("#nombre").value ="";
    var I = document.querySelector("#id").value="";
    var E = document.querySelector("#edad").value="";*/

    //9. Para actualizar la muestra tras guardar nuevo resultado
    transaccion.addEventListener("complete", mostrar());

    //13.
    
    let padreBoton= document.querySelector(".padre_boton");
    padreBoton.innerHTML =  "<input type='button' id='btn_Guardar' value='Guardar' onclick ='almacenarContacto()'>";

}

