//Importaciones

import { Pedido } from "./clases/pedido.js";

//import { Pedido } from "./pedido";
import { Hamburguesa } from "./clases/hamburguesa.js";
import { Nuggets } from "./clases/nuggets.js";
import { Patatas } from "./clases/patatas.js";
import { Postre } from "./clases/postre.js";
import { Refresco } from "./clases/refresco.js";


console.log("funciona?");

// (1) Instanciar tipos de hamburguesas 

//normalBurguesa
let ingredAux = "carne, queso, tomate, lechuga, cebolla, ketchup";
let normalBurguesa = new Hamburguesa(0, ingredAux, 'Normal Burguesa', false, false);
normalBurguesa.precio = 3;
//vegeBurguesa
ingredAux = "tofu, queso (guiño, guiño), tomate, lechuga, salsa paprika";
let vegeBurguesa = new Hamburguesa(0, ingredAux, 'Vege Burguesa', false, true);
vegeBurguesa.precio = 3.5;
//celiBurgussa
ingredAux = "carne, bacon, pan especial, tomate, lechuga, salsa antigluten";
let celiBurguesa = new Hamburguesa(0, ingredAux, 'Celi Burguesa', false, false);
celiBurguesa.precio = 4;

//(2) Instanciar refrescos
//Definimos precios pequeño y grande 

//Agua
ingredAux = "Ver dorso lata/botella";
let agua = new Refresco(0, ingredAux, 'Agua', false, false);
agua.precioP = 0.75;
agua.precioG = 1.75;
//Cocacola
let cocacola = new Refresco(0, ingredAux, 'Cocacola', false, true);
cocacola.precioP = 1.75;
cocacola.precioG = 2.75;
//Fanta Naranja Zero
let naranjaZero = new Refresco(0, ingredAux, 'Fanta Naranja Zero', false, false);
naranjaZero.precioP = 2;
naranjaZero.precioG = 2.5;
//Cerveza
let cerveza = new Refresco(0, ingredAux, 'Cerveza', true, false);
cerveza.precioP = 1.90;
cerveza.precioG = 2.90;
//BitterKas
let bitterKas = new Refresco(0, ingredAux, 'Bitter Kas', false, false);
bitterKas.precioP = 1.50;
bitterKas.precioG = 2.50;

//TODO : Dependera del tamaño el precio. setear al poner tamaño. 
//Hacer un if en la clase. 


//(3) Instanciar postres
//Manzana
let manzana = new Postre(0, 'Manzana natural', 'Manzana', true, true, true);
manzana.precio = 0.50;
//Helado
ingredAux = "leche, coco, azucar, frío";
let helado = new Postre(0, ingredAux, 'Helado', true, false, false);
helado.precioP = 3.50;
helado.precioG = 4.50;

//(4) Instanciar otros productos
//Patatas
ingredAux = "aceite girasol, patatas, ketchup";
let patatas = new Patatas(0, ingredAux, 'Patatas');
patatas.precioP = 1.30;
patatas.precioG = 2.20;
//Nuggets
ingredAux = "mejor no te lo cuento";
let nuggets = new Nuggets(0, ingredAux, 'Nuggets', false, false);
nuggets.precioP = 3.40;
nuggets.precioG = 5.60;

//(5) Instanciar resto variables (pedido)
let pedido = new Pedido();
let cuerpo = document.getElementById("burguer");
////////////////
//Sacamos fecha y hora con formato, 06:06. Añadir "0" si es necesario
let date = new Date();
let horas = date.getHours();
horas = (horas < 10) ? "0" + horas : horas;
let minutos = date.getMinutes();
minutos = (minutos < 10) ? "0" + minutos : minutos;
//Pintar CABECERA TICKET
cuerpo.innerHTML = "___________________________"; //TODO - Meter en variable ticket
cuerpo.innerHTML += "<h3>BURGUER PACO</h3>";
cuerpo.innerHTML += `<p><b>${date.toLocaleDateString()} &nbsp;&nbsp;&nbsp;&nbsp; ${horas}:${minutos}</b></p>`;
cuerpo.innerHTML += "Atendido por: Raúl <br>";
cuerpo.innerHTML += "___________________________ <br>"; //TODO - Meter en variable ticket
cuerpo.innerHTML += "<h4>PEDIDO</h4> <br>"; //TODO - Meter en variable ticket




////////////////////////////////////////////////////

console.log("Calentando...");


//Ejecución PROGRAMA PRINCIPAL
alert('Bienvenido a Hamburguesas Paco. \n \t ¿Qué desea tomar?');
do {
    let usuarioEleccion = prompt(`\t MENÚ\n -----------------------
                                            \n 1.Hamburguesas 
                                            \n 2.Bebidas
                                            \n 3.Postre
                                            \n 4.Complementos
                                             \n---------------------`);

    let eleccionTamanho = '';
    switch (Number(usuarioEleccion)) {
        //Mostrar menu HAMBURGUESAS
        case 1:
            usuarioEleccion = prompt(`\t HAMBURGUESAS\n -----------------------
                                                    \n 1. ${normalBurguesa.nombre}: ${normalBurguesa.precio}€ 
                                                    \n 2. ${vegeBurguesa.nombre}: ${vegeBurguesa.precio}€ 
                                                    \n 3. ${celiBurguesa.nombre}: ${celiBurguesa.precio}€`);
            console.log(usuarioEleccion);
            switch (Number(usuarioEleccion)) {
                case 1:
                    alert(`Añadida Normal Burguesa ${normalBurguesa.precio}€`);
                    cuerpo.innerHTML += `${normalBurguesa.nombre} &nbsp; ${normalBurguesa.precio}€ <br>`;
                    cuerpo.innerHTML += ("Ingredientes: <em>" + normalBurguesa.ingredientes + ".</em><br>");
                    pedido.precioTot += Number(normalBurguesa._precio);

                    break;
                case 2:
                    alert(`Añadida Vege Burguesa ${vegeBurguesa.precio}€`);
                    cuerpo.innerHTML += `${vegeBurguesa.nombre} &nbsp; ${vegeBurguesa.precio}€ <br>`;
                    cuerpo.innerHTML += ("Ingredientes: <em>" + vegeBurguesa.ingredientes + ".</em><br>");
                    pedido.precioTot += Number(vegeBurguesa._precio);
                    break;
                case 3:
                    alert(`Añadida Celi Burguesa ${celiBurguesa.precio}€`);
                    cuerpo.innerHTML += `${celiBurguesa.nombre} &nbsp; ${celiBurguesa.precio}€ <br>`;
                    cuerpo.innerHTML += ("Ingredientes: <em>" + celiBurguesa.ingredientes + ".</em><br>");
                    pedido.precioTot += Number(celiBurguesa._precio);
                    break;
                default:
                    alert("Mala elección") //TODO - Controlar repetir hasta que se haya elegido algo
                    break;
            }
            break;
        //Mostrar menu BEBIDAS
        case 2:
            usuarioEleccion = prompt(`\tBEBIDAS\n ---------------- \n 1. ${agua.nombre} (P: ${agua.precioP}€ / G: ${agua.precioG}€ )
                                                \n 2. ${cocacola.nombre} (P: ${cocacola.precioP}€ / G: ${cocacola.precioG}€ )
                                                \n 3. ${naranjaZero.nombre} (P: ${naranjaZero.precioP}€ / G: ${naranjaZero.precioG}€)
                                                \n 4. ${cerveza.nombre} (P: ${cerveza.precioP}€ / G: ${cerveza.precioG}€)
                                                \n 5. ${bitterKas.nombre} (P: ${bitterKas.precioP}€ / G: ${bitterKas.precioG}€)
                                                \n ---------------------
                                                \n Introduce bebida y tamaño (ej."3G")`);

            //Elección y separación de string en tipo bebida y tamaño p o g. 
            eleccionTamanho = usuarioEleccion.slice(1);
            eleccionTamanho.toLowerCase;  //MEJORA: Controlar que sea eleccion tamanho: P o G
            usuarioEleccion = usuarioEleccion.slice(0, 1);

            switch (Number(usuarioEleccion)) {
                case 1:
                    if (eleccionTamanho == 'p') {
                        alert(`Añadida Agua PEQUEÑA ${agua.precioP}€`);
                        cuerpo.innerHTML += `${agua.nombre} P &nbsp; ${agua.precioP}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + agua.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(agua._precioP);
                    } else {
                        alert(`Añadida Agua GRANDE ${agua.precioG}€`);
                        cuerpo.innerHTML += `${agua.nombre} G &nbsp; ${agua.precioG}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + agua.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(agua._precioG);
                    }
                    break;
                case 2:
                    if (eleccionTamanho == 'p') {
                        alert(`Añadida Cocacola PEQUEÑA ${cocacola.precioP}€`);
                        cuerpo.innerHTML += `${cocacola.nombre} P &nbsp; ${cocacola.precioP}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + cocacola.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(cocacola._precioP);
                    }
                    else {
                        alert(`Añadida Cocacola GRANDE ${cocacolagua.precioG}€`);
                        cuerpo.innerHTML += `${cocacola.nombre} G &nbsp; ${cocacola.precioG}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + cocacola.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(cocacola._precioG);
                    }
                    break;
                case 3:
                    if (eleccionTamanho == 'p') {
                        alert(`Añadida Kas Naranja PEQUEÑA ${naranjaZero.precioP}€`);
                        cuerpo.innerHTML += `${naranjaZero.nombre} P &nbsp; ${naranjaZero.precioP}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + naranjaZero.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(naranjaZero._precioP);
                    }
                    else {
                        alert(`Añadida Kas Naranja GRANDE ${naranjaZero.precioG}€`);
                        cuerpo.innerHTML += `${naranjaZero.nombre} G &nbsp; ${naranjaZero.precioG}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + naranjaZero.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(naranjaZero._precioG);
                    }
                    break;
                case 4:
                    if (eleccionTamanho == 'p') {
                        alert(`Añadida Cerveza PEQUEÑA ${cerveza.precioP}€`);
                        cuerpo.innerHTML += `${cerveza.nombre} P &nbsp; ${cerveza.precioP}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + cerveza.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(cerveza._precioP);
                    }
                    else {
                        alert(`Añadida Cerveza GRANDE ${cerveza.precioG}€`);
                        cuerpo.innerHTML += `${cerveza.nombre} G &nbsp; ${cerveza.precioG}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + cerveza.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(cerveza._precioG);
                    }
                    break;
                case 5:
                    if (eleccionTamanho == 'p') {
                        alert(`Añadida Bitter Kas PEQUEÑA ${bitterKas.precioP}€`);
                        cuerpo.innerHTML += `${bitterKas.nombre} P &nbsp; ${bitterKas.precioP}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + bitterKas.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(bitterKas._precioP);
                    }
                    else {
                        alert(`Añadida Bitter Kas GRANDE ${bitterKas.precioG}€`);
                        cuerpo.innerHTML += `${bitterKas.nombre} G &nbsp; ${bitterKas.precioG}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + bitterKas.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(bitterKas._precioG);
                    }
                    break;
                default:
                    alert("Mala elección");
                    break;
            }
            break;
        case 3:
            //Mostrar menu POSTRES: Manzana Y Helado
            usuarioEleccion = prompt(`\t POSTRE\n ---------------- 
                                            \n 1. ${manzana.nombre} (${manzana.precio}€)
                                            \n 2. ${helado.nombre} (P: ${helado.precioP}€ / G: ${helado.precioG}€ )
                                            \n ---------------------
                                            \n Introduce postre y tamaño (ej."3G")`);

            //Eleccion y separacion division string en tipo y tamaño. TOFO: Función
            eleccionTamanho = usuarioEleccion.slice(1);
            eleccionTamanho.toLowerCase;

            //MEJORA: Controlar que sea eleccion tamanho: P o G
            usuarioEleccion = usuarioEleccion.slice(0, 1);
            console.log(usuarioEleccion);
            console.log(eleccionTamanho);
            switch (Number(usuarioEleccion)) {
                case 1:
                    alert(`Añadida Manzana ${manzana.precio}€`);
                    cuerpo.innerHTML += `${manzana.nombre} P &nbsp; ${manzana.precio}€ <br>`;
                    cuerpo.innerHTML += ("Ingredientes: <em>" + manzana.ingredientes + ".</em><br>");
                    pedido.precioTot += Number(manzana._precio);
                    break;
                case 2:
                    if (eleccionTamanho == 'p') {
                        alert(`Añadida Helado PEQUEÑA ${helado.precioP}€`);
                        cuerpo.innerHTML += `${helado.nombre} P &nbsp; ${helado.precioP}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + helado.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(helado._precioP);
                    }
                    else {
                        alert(`Añadida Helado GRANDE ${helado.precioG}€`);
                        cuerpo.innerHTML += `${helado.nombre} G &nbsp; ${helado.precioG}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + helado.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(helado._precioG);
                    }
                    break;
                default:
                    alert("Mala elección")
                    break;
            }
            break;
        case 4:

            //Mostrar menu COMPLEMENTOS
            usuarioEleccion = prompt(`\t COMPLEMENTOS\n ---------------- 
                                             \n 1. ${patatas.nombre} (P: ${patatas.precioP}€ / G: ${patatas.precioG}€ )
                                             \n 2. ${nuggets.nombre} (P: ${nuggets.precioP}€ / G: ${nuggets.precioG}€ )
                                             \n ---------------------
                                             \n Introduce bebida y tamaño (ej."3G")`);
            //Eleccion y separacion division string en tipo y tamaño. TOFO: Función
            eleccionTamanho = usuarioEleccion.slice(1);
            eleccionTamanho.toLowerCase;

            //MEJORA: Controlar que sea eleccion tamanho: P o G
            usuarioEleccion = usuarioEleccion.slice(0, 1);
            console.log(usuarioEleccion);
            console.log(eleccionTamanho);
            
            switch (Number(usuarioEleccion)) {
                case 1:
                    if (eleccionTamanho == 'p') {
                        alert(`Añadida Patatas PEQUEÑA ${patatas.precioP}€`);
                        cuerpo.innerHTML += `${patatas.nombre} P &nbsp; ${patatas.precioP}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + patatas.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(patatas._precioP);
                    }
                    else {
                        alert(`Añadida Patatas GRANDE ${patatas.precioG}€`);
                        cuerpo.innerHTML += `${patatas.nombre} G &nbsp; ${patatas.precioG}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + patatas.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(patatas._precioG);
                    }
                    break;
                case 2:
                    if (eleccionTamanho == 'p') {
                        alert(`Añadida Nuggets PEQUEÑA ${nuggets.precioP}€`);
                        cuerpo.innerHTML += `${nuggets.nombre} P &nbsp; ${nuggets.precioP}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + nuggets.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(nuggets._precioP);
                    }
                    else {
                        alert(`Añadida Nuggets GRANDE ${nuggets.precioG}€`);
                        cuerpo.innerHTML += `${nuggets.nombre} G &nbsp; ${nuggets.precioG}€ <br>`;
                        cuerpo.innerHTML += ("Ingredientes: <em>" + nuggets.ingredientes + ".</em><br>");
                        pedido.precioTot += Number(nuggets._precioG);
                    }
                    break;
                default:
                    alert("Mala elección")
                    break;
            }
            break;

        default:
            prompt("Sin selección");
            usuarioEleccion = 0;
            break;
    }

    cuerpo.innerHTML += `<h4>SUBTOTAL: <b> ${pedido.precioTot}€ </b></h4>`;


    if (confirm("¿Desea algo más?")) {
        pedido.finCompra = true;
        alert("Elija otro producto.");

    } else {
        pedido.finCompra = false;
        alert('Imprimiendo ticket...');
    }

    console.log(pedido.finCompra)
} while (pedido.finCompra) {
    cuerpo.innerHTML += "------------------------" + "<br>";
    cuerpo.innerHTML += `<h3>TOTAL: ` + pedido.precioTot + ` € </h3>`;
    cuerpo.innerHTML += "------------------------" + "<br>";
    console.log("...cierre de cocina.");
};

//FUNCIONES
//mostrar menu tipos
//mostrar menu hamburguesas
//mostrar menu bebidas
//TODO preguntar tamaño bebida
//mostrar menu postres
//mostrar otros productos

