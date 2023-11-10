//Importaciones

import { Pedido } from "./pedido.js";

//import { Pedido } from "./pedido";
import { Hamburguesa } from "./clases/hamburguesa.js";
import { Nuggets } from "./clases/nuggets.js";
import { Patatas } from "./clases/patatas.js";
import { Postre } from "./clases/postre.js";
import { Refresco } from "./clases/refresco.js";


console.log("funcion?");

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
//Pintar CABECERA TICKET
let date = new Date();
cuerpo.innerHTML= "<h2>BURGUER PACO</h2>"
cuerpo.innerHTML = `<p>${date.getDate} ${date.getHours}</p>`

////////////////////////////////////////////////////

console.log("Calentando...");


//Ejecución PROGRAMA PRINCIPAL
alert('Bienvenido a Hamburguesas Paco. \n \t ¿Qué desea tomar?');
do {
    let usuarioEleccion = prompt(`MENU \n 1.Hamburguesas \n 2.Bebidas \n 3.Postre \n 4.Complementos \n`);
    cuerpo.innerHTML += "___________________________"; //TODO - Meter en variable ticket

    switch (Number(usuarioEleccion)) {
        //Mostrar menu HAMBURGUESAS
        case 1:
            usuarioEleccion = prompt(`Hamburguesas \n 1. ${normalBurguesa.nombre}: ${normalBurguesa.precio}€ \n 2. ${vegeBurguesa.nombre}: ${vegeBurguesa.precio}€ \n 3. ${celiBurguesa.nombre}: ${celiBurguesa.precio}€`);
            console.log(usuarioEleccion);
            switch (Number(usuarioEleccion)) {
                case 1:
                    alert("Normal Burguesa");
                    break;
                case 2:
                    alert("Vege Burguesa");
                    break;
                case 3:
                    alert("Celi Burguesa");
                    break;
                default:
                    alert("Mala elección")
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

            //Eleccion y separacion division string en tipo y tamaño. TOFO: Función
            let eleccionTamanho = usuarioEleccion.slice(1);
            eleccionTamanho.toLowerCase;
            //MEJORA: Controlar que sea eleccion tamanho: P o G
            usuarioEleccion = usuarioEleccion.slice(0, 1);
            console.log(usuarioEleccion);
            console.log(eleccionTamanho);
            switch (Number(usuarioEleccion)) {
                case 1:
                    if (eleccionTamanho == 'p')
                        alert("Agua Pequña");
                    else
                        alert("Agua Grande");
                    //Bebidas, patatas y nuggets.                   
                    break;

                case 2:
                    if (eleccionTamanho == 'p')
                        alert("Cocacola pequeña");
                    else
                        alert("Cocacola Grande");
                    break;
                case 3:
                    if (eleccionTamanho == 'p')
                        alert("Kas Naranja Pequña");
                    else
                        alert("Kas Naranja Grande");
                    break;
                case 4:
                    if (eleccionTamanho == 'p')
                        alert("Cerveza Pequña");
                    else
                        alert("Cerveza Grande");
                    break;
                case 5:
                    if (eleccionTamanho == 'p')
                        alert(" bitter kas Pequña");
                    else
                        alert(" bitter kas Agua Grande");
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
                    alert("Manzana");
                    break;
                case 2:
                    if (eleccionTamanho == 'p')
                        alert("Helado Pequña");
                    else
                        alert("Helado Grande");
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
            prompt("Complementos");
            switch (Number(usuarioEleccion)) {
                case 1:
                    if (eleccionTamanho == 'p')
                        alert("Patatas Pequña");
                    else
                        alert("Patatas Grande");
                    break;
                case 2:
                    if (eleccionTamanho == 'p')
                        alert("Nuggets Pequña");
                    else
                        alert("Nuggets Grande");
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

    if (confirm("¿Desea algo más?")) {
        pedido.finCompra = true;
        alert("Elija otro producto.");

    } else {
        pedido.finCompra = false;
        alert('Imprimiendo ticket...');
    }

    console.log(pedido.finCompra)
} while (pedido.finCompra);

//FUNCIONES
//mostrar menu tipos
//mostrar menu hamburguesas
//mostrar menu bebidas
//TODO preguntar tamaño bebida
//mostrar menu postres
//mostrar otros productos

