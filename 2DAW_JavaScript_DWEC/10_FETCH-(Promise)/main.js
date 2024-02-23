let display = document.querySelector("#display-data");
let input = document.querySelector('#input');

// Petición al fichero JSON
const apiEndPoint = 'recetas.json';

//Definión de función anónima o de manera implicita con y su llamada. 

const getData = async function loadNewContent() {
    const res = await fetch(apiEndPoint);
    const data = res.json();
    console.log(data);
    return data;
}

getData();

//3. Exploración de los eelmentos del documento JSON 
/* const displayItems = async () => {
    const payload = await getData();
    //Usamos para recorrer los elementos del objeto recuperado 
    dataDisplay = payload.map((object) => {
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
} */



const displayItems = async () => {
    //5.cogemos valor de input
    const query = input.value;
    console.log("Query::", query);

    const payload = await getData();

    //Usamos para recorrer los elementos del objeto recuperado 
    dataDisplay = payload
    .filter((eventData)=>{
        //Devuelve todo
        if(query==="")
            {return eventData}
        //Devuelve conicidencias
        else if (eventData.userId.toLowerCase()
        .includes(query.toLowerCase())){
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
input.addEventListener("input",()=>{
    displayItems();
})
