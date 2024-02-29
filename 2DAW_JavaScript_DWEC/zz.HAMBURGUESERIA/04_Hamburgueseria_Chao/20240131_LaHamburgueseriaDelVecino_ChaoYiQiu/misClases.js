import { hamburguesas, bebidas, patatas, nuggets, postres } from "./arrays.js";

var recibo = [];

var hamburguesasLista = document.getElementById("hamburguesas-lista");
var bebidasLista = document.getElementById("bebidas-lista");
var patatasLista = document.getElementById("patatas-lista");
var nuggetsLista = document.getElementById("nuggets-lista");
var postresLista = document.getElementById("postres-lista");
var precioTotalElement = document.getElementById("precio-total");

var precioTotal = 0;
var numeroOrden = obtenerNumeroOrden();

function obtenerNumeroOrden() {
  var ultimoPedido = localStorage.getItem('ultimoPedido');
  if (ultimoPedido) {
    var pedidoGuardado = JSON.parse(ultimoPedido);
    var ordenGuardada = parseInt(pedidoGuardado.orden);
    if (ordenGuardada) {
      return ordenGuardada + 1;
    }
    return 1;
  }
}

function guardarPedidoEnLocalStorage(orden) {
  localStorage.setItem('ultimoPedido', JSON.stringify({ orden: orden, recibo: recibo, precioTotal: precioTotal }));
}

document.addEventListener('DOMContentLoaded', function () {
  var ultimoPedido = localStorage.getItem('ultimoPedido');

  if (ultimoPedido) {
    var confirmacion = confirm("¿Quieres pedir de nuevo el último pedido?");
    if (confirmacion) {
      var pedidoGuardado = JSON.parse(ultimoPedido);
      recibo = pedidoGuardado.recibo;
      precioTotal = pedidoGuardado.precioTotal;
      mostrarRecibo(recibo, precioTotal);
    } else {
      localStorage.removeItem('ultimoPedido');
    }
  }
});

hamburguesas.forEach(function (hamburguesa, index) {
  var hamburguesaDiv = document.createElement("div");
  hamburguesaDiv.innerHTML = `<div class="producto"><h4>Hamburguesa ${index + 1}</h4>
    <br><h4>Precio: $${hamburguesa.obtenerPrecios()}</h4><br>
    <h6>${hamburguesa.obtenerIngredientes()}</h6>
    <img class="imagen" src="media/burger${index + 1}.jpg"></div>`;

  var sumarButton = document.createElement("button");
  sumarButton.textContent = "+";
  sumarButton.addEventListener("click", function () {
    precioTotal += hamburguesa.obtenerPrecios();
    recibo.push(`Hamburguesa ${index + 1}`);
    precioTotalElement.textContent = precioTotal;
    mostrarRecibo(recibo, precioTotal);
  });

  var restarButton = document.createElement("button");
  restarButton.textContent = "-";
  restarButton.addEventListener("click", function () {
    // Restar del precio total y eliminar el último elemento coincidente del recibo
    if (recibo.includes(`Hamburguesa ${index + 1}`)) {
      precioTotal -= hamburguesa.obtenerPrecios();
      // Buscar el índice del último elemento que coincide
      var lastIndex = recibo.lastIndexOf(`Hamburguesa ${index + 1}`);

      if (lastIndex !== -1) {
        recibo.splice(lastIndex, 1);
      }
      precioTotalElement.textContent = precioTotal;
    }
    mostrarRecibo(recibo, precioTotal);
  });

  hamburguesaDiv.appendChild(sumarButton);
  hamburguesaDiv.appendChild(restarButton);

  hamburguesasLista.appendChild(hamburguesaDiv);
  precioTotalElement.textContent = precioTotal;
});

bebidas.forEach(function (bebida, index) {
  var bebidaDiv = document.createElement("div");
  bebidaDiv.innerHTML = `<div class="producto"><h4>${bebida.obtenerIngredientes()}</h4>
  <br><h4>Precio: $${bebida.obtenerPrecios()}</h4>
  <img class="imagen" src="media/drink${index + 1}.jpg"></div>`;

  var sumarButton = document.createElement("button");
  sumarButton.textContent = "+";
  sumarButton.addEventListener("click", function () {
    precioTotal += bebida.obtenerPrecios();
    recibo.push(bebida.obtenerIngredientes());
    precioTotalElement.textContent = precioTotal;
    mostrarRecibo(recibo, precioTotal);
  });

  var restarButton = document.createElement("button");
  restarButton.textContent = "-";
  restarButton.addEventListener("click", function () {
    if (recibo.includes(bebida.obtenerIngredientes())) {
      precioTotal -= bebida.obtenerPrecios();
      var lastIndex = recibo.lastIndexOf(bebida.obtenerIngredientes());

      if (lastIndex !== -1) {
        recibo.splice(lastIndex, 1);
      }
      precioTotalElement.textContent = precioTotal;
    }
    mostrarRecibo(recibo, precioTotal);
  });

  bebidaDiv.appendChild(sumarButton);
  bebidaDiv.appendChild(restarButton);

  bebidasLista.appendChild(bebidaDiv);
  precioTotalElement.textContent = precioTotal;
});

patatas.forEach(function (patata, index) {
  var patataDiv = document.createElement("div");
  patataDiv.innerHTML = `<div class="producto"><h4>${patata.obtenerIngredientes()}</h4>
    <br><h4>Precio: $${patata.obtenerPrecios()}</h4>
    <img class="imagen" src="media/potato${index + 1}.jpg"></div>`;

  var sumarButton = document.createElement("button");
  sumarButton.textContent = "+";
  sumarButton.addEventListener("click", function () {
    precioTotal += patata.obtenerPrecios();
    recibo.push(patata.obtenerIngredientes());
    precioTotalElement.textContent = precioTotal;
    mostrarRecibo(recibo, precioTotal);
  });

  var restarButton = document.createElement("button");
  restarButton.textContent = "-";
  restarButton.addEventListener("click", function () {
    if (recibo.includes(patata.obtenerIngredientes())) {
      precioTotal -= patata.obtenerPrecios();
      var lastIndex = recibo.lastIndexOf(patata.obtenerIngredientes());

      if (lastIndex !== -1) {
        recibo.splice(lastIndex, 1);
      }
      precioTotalElement.textContent = precioTotal;
    }
    mostrarRecibo(recibo, precioTotal);
  });

  function eliminarProductoRecibo(productName, productPrice) {
    var index = recibo.indexOf(productName);
    if (index !== -1) {
      precioTotal -= productPrice;
      precioTotalElement.textContent = precioTotal;
      recibo.splice(index, 1);
    }
  }

  patataDiv.appendChild(sumarButton);
  patataDiv.appendChild(restarButton);

  patatasLista.appendChild(patataDiv);
  precioTotalElement.textContent = precioTotal;
});

nuggets.forEach(function (nugget, index) {
  var nuggetDiv = document.createElement("div");
  nuggetDiv.innerHTML = `<div class="producto"><h4>${nugget.obtenerIngredientes()}</h4>
    <br><h4>Precio: $${nugget.obtenerPrecios()}</h4>
    <img class="imagen" src="media/nugget${index + 1}.jpg"></div>`;

  var sumarButton = document.createElement("button");
  sumarButton.textContent = "+";
  sumarButton.addEventListener("click", function () {
    precioTotal += nugget.obtenerPrecios();
    recibo.push(nugget.obtenerIngredientes());
    precioTotalElement.textContent = precioTotal;
    mostrarRecibo(recibo, precioTotal);
  });

  var restarButton = document.createElement("button");
  restarButton.textContent = "-";
  restarButton.addEventListener("click", function () {
    if (recibo.includes(nugget.obtenerIngredientes())) {
      precioTotal -= nugget.obtenerPrecios();
      var lastIndex = recibo.lastIndexOf(nugget.obtenerIngredientes());

      if (lastIndex !== -1) {
        recibo.splice(lastIndex, 1);
      }
      precioTotalElement.textContent = precioTotal;
    }
    mostrarRecibo(recibo, precioTotal);
  });

  nuggetDiv.appendChild(sumarButton);
  nuggetDiv.appendChild(restarButton);

  nuggetsLista.appendChild(nuggetDiv);
  precioTotalElement.textContent = precioTotal;
});

postres.forEach(function (postre, index) {
  var postreDiv = document.createElement("div");
  postreDiv.innerHTML = `<div class="producto"><h4>${postre.obtenerIngredientes()}</h4>
    <br><h4>Precio: $${postre.obtenerPrecios()}</h4>
    <img class="imagen" src="media/dessert${index + 1}.jpg"></div>`;

  var sumarButton = document.createElement("button");
  sumarButton.textContent = "+";
  sumarButton.addEventListener("click", function () {
    precioTotal += postre.obtenerPrecios();
    recibo.push(postre.obtenerIngredientes());
    precioTotalElement.textContent = precioTotal;
    mostrarRecibo(recibo, precioTotal);
  });

  var restarButton = document.createElement("button");
  restarButton.textContent = "-";
  restarButton.addEventListener("click", function () {
    if (recibo.includes(postre.obtenerIngredientes())) {
      precioTotal -= postre.obtenerPrecios();
      var lastIndex = recibo.lastIndexOf(postre.obtenerIngredientes());

      if (lastIndex !== -1) {
        recibo.splice(lastIndex, 1);
      }
      precioTotalElement.textContent = precioTotal;
    }
    mostrarRecibo(recibo, precioTotal);
  });

  postreDiv.appendChild(sumarButton);
  postreDiv.appendChild(restarButton);

  postresLista.appendChild(postreDiv);
  precioTotalElement.textContent = precioTotal;
});

function mostrarRecibo(recibo, precioTotal) {
  var reciboDiv = document.getElementById("recibo");

  reciboDiv.innerHTML = "";
  var cantidadProductos = {};

  recibo.forEach(function (producto) {
    if (cantidadProductos[producto]) {
      cantidadProductos[producto]++;
    } else {
      cantidadProductos[producto] = 1;
    }
  });

  for (var producto in cantidadProductos) {
    var div2 = document.createElement("div");
    div2.textContent = `${producto} x ${cantidadProductos[producto]}`;
    reciboDiv.appendChild(div2);
  }

  var total = document.createElement("div");
  total.innerHTML = "<hr>Precio total: $" + precioTotal;
  reciboDiv.appendChild(total);
}

var ticket = document.getElementById("mostrarTicket");

ticket.addEventListener("click", function () {
  mostrarTicket();
});

function mostrarTicket() {
  var numeroOrdenStr = String(numeroOrden).padStart(3, '0');
  var ventanaTicket = window.open("", "_blank");
  var cantidadProductos = {};

  guardarPedidoEnLocalStorage(numeroOrdenStr);

  // Mostrar el número de orden en el ticket
  var ticketHTML = `<html><head><title>Ticket de Compra</title><link rel="stylesheet" href="ticket.css">
  <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"></script>
  <script src="fire.js"></script></head><body>`;
  ticketHTML += "<header><h1>Hamburgueseria Rēdawulfaz</h1></header>";
  ticketHTML += `<h2>Orden Nº: ${numeroOrdenStr}</h2>`;
  ticketHTML += "<h2>Factura simplificada</h2>";
  ticketHTML += "<div><table><tr><th>Cant</th><th>Descripción</th>";

  recibo.forEach(function (producto) {
    if (cantidadProductos[producto]) {
      cantidadProductos[producto]++;
    } else {
      cantidadProductos[producto] = 1;
    }
  });

  for (var producto in cantidadProductos) {
    ticketHTML += `<tr><td>${cantidadProductos[producto]}</td><td> ${producto} </tr>`;
  }

  ticketHTML += "</table></div>";
  ticketHTML += `<p>TOTAL (IVA Incluido): $${precioTotal}</p>`;
  ticketHTML += "<h2>GRACIAS POR SU VISITA</h2>";
  ticketHTML += `<div><p>"Your burger is coming....."</p><model-viewer src='./media/duck.glb' autoplay ar shadow-intensity='1' 
  camera-orbit="45deg 90deg 15m"></model-viewer></div><canvas id="canvas"></canvas>`
  ticketHTML += "</body></html>";

  ventanaTicket.document.open();
  ventanaTicket.document.write(ticketHTML);
  ventanaTicket.document.close();

  numeroOrden++;

}

function again() {
  precioTotal = 0;
  precioTotalElement.textContent = 0;
  recibo = [];
  var reciboDiv = document.getElementById("recibo");

  while (reciboDiv.firstChild) {
    reciboDiv.removeChild(reciboDiv.firstChild);
  }
}

var reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", function () {
  again();
  mostrarRecibo(recibo, precioTotal);
});

var cesta = document.getElementById("cesta");
var popup = document.getElementById("popup");
var closeBtn = document.getElementById("close");

cesta.addEventListener("click", function () {
  mostrarRecibo(recibo, precioTotal);
  popup.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});