//Añadir escuchador de eventos y llamada a función callback
document.getElementById("verCookie").addEventListener("click", verCookie);


function preparation() {
    let visitas=1;
    let visitasCookie = getCookie("visitas");
    (visitasCookie==="")?cookieVisitas = setCookie("visitas", 1, 3): visitas=parseInt(visitasCookie);
    if(visitas!=1){
        visitas++;
        setCookie("visitas", visitas, 3)
    }


    


}

function verCookie() {
    alert("Cookies actuales.\n" + document.cookie);
}

function setCookie(nombre, valor, expiracion) {
    var d = new Date();
    //4. Fecha actual más número de días introducidos por argumento "expiración"
    d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);

    //5. creacion de la cooki
    var expir = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expir + ";path=/";

    alert(document.cookie);
}



function getCookie(nombre) {
    var nom = nombre + "=";
    //7. Creacion de un array con cada elemento
    var array = document.cookie.split(";");

    //8. Recorremos el array
    for (var i = 0; i < array.length; i++) {
        //9. cogemos cada elemento del array
        var c = array[i];
        //10. Evaluar c hasta encontrar vacios
        while (c.charAt(0) == " ") { //12345
            //11. Pasamos a c, todo menos el primer elemento
            c = c.substring(1);
        }
        //12. Extraer la parte del final
        if (c.indexOf(nombre) == 0) {
            //13. substring= Desde...hasta
            return c.substring(nom.length, c.length);
        }
    }
    //return vacio si no encuentra el nombr de la cookie
    return "";
}
