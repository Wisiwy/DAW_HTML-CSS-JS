/*
Cookies: 
-Pequeños fichero de texto guardados en el ordenador que permiten recordar información
sobre el usuario. 
-Recuerdan la información de un usuario aunque se cierre el navegdor
o se desconecte del servidor.
-Podemos guardar el nombre de un visitante de la página, el número de veces que ha entrado, etc.
-Se guardan en forma de pares "nombre=valor"
*/

//Crear cookie: nombre; feche de expiración -UTC-; edad máxima en segundos; ruta; dominio

//1. Ej. Dura lo que dure abierto el navegador
//document.cookie = "usuario = Alex;";

//2. Ej  Para modificaciónes path y expires debe estar todo igual o creará una nueva cookie
//document.cookie= "usuario = Alex; expires= Thu, 23 Nov 2023 12:00:00 UTC; path=/;"


document.cookie = "usuario = Alex;";
document.cookie = "color = azul;";
//3. Leer la cookie
var miCookie = document.cookie;
alert(miCookie);

//4. Modificar cookie
document.cookie = "color = verde";  
alert(document.cookie);

//5. Borrar - Poner una fecha anterior a la que nos encontramos, se suelen poner una muy lejana
document.cookie = "usuario=;expires=Thu, 01 Jan 1970 00:00:01 UTC";
document.cookie = "color=;expires=Thu, 01 Jan 1970 00:00:01 UTC";
alert(document.cookie);

//
