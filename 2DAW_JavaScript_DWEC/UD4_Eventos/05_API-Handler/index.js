// 1. Constante con la información de la URL de la API
const API_URL = "https://jsonplaceholder.typicode.com";

// 2. Método de conexión
const xhr = new XMLHttpRequest();

/* 3. Este es nuestro handler
Cuando hacer una petición a un webidor web
primero verificas la respuesta de estado y disponibilidad*/
// function onRequestHandle() {

//     if (this.readyState === 4 && this.status === 200) {
//         /* Código de disponibilidad:
//         0=UNSET, no se ha llamado al método open
//         1=OPENED, se ha llamado al método open
//         2=HANDLERS_RECEIVE, se esta llamando al método send()
//         3=LOADING, esta cargando, es decir, está recibiendo la respuesta
//         4=DONE, se ha completado la operación */
//         console.log(this.response);
//     }
// }

/* 4. Para poder ejecutar la funciona anterior, añadimos un event listener
al objecto xhr*/
xhr.addEventListener("load", onRequestHandle);

// 5. Hasta no llamar al método, open, el estado será 0=UNSET
/* 6. Preparamos la peticion htttp con la ingfrokmacipn necesaria, URL en este caso
este, open, activará el estado 1=OPENED*/
xhr.open("GET", `${API_URL}/users`);
/* 7. Secuencualmetne pasará por lso estados 2, 3 y 4
Si la respuesta es correcta, recibirá 200 */
xhr.send()

// 8. Vamos a modificar lo que hace con la información devuelta
function onRequestHandle() {

    if (this.readyState === 4 && this.status === 200) {
        /* Código de disponibilidad:
        0=UNSET, no se ha llamado al método open
        1=OPENED, se ha llamado al método open
        2=HANDLERS_RECEIVE, se esta llamando al método send()
        3=LOADING, esta cargando, es decir, está recibiendo la respuesta
        4=DONE, se ha completado la operación */
        const data = JSON.parse(this.response);
        console.log(this.response);

        // 9. Pintamos lo que nos devuelve
        const HTMLResponse = document.querySelector("#app");
        // Creamos un template, plantilla para inyectar los datos
        const tpl = data.map(user => `<li>${user.name} &#9993; ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul> ${tpl}</ul>`;
    }
}