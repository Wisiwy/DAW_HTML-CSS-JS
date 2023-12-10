/////////////////////////////////
////////// DOCUMENT /////////
////////////////////////////////
//**DOCTYPE */ Devuelve el objeto DocumentType asociado al documento.
const tipoDocumento = document.doctype;

//**DOCUMENT ELEMENT */ Devuelve el elemento raíz (root) del documento (por ejemplo, el elemento HTML para documentos HTML).
const elementoRaiz = document.documentElement;

//**HEAD */ Devuelve el elemento HEAD del documento.
const cabezaDocumento = document.head;

//**BODY */ Devuelve el elemento BODY del documento.
const cuerpoDocumento = document.body;

//**URL */ Devuelve la URL completa del documento.
const urlDocumento = document.URL;

//**DOMAIN */ Devuelve el dominio del servidor del documento.
const dominioDocumento = document.domain;

//**LAST MODIFIED */ Devuelve la fecha de la última modificación del documento.
const ultimaModificacion = document.lastModified;

//**CHARACTER SET */ Devuelve el conjunto de caracteres del documento.
const conjuntoCaracteres = document.characterSet;

//**CREATE ELEMENT() */ Crea un nuevo elemento HTML especificado por su nombre de etiqueta.
const nuevoElemento = document.createElement("div");

//**CREATE TEXT NODE() */ Crea un nuevo nodo de texto.
const nuevoNodoTexto = document.createTextNode("Hola, mundo!");

//**GET ELEMENT BY ID() */ Devuelve el elemento que tiene el ID especificado.
const elementoPorId = document.getElementById("miElemento");

//**GET ELEMENTS BY TAG NAME() */ Devuelve una colección de todos los elementos con el nombre de etiqueta especificado.
const elementosPorTag = document.getElementsByTagName("p");

//**GET ELEMENTS BY CLASS NAME() */ Devuelve una colección de todos los elementos con la clase especificada.
const elementosPorClase = document.getElementsByClassName("miClase");

//**QUERY SELECTOR() */ Devuelve el primer elemento que coincida con un selector CSS especificado.
const primerElemento = document.querySelector(".miSelector");

//**QUERY SELECTOR ALL() */ Devuelve todos los elementos que coincidan con un selector CSS especificado.
const todosElementos = document.querySelectorAll("p");

// Métodos importantes del objeto document

//**captureEvents() */ Captura todos los eventos para el documento.
document.captureEvents();

//**close() */ Cierra la ventana actual.
document.close();

//**open() */ Abre un nuevo documento.
document.open();

//**releaseEvents() */ Libera todos los eventos capturados para el documento.
document.releaseEvents();

//**routeEvent() */ Enruta el evento dado al objeto apropiado del documento.
document.routeEvent();

//**handleEvent() */ Maneja el evento dado.
document.handleEvent();

//**write() */ Escribe texto en el documento.
document.write("Hola, mundo!");

//**home() */ Navega al inicio del documento.
document.home();

// Propiedades importantes del objeto document

//**FORMS */ Devuelve una colección de todos los elementos de formulario del documento.
const formularios = document.forms;

//**IMAGES */ Devuelve una colección de todos los elementos de imagen del documento.
const imagenes = document.images;

//**LASTMODIFIED */ Devuelve la fecha de la última modificación del documento.
const ultimaModificacionDocumento = document.lastModified;

//**TITLE */ Obtiene o establece el título del documento.
const tituloDocumento = document.title;

//**URL */ Devuelve la URL completa del documento.
const urlDocumentoPropiedad = document.URL;

//**LINKS */ Devuelve una colección de todos los elementos de enlace del documento.
const enlaces = document.links;

//**LAYERS */ Obsoleto. Utilice otras técnicas como CSS para manejar capas.
const capas = document.layers;

//**EMBEDS */ Devuelve una colección de todos los elementos embed del documento.
const elementosEmbed = document.embeds;

//**DOMAIN */ Devuelve el dominio del servidor del documento.
const dominioDocumentoPropiedad = document.domain;

//**COOKIE */ Obtiene o establece las cookies asociadas al documento.
const cookiesDocumento = document.cookie;

// Imprimir los resultados en la consola
console.log("Formularios en el documento:", formularios);
console.log("Imágenes en el documento:", imagenes);
console.log("Última modificación del documento:", ultimaModificacionDocumento);
console.log("Título del documento:", tituloDocumento);
console.log("URL del documento (propiedad):", urlDocumentoPropiedad);
console.log("Enlaces en el documento:", enlaces);
console.log("Capas en el documento:", capas);
console.log("Elementos embed en el documento:", elementosEmbed);
console.log("Dominio del documento (propiedad):", dominioDocumentoPropiedad);
console.log("Cookies del documento:", cookiesDocumento);
