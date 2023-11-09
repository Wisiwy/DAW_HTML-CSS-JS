//Importaciones

import { Pedido } from "./pedido";
import { Hamburguesa } from "./clases/hamburguesa";
import { Hamburguesa, Nuggets } from "./clases/nuggets";
import { Hamburguesa } from "./clases/patatas";
import { Hamburguesa } from "./clases/postre";
import { Hamburguesa } from "./clases/refresco";
import { Refresco } from "../UD2_2_6_HamburgueseriaPROFE/refresco";

// (1) Instanciar tipos de hamburguesas 

//normalBurguesa
let ingredAux = "carne, queso, tomate, lechuga, cebolla, ketchup";
let normalBurguesa = new Hamburguesa(0, ingredAux, 'Normal Burguesa', false, false);
normalBurguesa.precio = 3;
//vegeBurguesa
ingredAux = "tofu, queso (guiño, guiño), tomate, lechuga, salsa paprika";
let vegeBurguesa = new Hamburguesa(0, ingredAux, 'Vege Burguesa', false, true);
normalBurguesa.precio = 3.5;
//celiBurgussa
ingredAux = "carne, bacon, pan especial, tomate, lechuga, salsa antigluten";
let celiBurguesa = new Hamburguesa(0, ingredAux, 'Celi Burguesa', false, false);
normalBurguesa.precio = 4;

//(2) Instanciar refrescos 

//Agua
ingredAux = "Ver dorso lata/botella";
let agua = new Refresco(0, ingredAux, 'Agua', false, false);
agua.precio = 0.75;
//Cocacola
let cocacola = new Refresco(0, ingredAux, 'Cocacola', false, true);
cocacola.precio = 1.75;
//Fanta Naranja Zero
let naranjaZero = new Refresco(0, ingredAux, 'Fanta Naranja Zero', false, false);
naranjaZero.precio = 2;
//Cerveza
let cerveza = new Refresco(0, ingredAux, 'Cerveza', true, false);
cerveza.precio = 1.90;
//BitterKas
let bitterKas = new Refresco(0, ingredAux, 'Bitter Kas', false, false);
bitterKas.precio = 1.50;

//TODO : Dependera del tamaño el precio. setear al poner tamaño. 
//Hacer un if en la clase. 


//(3) Instanciar postres
//Manzana
let manzana = new Postre(0, 'Manzana natural', 'Manzana', true, true, true);
manzana.precio = 0.50;
//Helado
ingredAux = "leche, coco, azucar, frío";
let helado = new Postre(0, ingredAux, 'Helado', true, false, false);
manzana.precio = 3.50;

//(4) Instanciar otros productos
//Patatas
ingredAux = "aceite girasol, patatas, ketchup";
let patatas = new Patatas(0, ingredAux, 'Patatas');
//Nuggets
ingredAux = "mejor no te lo cuento";
let patatas = new Nuggets(0, ingredAux, 'Nuggets',false, false);

//(5) Instanciar resto variables (pedido)
let pedido = new Pedido();

let cuerpo = document.getElementById('cuerpo');

//FUNCIONES
//mostrar menu tipos 
//mostrar menu hamburguesas
//mostrar menu bebidas
//TODO preguntar tamaño bebida
//mostrar menu postres
//mostrar otros productos

