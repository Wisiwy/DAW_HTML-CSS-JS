/* 13. FUnción que genera el array para disponer de imágenes en las tarjetas */
function cargarIconos(){
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

    }
}