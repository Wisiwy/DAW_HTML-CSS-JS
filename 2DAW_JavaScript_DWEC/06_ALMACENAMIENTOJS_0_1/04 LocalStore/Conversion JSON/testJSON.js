import { Hamburguesa } from "./hamburguesa";
var hamburJamon = new Hamburguesa(1,"jamon", "HamurJamon", false, false);

localStorage.setItem("hamburguesa", JSON.stringify(hamburJamon));
let auxHambur = JSON.stringify(hamburJamon);
console.log("Hamburguesa en JSON: " + auxHambur);

let hamburAlmacenado = JSON.parse(localStorage.auxHambur);
console(hamburAlmacenado);
