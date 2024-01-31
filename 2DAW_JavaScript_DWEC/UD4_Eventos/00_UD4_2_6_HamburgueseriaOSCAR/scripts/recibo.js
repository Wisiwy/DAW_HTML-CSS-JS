function visualizarPedido() {
    //Crear un orden de pedido que se incrementara por session. 


    var pedido = JSON.parse(sessionStorage.getItem("pedido"));
    console.log(pedido);

     //0. Mostrar id del pedido, numero referencia.
    var element_titulo = document.getElementById("tituloRecibo");
    let idAux = 
    element_titulo.innerHTML = `<h2>Tu pedido + ${idAux}</h2>`;

/*     //1.Mostrar productos del pedido
    mostrarPedido(pedido);

    //2. Mostrar precio total a pagar. 
    let element_pagar = document.getElementById("totalPagar");
    element_pagar.innerText = pedido.getPrecioTotal();  */

}