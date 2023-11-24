//Info indexedDB
//
//

var db;

//1.Iniciar base de datos
function initDB() {
    var solicitud = indexedDB.open("DB-contactos"); //genera un evento: "error", "success", "upgradeneede"
    //2. Posible eventos desde la DB
    //1.Cuando hay fallo
    solicitud.addEventListener("error", mostrarError);
    //2.cuando se crea o abre bien la DB
    solicitud.addEventListener("success", comenzar);
    //3. cuando intenta abrirr un DB no existente
    solicitud.addEventListener("upgradeneeded", crearAlmacen); //si no existe la crea

}

//3.Al cargar ventana llamamos funcion 'initDB'
window.addEventListener("load", initDB);

function mostrarError(evento) {
    alert("Tenemos un error: " + evento.code + " : " + evento.message);
}

function comenzar(evento) {
    db = evento.target.result;
    console.log("funcion comenzar");

    //8. Llamamos a mostrar
    mostrar();
}

function crearAlmacen(evento) {
    var baseDatos = evento.target.result;
    //creamos una tabla. expresamos nombre de almacen/coleccion y documento. Los elemntos tendran id único

    var almacen = baseDatos.createObjectStore("Contactos", { keyPath: "id" }); //creamos la colección dentro de la base de datos
    //(nombre, key ,{llave unica? false}


    almacen.createIndex("buscarNombre", "nombre", { unique: false });//

    console.log("funcion crear almacén");
}

//Todo se hace mediante trasnsacciones
//5 Responder al btn para guardar elementos.
let btnGuardar = document.querySelector("#btn_guardar");

//llamamos a esta funcion desde el boton de html buardar
function almacenarContacto() {
    var N = document.querySelector("#nombre").value;
    var I = document.querySelector("#id").value;
    var E = document.querySelector("#edad").value;

    //6.Operacion de escritura a DB 
    //se indicar el almacen, tipo de transaccion (readonly, read write)
    let transaccion = db.transaction(["Contactos"], "readwrite"); //metodo transaction tabla donde quiero meterla y que tipo de operacion
    //abrir almacen con object store (si no, no se puede hacer)
    let almacen = transaccion.objectStore("Contactos"); //asignar a variable almacen la tabla "Contactos" para meter la info
    //añadir el elementos
    //add: si la llave no existe, almacena un nuevo objeto. si existe, no hace nada 
    almacen.add({
        nombre: N,
        id: I, //esta configurado como keyPath en la declaracion de la tabla
        edad: E
    });

    N = "";
    I = "";
    E = "";
}
//7.cursores para elegir mediante punteros los elementos de la DB
let cajaContactos;
cajaContactos = document.getElementById("muestra");
function mostrar() {
    cajaContactos.innerHTML = "";

    let transaccion = db.transaction(["Contactos"], "readwrite"); //metodo transaction tabla donde quiero meterla y que tipo de operacion
    //abrir almacen con object store (si no, no se puede hacer)
    let almacen = transaccion.objectStore("Contactos"); //asignar a variable almacen la tabla "Contactos" para meter la info

    let puntero = almacen.openCursor();
    puntero.addEventListener("success", mostrarContactos);
}

function mostrarContactos(evento) {
    let puntero = evento.target.result;
    if (puntero) {
        cajaContactos.innerHTML += "<div>" +
            puntero.value.nombre + ' / ' +
            puntero.value.id + ' / ' +
            puntero.value.edad +
            //11.añadimos el btón para editar
            "<input type='button' class='btn_editar' value='Editar' onclick='seleccionarContacto(\"" + puntero.value.id + "\")'>" +
            "</div>";
        //sin esta línea el puntero se detiene en el primer elemento
        puntero.continue();

    }
}

//10.Modificar elementos de la indexedDB

function seleccionarContacto(key) {
    //se indicar el almacen, tipo de transaccion (readonly, read write)
    let transaccion = db.transaction(["Contactos"], "readwrite"); //metodo transaction tabla donde quiero meterla y que tipo de operacion
    //abrir almacen con object store (si no, no se puede hacer)
    let almacen = transaccion.objectStore("Contactos"); //asignar a variable almacen la tabla "Contactos" para meter la info

    //va a buscar lo que le pasamos como parámetro, key
    let solicitud = almacen.get(key);
    solicitud.addEventListener("success",
        function () {
            document.querySelector("#nombre").value = solicitud.result.nombre;
            document.querySelector("#id").value = solicitud.result.id;
            document.querySelector("#edad").value = solicitud.result.edad;
            //pasamos lo recogido al formulario
        }
    )
    //12. Modificamos boton. Pasa de guardar a actualizar
    let padreBoton = document.querySelector(".padre_boton");
    padreBoton.innerHTML = "<input type='button' class='btn_Actualizar' value= 'Actualizar'" +
        "onclick = 'actualizarContacto()'>";
}

//llamamos a esta funcion desde el boton de html buardar
function actualizarContacto() {
    var N = document.querySelector("#nombre").value;
    var I = document.querySelector("#id").value;
    var E = document.querySelector("#edad").value;

    //6.Operacion de escritura a DB 
    //se indicar el almacen, tipo de transaccion (readonly, read write)
    let transaccion = db.transaction(["Contactos"], "readwrite"); //metodo transaction tabla donde quiero meterla y que tipo de operacion
    //abrir almacen con object store (si no, no se puede hacer)
    let almacen = transaccion.objectStore("Contactos"); //asignar a variable almacen la tabla "Contactos" para meter la info
    //añadir el elementos
    //add: si la llave no existe, almacena un nuevo objeto. si existe, no hace nada 
    almacen.put({
        nombre: N,
        id: I, //esta configurado como keyPath en la declaracion de la tabla
        edad: E
    });

    N = "";
    I = "";
    E = "";

    //9. Para actualizar la muestra tras guardar nuevo resultado 
    transaccion.addEventListener("complete", mostrar());

    //13
    let padreBoton = document.querySelector(".padre_boton");
    padreBoton.innerHTML = "<input type='button' class='btn_Guardar' value= 'Guardar'" +
        "onclick = 'almacenarsContacto()'>";

}

