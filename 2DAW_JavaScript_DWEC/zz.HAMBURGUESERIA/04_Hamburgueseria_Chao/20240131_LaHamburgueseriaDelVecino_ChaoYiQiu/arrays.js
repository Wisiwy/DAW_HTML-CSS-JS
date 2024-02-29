import { Bebidas } from "./Bebidas.js";
import { Hamburguesa } from "./Hamburguesa.js";
import { Patata } from "./Patata.js";
import { Nuggets } from "./Nuggets.js";
import { Postre } from "./Postre.js";

export var hamburguesas = [
    new Hamburguesa(100, ["Carne", "Lechuga", "Cebolla", "Pan Smash"]),
    new Hamburguesa(200, ["Carne1", "Carne2", "Lechuga", "Cebolla", "Pan Smash"]),
    new Hamburguesa(75, ["Carne", "Cebolla", "Pan Smash"])
];

export var bebidas = [
    new Bebidas(50, ["Cocacola"]),
    new Bebidas(20, ["Agua"]),
    new Bebidas(60, ["Aquarius"])
];

export var patatas = [
    new Patata(150, ["Patatas normales"]),
    new Patata(100, ["Patatas deluxe"]),
    new Patata(175, ["Patatas Chilli"])
]

export var nuggets = [
    new Nuggets(80, ["Nuggets Pollo"]),
    new Nuggets(100, ["Nuggets Picantes"])
]

export var postres = [
    new Postre(120, ["Helado Chocolate"]),
    new Postre(200, ["Helado Manzana"])
    
];
