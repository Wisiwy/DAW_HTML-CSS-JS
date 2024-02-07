function visualizarPedido() {
    //Crear un orden de pedido que se incrementara por session. 


    var pedido2 = new Pedido();
    pedido2= JSON.parse(sessionStorage.getItem("pedido"));
    console.log(pedido2);

     //0. Mostrar id del pedido, numero referencia.
    var element_titulo = document.getElementById("tituloRecibo");
    //let idAux = pedido2.getId();
    let idAux = pedido2.id;
    element_titulo.innerHTML = `<h2>Tu pedido + ${idAux}</h2>`;

/*     //1.Mostrar productos del pedido*/
    mostrarPedido(pedido2);

    //2. Mostrar precio total a pagar. 
    let element_pagar = document.getElementById("totalPagar");
    element_pagar.innerText = pedido2.precioTotal;  

}

function mostrarPedido(pedido) {
    
    let elementoProductos = document.getElementById("contenido_recibo");
    let arrayCesta = pedido.cesta;
    arrayCesta.forEach((Alimento) => {
        elementoProductos.innerHTML += "<br>" + Alimento.nombre + "  -- " + Alimento.cantidad + " -->" + Alimento.precio * Alimento.cantidad + "€";
    });
}
