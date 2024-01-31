/* TODO no funciona borrar al final 
 import {Bebida} from "./clases/Bebida.js";
import {Complemento} from "./clases/Complemento.js";
import {Hamburguesa} from "./clases/Hamburguesa.js";
import {Pedido} from "./clases/Pedido.js";
import {Postre} from "./clases/Postre.js"; */

//Instanciación Pedido
var pedido = new Pedido();

/* INSTANCIACIÓN ARRAYs para cada grupo de Alimentos(Hamburguesas, Bebidas, Postres y Complementos).
*  Los arrays será constantes para que no se modifiquen 
*  y en el primer valor de cada elemento declararemos su id para utilizarla más tarde al recorrerlo.
*/
const hamburguesas = [
    new Hamburguesa("hamburguesas[0]", "Gallega", ["Carne de buey", "pan de cerveza negra", "queso San Simón", "lacón crujiente", "pimientos de Padrón", "ajada"], false, 15.50),
    new Hamburguesa("hamburguesas[1]", "Bump Green", ["remolacha", "quinoa"], true, 7.50),
    new Hamburguesa("hamburguesas[2]", "Clasica", ["ternera", "huevo", "pepinillos", "cebolla", "tomate", "queso"], false, 10.50)
];
const bebidas = [
    new Bebida("bebidas[0]", "Sprite", 1.50),
    new Bebida("bebidas[1]", "Cocacola", 1.50),
    new Bebida("bebidas[2]", "Fanta", 1.50),
    new Bebida("bebidas[3]", "Acuarius", 1.50),
    new Bebida("bebidas[4]", "Nestea", 1.50),
    new Bebida("bebidas[5]", "Agua", 1.20),
    new Bebida("bebidas[6]", "CruzCampo", 1)
];
const postres = [
    new Postre("postres[0]", "Helado", "chocolate", 2.50),
    new Postre("postres[1]", "Helado", "nata", 2.00),
    new Postre("postres[2]", "Batido", "vainilla", 2.50),
    new Postre("postres[3]", "Batido", "arandanos", 3.00),
    new Postre("postres[4]", "Tarta", "queso", 2.25),
    new Postre("postres[5]", "Tarta", "chocolate", 1.90)
];
const complementos = [
    new Complemento("complementos[0]", "Patatas", 1.80),
    new Complemento("complementos[1]", "Nuggets", 3.20)
];


/**BOTONES PARA NAVEGACIÓN DEL MENÚ
 * Al pulsar boton se pasa el menu que quiero mostrar
 * @param {*} tipoProducto 
 */
function mostrarMenu(tipoProducto) {
    switch (tipoProducto) {
        //dependiendo qué está seleccionado, paso diferentes arrays a la funcion que muestra el menú.
        case "hamburguesas":
            mostrarProductos(hamburguesas);
            break;
        case "bebidas":
            mostrarProductos(bebidas);
            break;
        case "complementos":
            mostrarProductos(complementos);
            break;
        case "postres":
            mostrarProductos(postres);
            break;
        default:
            break;
    }
}
/**ESCTIBIR MENÚ SEGUN EL BOTON ELEGIDO 
 * Muestro el array de Alimentos especificaco en mostrarMenu()
 * @param {*} arrays 
 */

function mostrarProductos(arrays) {
    //cojo el texto de una unorder list que por defecto esta vacío
    var contenidoMenu = document.getElementById("contenidoMenu");
    //Borro el texto anterior
    contenidoMenu.innerHTML = "";
    //Creo la cabecera
    contenidoMenu.innerHTML += `<ul>${arrays[0].mostrarCabecera()}<br/><br/>`;

    //Recorrer los Arrays y escribirlo

    arrays.forEach((alimento) => {
        let cadena = "";
        //muestro los parametros
        cadena += alimento.mostrarParametros();

        /*BOTONES (+) y (-)
        *añado dos botones (+) y (-) además de un texto entre medias que dirá la cantidad de ítems de ese tipo se han solicitado.(defecto será c)
        *   - El botón del (+) al ser pulsado, invoca a la función añadirProducto(producto).
        *   - El botón del (-) al ser pulsado, invoca a la función suprimirProducto(producto).
        * El párametro "producto" será el id de el Alimento.
        *
        * IMPORTANTE: El texto dentro que se genera en azul clarito, tiene id en función del alimeto,
        * ya que la forma de declarar su id es la siguiente: {id="count'+Alimento.id+'"}
        */
        cadena += `<button  onclick="suprimirProducto(${alimento.id})"> - </button>
                    <a id="count${alimento.id}" style="color:DodgerBlue;">${alimento.cantidad}</a>
                    <button  onclick="anadirProducto(${alimento.id})"> + </button> `;
        contenidoMenu.innerHTML += `<li>${cadena}</li>`;
    });
    contenidoMenu.innerHTML += "</ul>";
}

/**
 * AÑADIR PRODUCTO a la CESTA
 * @param {*} producto 
 */
function anadirProducto(producto) {
    let cestaAux = pedido.getCesta();
    //cojo el texto de la cantidad del producto
    let texto = document.getElementById(`count${producto.id}`);
    //añado 1 a la cantidad del producto
    producto.cantidad++;
    //actualizo la info del texto
    texto.innerHTML = producto.cantidad;
    /*Y añado el producto al Ticket SOLO y SOLO si éste no estaba anteriormente.
    * Así condeguimos evitar duplicados. 
    * Si ya existiera, se habría cambiado la cantidad del producto antes y sto afectaría tambien al ticket
    */
    if (!cestaAux.includes(producto))
        cestaAux.push(producto);
    pedido.setCesta(cestaAux);
}
/**
 * QUITAR PRODUCTO de la cesta
 * @param {*} producto 
 */
function suprimirProducto(producto) {
    let cestaAux = pedido.getCesta();
    //cojo la posición del producto a suprimir
    let posicion = cestaAux.lastIndexOf(producto);
    //cojo el texto de la cantidad del producto
    let texto = document.getElementById("count" + producto.id);

    //si "posición" es igual a -1 significa que no existe el producto en el ticket.
    //Teniendo esto en cuenta, cuando haya minimo 1 objeto de ése tipo en el ticket se ejecutará el bucle.
    if (posicion != -1 && texto.innerHTML >= 1) {
        //resto 1 a la cantidad
        producto.cantidad--;
        //actualizo el texto con la nueva cantidad
        texto.innerHTML = producto.cantidad;
        // Y finalmente si la cantidad es 0, elimino el producto del ticket
        if (producto.cantidad == 0)
            cestaAux.splice(posicion, 1);
    }
    pedido.setCesta(cestaAux);
}

/**
 * MOSTRAR CESTA y su TOTAL a PAGAR. 
 */
function generaTicket() {
    let cestaAux = pedido.getCesta();
    let totalPagar = pedido.calcularTotal();
    
    //creo una variable local para el texto del ticket/factura llamada "elementoTotal"
    let elementoTotal = document.getElementById("precioTotal");
    elementoTotal.innerHTML = "";

    //Muestro el contenido del ticket en 2 pasos:
    cestaAux.forEach((alimento) => {
        //Primero muestro los ítems del pedido con su cantidad y el precio total de ese producto
        elementoTotal.innerHTML += `<br>${alimento.nombre} -- ${alimento.cantidad} --> ${alimento.precio * alimento.cantidad} €`;
    });
    //Y por último muestro el precio total
    elementoTotal.innerHTML += `<br><br> Precio total:  ${totalPagar} €`;

}
/* ************************************************ */

/**
 * SETEAR INFO en PEDIDO con textarea
 */
function setearInfo(){
    let infoAux = pedido.getInfoExtra();
    infoAux+=document.getElementById('infoextra').value;
    pedido.setInfoExtra(infoAux);
}
function tramitarPedido(){
    alert(pedido.getId());
    //Guardamos pedido en la sesion navegador.
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    alert("Tramitando pedido...");
    //Cambiamos de panatalla. 
    setTimeout(function() {
        window.location.href = '../views/recibo.html';
    }, 1000);    
}

/**
 * 
 */
function hacerPedido() {
    var infoExtra = document.getElementById("infoextra");
    let info = "hola";
    var pedido_cliente = new Pedido(cesta, info);
    console.log(pedido_cliente);
    sessionStorage.setItem("pedido", JSON.stringify(pedido_cliente));
    //guardar variable objeto en sessionStorage
    //almacenarSessionStorage(pedido_cliente);
}

/* ********************************************** */

/* 1. Crear pedido  con la cesta */
/* var element_infoExtra = document.getElementById("infoextra");
var infoExtra= element_infoExtra.value; */

//sessionStorage.setItem("miCesta", cesta);

/* function hacerPedido() {


    //Intento fallido de redireccionar
    //window.location.href = '../views/recibo.html';

    //Pasar cesta[] por session storage
        //let cesta =sessionStorage.getItem("miCesta");

    //recoger info cesta y textarea
    let infoExtra = "No hay info extras";
    var pedido_cliente = new Pedido(cesta, infoExtra);
    console.log(pedido_cliente);

    //0. Mostrar id del pedido, numero referencia.
    var element_titulo = document.getElementById("tituloRecibo");
    element_titulo.innerText = "Tu pedido" + pedido_cliente.getId();

    //1.Mostrar productos del pedido
    mostrarPedido(pedido_cliente);

    //2. Mostrar precio total a pagar. 
    let element_pagar = document.getElementById("totalPagar");
    element_pagar.innerText = pedido_cliente.getPrecioTotal;

    //3. Orden del pedido, en cocina orden . Guardar en sesion. Sera orden por sersion de navegacion 

    //4. Guardar pedido, por dia mirar donde. (¿?lOCAL storage.)
    //ARRAY CON HISTORIAL DEL PEDIDOS.  

    //5. Cancelar pedido. Borrado. 

    //6. Recuperar pedido en el index. 

} */

function mostrarPedido(pedido) {

    window.location.href = '../views/recibo.html';


    let elementoProductos = document.getElementById("contenido_recibo");
    let arrayCesta = pedido.getCesta();
    arrayCesta.forEach((Alimento) => {
        elementoProductos.innerHTML += "<br>" + Alimento.nombre + "  -- " + Alimento.cantidad + " -->" + Alimento.precio * Alimento.cantidad + "€";
    });
}
