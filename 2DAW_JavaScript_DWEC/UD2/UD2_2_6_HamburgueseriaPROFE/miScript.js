//Definimos ventana





//Importaciones
import {Cesta} from './cesta.js';
import {Hamburguesa} from './hamburguesa.js';
import {Refresco} from './refresco.js';
import {Postre} from './postre.js';
import {Patatas} from './patatas.js';


//20231016_Como sacar el nombre de la variable en JS --- No recuerdo fuente
/*function add(x, y) {
    // After you wrap a variable into an object
    // It will be the first and the only property of that object
    const name = obj => Object.keys(obj)[0];    if (x === null || x === undefined || isNaN(parseFloat(x)))
      throw new Error(`${name({x})} is not a valid number`);    if (y === null || y === undefined || isNaN(parseFloat(y)))
      throw new Error(`${name({y})} is not a valid number`);    return x + y;
}*/


//Instanciación y definición de hamburguesas
let megaHam = new Hamburguesa();
megaHam.nombre='Mega Ham';
megaHam.precio=5;
megaHam.opcionCeliaco= true;
megaHam.opcionVegetariano= false;
megaHam.ingredientes= "2 hamburguesas, queso, bacon, lechuga, tomate, cebolla, huevo frito y salsa especial";

let ingredAux = "1 hamburguesa, queso, tomate, pepinillo, cebolla, mostaza y ketchup";
let quickBurg = new Hamburguesa(0,ingredAux,'QuickBurg',false, true);
quickBurg.precio=2.5;

ingredAux = "1 vegHamburguesa, vegQueso, tomate, cebolla, salsa veganesa";
let vegHam = new Hamburguesa(0,ingredAux,'Veg-HaM',true,true);
vegHam.precio=3;

let cestaCompra = new Cesta();

let cuerpo = document.getElementById("mostrador");


//Comienza el flujo controlador del interfaz
console.log("Calentando...");

//Ejecución del programa principal
do{
    alert('============\n Bienvenido a miBurger\n ¿Qué desea toma? Elija hamburguesa\n============\n')
    let usuarioEleccion = prompt(`1. ${megaHam.nombre} : ${megaHam.precio} €\n 2. ${quickBurg.nombre} : ${quickBurg.precio} € \n 3. ${vegHam.nombre} : ${vegHam.precio} €`);

    cuerpo.innerHTML+="+++++++++++++++++++++++++++"+"<br>";
    
    switch (Number(usuarioEleccion))
    {       
        case 1:
            cuerpo.innerHTML+=`Ha elegido ${megaHam.nombre}. Sus ingredientes son: <br>`;
            cestaCompra.precioTot += Number(megaHam.precio);
            cuerpo.innerHTML+=(megaHam.ingredientes + " <br>");
            break;
        case 2:
            cuerpo.innerHTML+=`Ha elegido ${quickBurg.nombre}. Sus ingredientes son: <br>`;
            cestaCompra.precioTot += Number(quickBurg.precio);
            cuerpo.innerHTML+=(quickBurg.ingredientes + " <br>");
            break;
        case 3:
            cuerpo.innerHTML+=`Ha elegido ${vegHam.nombre}. Sus ingredientes son: <br>`;
            cestaCompra.precioTot += Number(vegHam.precio);
            cuerpo.innerHTML+=(vegHam.ingredientes + " <br>");
            break;
        default:
            cuerpo.innerHTML+=("Eleccion no contemplada." + " <br>");
            usuarioEleccion = 0;
            break;
    }

    cuerpo.innerHTML+="+++++++++++++++++++++++++++"+"<br>";
    cuerpo.innerHTML+=`Pedido parcial: ` + cestaCompra.precioTot + ` € <br>`;
    

    if(confirm("¿Desea algo más?")){
        cestaCompra.finCompra=true;
        alert("============\nContinuemos con la compra.\n============\n");
       
    } else {
        cestaCompra.finCompra=false;
        alert('============\nGracias por su visita. Hasta pronto.\n============\n')
       
    }
    
}while(cestaCompra.finCompra){
    cuerpo.innerHTML+="+++++++++++++++++++++++++++"+"<br>";
    cuerpo.innerHTML+=`Precio TOTAL: ` + cestaCompra.precioTot + ` € <br>`;
    cuerpo.innerHTML+="+++++++++++++++++++++++++++"+"<br>";
    console.log("...cierre de cocina.");
}






