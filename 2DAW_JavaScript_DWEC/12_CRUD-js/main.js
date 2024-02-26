//Tiene la estructura de nuestro json
const aInsertar = {
    "userId":"Marco",
    "id":21,
    "title":"Pasta Carbonara",
    "body": "Plato italiano de pasta con una salsa hechas de huevos, queso pecorino romano, panceta y pimienta negras"
};

/* const getItems = async() => {
    const payload = await getData();
    //Usamos para recorrer los elementos del objeto recuperado
    dataDisplay = payload.map((object,index)=>{
        numeroTotal=index+1;
    }).join(" ");
} */

async function agregarUno() {
    try {
        let autor = document.getElementById("autor").value;
        let nombreReceta = document.getElementById("nombreReceta").value;
        let elaboracion = document.getElementById("elaboracion").value;
        let numId = document.getElementById("numId").value;

        //nota: la api proporcionada (my-json-server= NO PERMITE LA CREACIÓN REAL DE NUEVAOS REGISTROS 
        //EN EL REPOSITORIO DE gIThUB. sOLO SIMULA LAS OPERACIOEN)
        fetch(apiEndPoint, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: autor,
                id: numId,
                title: nombreReceta,
                body: elaboracion,
            }),
        })
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud ' + respuesta.statusText);
        }
        let data = await respuesta.json();
        console.log("Registro creado: ", data);
    } catch (error) {

    }
}
agregarUno();

//SCROOL
//COPIADO
let display = document.querySelector("#display-data");

//1. SCROLL INFINITO. funcion Jqueary que nos permitira tener control y respuesta del listener vinculado al scroll
$(window).scroll(function () {
/*     console.log("window scroll top: " + parseInt($(window).scrollTop()));
    console.log("document height: " + parseInt($(window).scrollTop()));
    console.log(": " + parseInt($(window).scrollTop()));
    console.log("window scroll top: " + parseInt($(window).scrollTop())); */
    //4. Estaba dando problemas con el cálculo, por un lado parse int para no boger float y facilitar la cmparacion
    //por otro lado , ajuste de la cuenta para que no se quede justa ( en la primera carga se quedaba 643)
    if (parseInt($(window).scrollTop()) >= ($(document).height() - $(window).height()) - 10) {
        //funcion de recuperar contendio
        cuentaPost += 4;
        //console.log("scroll lamada:" + cuentaPost);
        displayItems();
    }
})

//2. Petición al fichero JSON .Peticiion al sevidor local que hemos creado. 
const apiEndPoint = 'http://127.0.0.1:3000/recetas';

//Definión de función anónima o de manera implicita con y su llamada. 

const getData = async function loadNewContent() {
    const res = await fetch(apiEndPoint);
    const data = res.json();
    console.log(data);
    return data;
}

let cuentaPost = 4;
let htmlBit;
getData();

//3. Exploración de los eelmentos del documento JSON 
const displayItems = async () => {
    const payload = await getData();
    //Usamos para recorrer los elementos del objeto recuperado 
    dataDisplay = payload.map((object, index) => {
        //console.log(object);

        //damos formato a la info recibida del JSON
        if (index < cuentaPost) {
            htmlBit =
                `<div class='container'>
                    <p class='nombreReceta'>${object.title}</p>
                    <p class='preparacionTxt'>${object.body}</p>
                    <p class='autorTxt'>Contenido creado por: ${object.userId}</p>
                    <hr>
                </div>`
            return htmlBit
        }
    }).join(" "); //Sin el join. map añadiria una "," al HTML

    //console.log(dataDisplay);
    display.innerHTML = dataDisplay;
}
displayItems();


/* BUSCADOR */

/* const displayItems = async () => {
    //5.cogemos valor de input
    const query = input.value;
    console.log("Query::", query);

    const payload = await getData();

    //Usamos para recorrer los elementos del objeto recuperado 
    dataDisplay = payload
        .filter((eventData) => {
            //Devuelve todo
            if (query === "") { return eventData }
            //Devuelve conicidencias
            else if (eventData.userId.toLowerCase()
                .includes(query.toLowerCase())) {
                return eventData;
            }
        })
        .map((object) => {
            //console.log(object);
            //console.log(object);

            //damos formato a la info recibida del JSON
            let htmlBit =
                `<div class='container'>
                <p class='nombreReceta'>${object.title}</p>
                <p class='preparacionTxt'>${object.body}</p>
                <p class='autorTxt'>Contenido creado por: ${object.userId}</p>
                <hr>
            </div>`
            return htmlBit

        }).join(" "); //Sin el join. map añadiria una "," al HTML

    //console.log(dataDisplay);
    display.innerHTML = dataDisplay;
}

displayItems();
input.addEventListener("input", () => {
    displayItems();
}) */
