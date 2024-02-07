function almacenarCesta(){
    sessionStorage.setItem("MiCesta", JSON.stringify(cesta));
    getStorage();
}

function getStorage() {

    var fullCarrito;
    //var precioTotal = 0;
    //Si no existe el item en el localStorage, el total de la variable es igual a [] para evitar errores de undefined
    fullCarrito = !JSON.parse(localStorage.getItem("MiCesta")) ? [] : JSON.parse(localStorage.getItem("MiCesta"));
    //En caso de que la variable anterior se quedara en undefined, la variable es [] para evitar errores de undefined
    cesta = !fullCarrito ? [] : fullCarrito;
    cestaStorage=cesta;
}
/* 
    //Muestra los elementos del carrito
    document.getElementById("filasCarrito").innerHTML = ``;
    carro4Storage.forEach(element => {
        document.getElementById("filasCarrito").innerHTML += 
      <tr>
        <td>${element.nombre} x${element.cantidad}</td>
        <td>${(element.precio * parseInt(element.cantidad)).toFixed(2)}</td>
        <td><button id='${element.nombre}' onclick='borrarArticuloCarrito(this.id)'>Borrar</button></td>
      </tr>
    ;
        precioTotal += (element.precio * parseInt(element.cantidad));
    });

    if (precioTotal > 0) {
        document.getElementById("filasCarrito").innerHTML += 
      <tr>
        <td>Precio total: ${precioTotal.toFixed(2)}€</td>
      </tr>
    ;
        document.getElementById('confirm').disabled = false;

    } 

}*/