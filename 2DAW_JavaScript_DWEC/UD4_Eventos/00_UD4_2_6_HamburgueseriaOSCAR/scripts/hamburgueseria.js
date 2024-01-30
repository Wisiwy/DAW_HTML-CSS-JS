/* CREACION DE LA CLASE PEDIDO */
/**
 * 
 */
class Pedido {
    //Id autoincremental. 
    static ultimaId = 0;

    constructor(cesta, infoExtra) {
        this.id = ++Pedido.ultimaId;
        this.cesta = cesta; //array[] de alimentos
        this.precioTotal = this.calcularTotal(); //calculos con array cesta[]
        this.timestamp = new Date();
        this.infoExtra = infoExtra;
    }

    /**
     * 
     * @returns precion total del array cesta. 
     */
    calcularTotal() {
        return this.cesta.reduce(
            (accumulator, currentValue) => accumulator + currentValue.precio * currentValue.cantidad, 0);
    }
    //Saacado de generar ticket
    //let totalPagar = cesta.reduce((accumulator, currentValue) => accumulator + currentValue.precio * currentValue.cantidad, 0);

    //TODO set infoExtra con lo recogido en el cuadro de texto. 

    /* GETTERS */
    getId() {
        return this.id;
    }

    getCesta() {
        return this.cesta;
    }

    getPrecioTotal() {
        return this.precioTotal;
    }

    getTimestamp() {
        return this.timestamp;
    }

    getInfoExtra() {
        return this.infoExtra;
    }
    /* **** */

}

/*Defino 1 clase padre "alimento" con un constructor común (id, nombre y precio) 
* además de almacenar la cantidad de unidades que hay de cada alimento.
* Luego definire las clases hijos que heredan de alimento.
* La clase padre "alimento" contara también con dos funciones útiles:
*   - mostrarParametros() para mostrar los parametros de la clase de una forma bonita.
*   - mostrarCabecera() para mostrar la cabezera de la clase de una forma bonita.
*/
class alimento {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 0;
    }
    mostrarParametros() {
        return this.nombre + " --> " + this.precio + "€ ";
    }
    mostrarCabecera() {
        return "<strong>| NOMBRE | PRECIO |</strong>";
    }
}

//Defino la clase hamburguesa y añado los atributos "ingredientes" y un atributo que dice si es apta para veganos.
class Hamburguesa extends alimento {
    constructor(id, nombre, ingredientes, vegana, cantidad, precio) {
        super(id, nombre, cantidad, precio);
        this.ingredientes = ingredientes;
        //Declaro vegana como un booleano
        this.vegana = Boolean(vegana);
    }
    //Añado los ingredientes a los parametros y la cabecera
    mostrarParametros() {
        return this.nombre + ": " + this.ingredientes + " --> " + this.precio + "€ ";
    }
    mostrarCabecera() {
        return "<strong>| NOMBRE | INGREDIENTES | PRECIO |</strong>";
    }
}

//Defino la clase bebida heredando casi todo de la clase padre pero cambiando el precio.
class Bebida extends alimento {
    constructor(id, nombre, precio, cantidad) {
        super(id, nombre, precio, cantidad);
    }
}

//Defino la clase Complemento heredando todo de la clase padre.
class Complemento extends alimento {
    constructor(id, nombre, cantidad, precio) {
        super(id, nombre, cantidad, precio);
    }
}
//Defino la clase Postre heredando casi todo de la clase padre pero añadiendo el sabor.
class Postre extends alimento {
    constructor(id, nombre, sabor, cantidad, precio) {
        super(id, nombre, cantidad, precio);
        //añado el parametro sabor
        this.sabor = sabor;
    }
    //edito los metodos para añadir el atributo valor tanto a la cabecera como a los parámetros.
    mostrarParametros() {
        return this.nombre + " " + this.sabor + " --> " + this.precio + "€ ";
    }
    mostrarCabecera() {
        return "<strong>| NOMBRE | SABOR | PRECIO |</strong>";
    }
}


//Declaro la variable ticket donde guardaré los ítems que solicite el cliente. 
var cesta = [];

/* Instancio un array para cada grupo de alimentos(Hamburguesas, Bebidas, Postres y Complementos).
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
bebidas[5].precio = 1.2;
bebidas[6].precio = 1;
const postres = [
    new Postre("postres[0]", "Helado", "chocolate", 2.50),
    new Postre("postres[1]", "Helado", "nata", 2.00),
    new Postre("postres[2]", "Batido", "vainilla", 2.50),
    new Postre("postres[3]", "Batido", "arandanos", 3.00),
    new Postre("postres[4]", "Tarta", "queso", 2.25),
    new Postre("postres[5]", "Tarta", "chocolate", 1.90)];

const complementos = [
    new Complemento("complementos[0]", "Patatas", 1.80),
    new Complemento("complementos[1]", "Nuggets", 3.20)
];


/**
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
/**
 * Muestro el array de alimentos especificaco en mostrarMenu()
 * @param {*} arrays 
 */

function mostrarProductos(arrays) {
    //cojo el texto de una unorder list que por defecto esta vacío
    var contenidoMenu = document.getElementById("contenidoMenu");
    //Borro el texto anterior
    contenidoMenu.innerHTML = "";

    //Creo la cabecera
    contenidoMenu.innerHTML += "<ul>"
    contenidoMenu.innerHTML += arrays[0].mostrarCabecera();
    contenidoMenu.innerHTML += "<br/><br/>";

    //Recorro cada uno de los elementos del array para mostrar los distintos tipos de 
    //haburguesas, bebidas, complementos o postres diferentes.

    arrays.forEach((alimento) => {
        let Cadena = "";
        //muestro los parametros
        Cadena += alimento.mostrarParametros();

        /*añado dos botones (+) y (-) además de un texto entre medias que dirá la cantidad de ítems de ese tipo se han solicitado.
        * (por defecto cantidad=0). 
        *   - El botón del (+) al ser pulsado, invoca a la función añadirProducto(producto).
        *   - El botón del (-) al ser pulsado, invoca a la función suprimirProducto(producto).
        * El párametro "producto" será el id de el alimento.
        *
        * IMPORTANTE: El texto dentro que se genera en azul clarito, tiene id en función del alimeto,
        * ya que la forma de declarar su id es la siguiente: {id="count'+alimento.id+'"}
        */

        Cadena += '<button  onclick="suprimirProducto(' + alimento.id + ')"> - </button> <a id="count' + alimento.id + '" style="color:DodgerBlue;">' + alimento.cantidad + '</a>';
        Cadena += '<button  onclick="anadirProducto(' + alimento.id + ')"> + </button>  ';
        contenidoMenu.innerHTML += "<li>" + Cadena + "</li>";
    });
    contenidoMenu.innerHTML += "</ul>"
}
//función para añadir un alimento al ticket
function anadirProducto(producto) {
    //cojo el texto de la cantidad del producto
    let texto = document.getElementById("count" + producto.id);
    //añado 1 a la cantidad del producto
    producto.cantidad++;
    //actualizo la info del texto
    texto.innerHTML = producto.cantidad;

    /*Y añado el producto al Ticket SOLO y SOLO si éste no estaba anteriormente.
    * Así condeguimos evitar duplicados. 
    * Si ya existiera, se habría cambiado la cantidad del producto antes y sto afectaría tambien al ticket
    */
    if (!cesta.includes(producto))
        cesta.push(producto);

}
//función para quitar un alimento del ticket
function suprimirProducto(producto) {
    //cojo la posición del producto a suprimir
    let posicion = cesta.lastIndexOf(producto);
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
            cesta.splice(posicion, 1);
    }
}
//Función que se ejecuta al pulsar el botón de "generar ticket"
function generaTicket() {
    //creo una variable local "totalPagar" que recorre el ticket con la función reduce,
    //acumulando en cada posición el precio del producto por la cantidad de éste.
    let totalPagar = cesta.reduce((accumulator, currentValue) => accumulator + currentValue.precio * currentValue.cantidad, 0);
    //creo una variable local para el texto del ticket/factura llamada "elementoTotal"
    let elementoTotal = document.getElementById("precioTotal");
    elementoTotal.innerHTML = "";

    //Muestro el contenido del ticket en 2 pasos:
    cesta.forEach((alimento) => {
        //Primero muestro los ítems del pedido con su cantidad y el precio total de ese producto
        elementoTotal.innerHTML += "<br>" + alimento.nombre + "  -- " + alimento.cantidad + " -->" + alimento.precio * alimento.cantidad + "€";
    });
    //Y por último muestro el precio total
    elementoTotal.innerHTML += "<br><br> Precio total: " + totalPagar + "€";

}
/* ************************************************ */
function hacerPedido(){
    var infoExtra= document.getElementById("infoextra");
    let info = "hola";
    var pedido_cliente = new Pedido(cesta, info);
    console.log(pedido_cliente);
    sessionStorage.setItem("pedido",JSON.stringify(pedido_cliente));
    //guardar variable objeto en sessionStorage
    //almacenarSessionStorage(pedido_cliente);
}
function visualizarPedido(){
    let pedido = JSON.parse(sessionStorage.getItem("pedido"));
    console.log(pedido);

     //0. Mostrar id del pedido, numero referencia.
     var element_titulo = document.getElementById("tituloRecibo");
     element_titulo.innerText = "Tu pedido" + pedido.getId();

     //1.Mostrar productos del pedido
    mostrarPedido(pedido);

    //2. Mostrar precio total a pagar. 
    let element_pagar = document.getElementById("totalPagar");
    element_pagar.innerText = pedido.getPrecioTotal();

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
    arrayCesta.forEach((alimento) => {
        elementoProductos.innerHTML+="<br>"+ alimento.nombre +"  -- "+alimento.cantidad+" -->"+alimento.precio*alimento.cantidad+"€";
    });
}
