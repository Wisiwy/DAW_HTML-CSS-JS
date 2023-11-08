//Carga de elementos 

//Vinculacion de labels con objetos JS
let lbl_info = document.getElementById("lbl_info");
let txt_box = document.getElementById("txt_box");
let lbl_intentos = document.getElementById("lbl_intentos");
let lbl_random = document.getElementById("lbl_random");
let lbl_tb = document.getElementById("lbl_tb");
let btn_Boton = document.getElementById("btn_Boton");
let btn_Shh = document.getElementById("btn_Shh");


//Declaración de variable e inicialización 
let aux = "";
let min = new Number(0);
let max = new Number(10);
let tries = new Number(3);
let answer = new Number(0);
let isGameWon = new Boolean(false);
let randomNum = new Number(0);
//let tiempo = Date(); Scar tiempo Juego CHAO

let isRandomShow = false;

//Funcion generar random
function rndom_calc(min, max) {
    min = Math.ceil(min); //redondeo entero por arriba
    max = Math.floor(max); //redondeo entero por abajo
    var nuevoRand = new Number(Math.floor(Math.random()
        * (max - min + 1) + min));
    console.log(nuevoRand);
    return nuevoRand;
}

//Formas de cargas página en el momento adecuado

//window addEventListener('load',cargaPag());
window.onload = cargaPag();



//Funcion cargar elementos
function cargaPag() {

    lbl_info.append("Introduce un número entre " + min + " y " + max + "\n");
    lbl_intentos.textContent = "Intentos " + tries;
    randomNum = rndom_calc(min, max);
    lbl_random.textContent = randomNum;
    lbl_random.style.display = "none";
    //lbl_rnd_mes.textContent = "¡Ánimo!";
    cuentaAtras();
}

//Función al pulsar botón
function btn_Boton_Click() {
    aux = txt_box.value;
    lbl_tb.textContent = "Inténtalo de nuevo...";
    btn_Boton.innerText = "Pulsar";

    //Evitar texto blanco
    try {
        answer = Number(aux);
    } catch (Exception) {
        lbl_tb.textContent = "Texto erroneo. Excepcion. " + Excepcion;

    }

    answer = Number(aux);
    //Lógica del juego
    if (tries > 0) {
        if (aux != "") {
            if (answer == randomNum) {
                console.log("Correcto!");
                lbl_info.innerText = " ¡ " + aux + " es correcto! ";
                //GameButton.interactable = false;
                isGameWon = true;
                ResetGame();
            } else if (answer > randomNum) {
                console.log("Prueba más bajo...");
                lbl_info.innerText = aux + " es mayor! Prueba más bajo... ";
                //GameButton.interactable = false;
                txt_box.value = ""; //reseteamos la caja de respuesta
                tries--;
                lbl_intentos.innerText = "Intentos: " + tries;

            } else if (answer < randomNum) {
                console.log("Prueba más alto...");
                lbl_info.innerText = aux + " es menor! Prueba más alto... ";
                //GameButton.interactable = false;
                txt_box.value = ""; //reseteamos la caja de respuesta
                tries--;
                lbl_intentos.innerText = "Intentos: " + tries;
            }
        } else {
            lbl_info.Text = "Intro un numero.";
        }
    }


}
//Función terminar juego
function ResetGame() {
    btn_Boton.innerText = "¿Nuevo juego";
    txt_box.value = "";
    if (isGameWon) {
        lbl_info.innerText = "";
        randomNum = rndom_calc(min, max);
        lbl_info.innerText = "¡Ganaste! Adivina el número entre " + min + " y " + max;
        isGameWon = false;
        tries = 3;
        lbl_intentos.innerText = "Intentos " + tries;
        lbl_random.textContent = randomNum;
    } else {
        lbl_info.innerText = "";
        randomNum = rndom_calc(min, max);
        lbl_info.innerHTML = "Prueba otra vz. Adivina el número entre " + min + " y " + max;
        tries = 3;
        lbl_intentos.innerText = "Intentos " + tries;
        lbl_random.textContent = randomNum;
        

    }
}

//Funcion para mostrar chivato. btnShh...
function btn_Shh_Click() {

    //Maneras de hacero
    //1. Un mensaje on click
    /*     alert("El Numero que buscas es el ..." + randomNum);
     */

    //2.Ocultar elemento on click
    /*  if (lbl_random.style.display === "none") {
         lbl_random.style.display = "block";
     } else {
         lbl_random.style.display = "none";
     } */

    //3.Cambiar el valor del letraro del boton. 
    if (!isRandomShow) {
        btn_Shh.innerText = "Introduce: " + randomNum;
        isRandomShow = true;
    } else {
        btn_Shh.innerText = "Shh..";
        isRandomShow = false;
    }

}

//EXTRA 1: Temporizador
let temporizador = document.getElementById("tiempo");
temporizador.innerText = "Cuenta atrás:  ";

function cuentaAtras() {
    let number = 5;
    let myCallBack = () => {
        console.log(number);
        number--;
        temporizador.innerText = "Cuenta atrás: " + number;
        if (number == 0) {
            clearInterval(timer); //se reinicie el intervalo timer
            isGameWon = false;
            ResetGame();
        }
    }

    //() funcion anónima definir un parametro com función, 'myCallback
    //al final la hemos sacado fuera y llamado desde el intervalo.
    const timer = setInterval(myCallBack, 1000) //El evento lo crea cada 1000 ms un segundo. cada 1000ms restamos uno a number
}
/* () => {
    console.log(number);
    number--;
    temporizador.innerText = "Cuenta atrás: " + number;
    if (number == 0) {
        clearInterval(timer); //se reinicie el intervalo timer
        isGameWon = false;
        ResetGame();
    }
} */