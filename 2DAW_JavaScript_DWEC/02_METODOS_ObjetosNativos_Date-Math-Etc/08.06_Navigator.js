/////////////////////////////////
////////// NAVIGATOR /////////
////////////////////////////////

//**JAVA ENABLED */ Indica si Java está habilitado en el navegador
const javaHabilitado = navigator.javaEnabled(); // Devuelve true o false

//**APP CODE NAME */ Devuelve el nombre en código del navegador
const codigoNavegador = navigator.appCodeName; // Devuelve una cadena

//**APP NAME */ Devuelve el nombre del navegador
const nombreNavegador = navigator.appName; // Devuelve una cadena

//**APP VERSION */ Devuelve la versión del navegador
const versionNavegador = navigator.appVersion; // Devuelve una cadena

//**COOKIE ENABLED */ Indica si las cookies están habilitadas en el navegador
const cookiesHabilitadas = navigator.cookieEnabled; // Devuelve true o false

//**PLATFORM */ Devuelve la plataforma del navegador
const plataformaNavegador = navigator.platform; // Devuelve una cadena

//**USER AGENT */ Devuelve el agente de usuario del navegador
const agenteUsuario = navigator.userAgent; // Devuelve una cadena

//**GEOLOCATION */ Verifica si la geolocalización está disponible en el navegador
const geolocalizacionDisponible = 'geolocation' in navigator; // Devuelve true o false

//**PLUGINS */ Obtiene la lista de plugins instalados en el navegador
const pluginsNavegador = navigator.plugins; // Devuelve una lista de objetos Plugin

// Imprimir los resultados en la consola
console.log("Java habilitado:", javaHabilitado);
console.log("Código del navegador:", codigoNavegador);
console.log("Nombre del navegador:", nombreNavegador);
console.log("Versión del navegador:", versionNavegador);
console.log("Cookies habilitadas:", cookiesHabilitadas);
console.log("Plataforma del navegador:", plataformaNavegador);
console.log("Agente de usuario:", agenteUsuario);
console.log("Geolocalización disponible:", geolocalizacionDisponible);
console.log("Plugins del navegador:", pluginsNavegador);

