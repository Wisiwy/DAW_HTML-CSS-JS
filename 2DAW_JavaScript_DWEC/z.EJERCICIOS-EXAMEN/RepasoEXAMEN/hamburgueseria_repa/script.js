//instanciar clases a partid de archivo json
//Importaciones

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    msjeleccion() {
        return `Ha elegido ${this.nombre}.`
    }
}

class Hamburguesa extends Producto {
    constructor(nombre, precio, cantidad, ingredientes) {
        super(nombre, precio, cantidad);
        this.ingredientes = ingredientes;
    }

}

class Refresco extends Producto {
    precio = 0;
    constructor(nombre, cantidad, tamanyo) {
        super(nombre, cantidad);
        this.tamanyo = tamanyo;
        this.precio = this.setPrecio(tamanyo);



    }

    setPrecio(tamanyo) {
        switch (tamanyo) {
            case "S":
                return this.precio = 0.50;
                break;
            case "M":
                return this.precio = 1;
                break;
            case "L":
                return this.precio = 1.5;
                break;
            default:
                break;
        }
    }


}
class Pedido {
    precioTot = new Number(0);
    productosTot = new Number(0);
    finCompra = false;
}




// (1) Instanciar tipos de hamburguesas 

//normalBurguesa
let ingredAux = "carne, queso, tomate, lechuga, cebolla, ketchup";
let normalBurguesa = new Hamburguesa('Normal Burguesa', 4, 0, ingredAux);

//vegeBurguesa
ingredAux = "tofu, queso (guiño, guiño), tomate, lechuga, salsa paprika";
let vegeBurguesa = new Hamburguesa('Vege Burguesa', 3.5, 0, ingredAux);

//celiBurgussa
ingredAux = "carne, bacon, pan especial, tomate, lechuga, salsa antigluten";
let celiBurguesa = new Hamburguesa('Celi Burguesa', 5, 0, ingredAux);

//(2) Instanciar refrescos
//Definimos precios pequeño y grande 
//Agua
let agua = new Refresco('Agua', 0, "S");

//Cocacola
let cocacola = new Refresco('Cocacola', 0, "S");

//Fanta Naranja Zero
let naranjaZero = new Refresco('Fanta Naranja Zero', 0, "S");


var hamburguesas = [normalBurguesa, vegeBurguesa, celiBurguesa];
var refrescos = [agua, cocacola, naranjaZero];


/* ---- */
/* Crear menu hamburguesas */
var menuHamburguesas = document.createElement("div");
var dataDisplay = hamburguesas.map((elemento) => {
    console.log(elemento);
    return ` <ficha-producto 
        nombre=${elemento.nombre} 
        precio=${elemento.precio} 
        imagen="./img/atigrado-3.png">
    </ficha-producto>`
});
menuHamburguesas.innerHTML = dataDisplay.join('');

/* Crear menu refrescos */
var menuRefrescos = document.createElement("div");
var dataDisplay2 = refrescos.map((elemento) => {
    console.log(elemento);
    return ` <ficha-producto 
        nombre=${elemento.nombre} 
        precio=${elemento.precio} 
        imagen="./img/atigrado-3.png">
    </ficha-producto>`
});
menuRefrescos.innerHTML = dataDisplay2.join('');
var menu = document.getElementById("menu");


/* document.addEventListener("DOMContentLoaded",function(){
    var menu = document.getElementById("menu");
    var cosaBurguer = document.getElementById("muestraHamburguesa"); 
    cosaBurguer.addEventListener('click',function(){
       menu.appendChild(menuHamburguesas); 
    })

}) */ 


function mostrarMenu(tipoProductos) {
    var elemento;
    console.log("mostrar menu");
    switch (tipoProductos) {
        case 'hamburguesas':
            elemento = menuHamburguesas;
            break;
        case 'refrescos':
            elemento= menuRefrescos;
            break;
        default:
            break;
    }
    menu.innerHTML = "";
    menu.appendChild(elemento);
    console.log(menu);
}

