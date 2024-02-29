const API_URL = "https://jsonplaceholder.typicode.com";
const xhr = new XMLHttpRequest();

var verClientes = document.querySelector("#verClientes")
//verClientes.addEventListener("click", mostrarCliente);
xhr.addEventListener("load", onRequestHandle);

xhr.open("GET", `${API_URL}/users`);
xhr.send();

//Modificar la info recogida

function onRequestHandle() {
    //segun codigo 
    console.log(this.readyState);
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.response);
       // console.log(this.response);

        //pintar devuelta
        const listaClientes = document.querySelector("#listaClientes");
        //template para lista
        const template = data.map(user => `<li>${user.name}</li>`).join(" ");

        //listaClientes.innerHTML = `<ul>${template}</ul>`;
    }

}

function mostrarCliente() {
    var listaClientes = document.querySelector("#listaClientes");

    if (listaClientes.style.display = "none")
        listaClientes.style.display = "block";
    else
        listaClientes.style.display = "none";



}
/* function mostrarCliente(){
    var listaClientes = document.querySelector("#listaClientes");
    if (listaClientes.style.display === "none" || listaClientes.style.display === "") {
        listaClientes.style.display = "block";
    } else {
        listaClientes.style.display = "none";
    }
} */