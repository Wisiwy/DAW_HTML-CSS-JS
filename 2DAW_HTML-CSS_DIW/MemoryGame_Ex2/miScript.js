/* 13. Función que genera el array para disponer de imágenes en las tarjetas */
function cargarIconos() {
    //Icono de texto
    /* font awesome, 
        estraido de, https://fontawesome.com/icons/fire?f=classic&s=solid 
        https://cdnjs.com/libraries/font-awesome 
        */

    iconos = [
        '<i class="fa-solid fa-cake-candles"></i>',
        '<i class="fa-solid fa-clover"></i>',
        '<i class="fa-solid fa-leaf"></i>',
        '<i class="fa-solid fa-camera-retro"></i>',
        '<i class="fa-solid fa-calendar-days"></i>',
        '<i class="fa-solid fa-car"></i>',
        '<i class="fa-solid fa-carrot"></i>',
        '<i class="fa-solid fa-caravan"></i>',
        '<i class="fa-solid fa-file"></i>',
        '<i class="fa-solid fa-film"></i>',
        '<i class="fa-solid fa-fish"></i>',
        '<i class="fa-solid fa-fire"></i>'
    ]
}



/* 11.Creacion de la función JS para ordenar el array de tarjetas inyectando el código correspondiente  */
function generarTablero() {
    //funcion a generar todavía
    cargarIconos();

    //Vinculación de elementos de HTML con JS
    let tablero = document.getElementById("tablero");
    //Declaración de varialble local
    let tarjetas = [];
    //Reiniciar seleciones 
    selecciones = [];
    let cantidadTarjetas = 24;
    //Pendiente definir cantidadTarjetas
    for (let i = 0; i < cantidadTarjetas; i++) {
        //12. Estaor pasos se van sucediendo a medida que vamos engrosando y necesitando el código. Al principios es solo. 
        /* Se generan tarjtas con id = tarjeta1,2,3.
         */
        tarjetas.push(
            `<div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara trasera id= "trasera${i}">
                    ${iconos[0]}
                    </div>
                    <div class="cara superior">
                        <i class="fa-solid fa-question"></i>
                    </div>
                </div>
            </div>`
        )
        //15.Para sacar 2 tarjetas con icono repetido
        if (i % 2 == 1) {
            //splice: primer elemento, y cantidad de elementos que se han de eliminar
            //dentro de un array 
            iconos.splice(0, 1);
        }

    }
    //16.Desordenar las tarjetas. Revisar el funcionamiento de esta operadio
    tarjetas.sort(() => Math.random() - 0.5);

    //14. Para insertar el código de las tarjetas en tablero
    tablero.innerHTML = tarjetas.join("");

}

//18.Funicon de selccion de tarjeta 
//Resuleve toda la lógica de la seleccióny animación
function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i);
    }
    if (selecciones.length == 2) {
        //arreglovacio
        deseleccionar(selecciones);
        selecciones = [];
    }
}

//19. Resuelve toda la lógica del acierto/error y la identificación. 
//Para resolver, no va a tener efecto hasta que no se vulvan las tarjetas
function deseleccionar(selecciones) {
    setTimeout(() => {
        let tarjeta1 = document.getElementById("tarjeta" + selecciones[0]);
        let tarjeta2 = document.getElementById("tarjeta" + selecciones[1]);
        let trasera1 = document.getElementById("trasera" + selecciones[0]);
        let trasera2 = document.getElementById("trasera" + selecciones[1]);
        //Evaluación de las seleccione
        if (trasera1.innerHTML != trasera2.innerHTML) {
            tarjeta1.style.transform = "rotateY(0deg)";
            tarjeta2.style.transform = "rotateY(0deg)";
        } else {
            trasera1.style.background = "plum";
            trasera2.style.background = "plum";
        }
        //22.Con la función de verificacionFin 
        /*  if (verificarFin()) {
             //23.Libreria responsive, ojo incluir scr
             swal.fire({
                 title:`El juego ha finalizado`,
                 text:`¡Enhorabuena!`,
                 icon:`succes`
             })
         } */

    }, 1000)
}