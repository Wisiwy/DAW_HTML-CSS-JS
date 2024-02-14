## COMUNICACION SINCRONA
SINCRONA: Se hace peticion y se espera respuest del servidor se bloquea y se espera respuesta

ASINCRONA: No bloquea el servidor. Sigue trabajando el cliente. 

### Funcion callback
>  Funcion que se pasa a otra funcion como argumeno de otra
### AJAX 
>Tecnica de desarrolo de aplicaciones. Comunicacion entre cliente servidor de manera asíncrona. No bloquea la aplicacion. 

Tecnica permite actualizar ciertas partes de una pagina web. recargar solamente ciertas partes de la web sin interrumpir la navegación . 

1. Se envia una peticion obtener datos necesarios
2. Servidor procesa los datos demandados y envía una respuesta
3. TODO

#### Incovenientes
- Se utilizar más recursos del servidor >numero de peticiones
- Problemas de SEO. Buscador dificulta de analizar código. 
- Volver pagina angterios no es reproducio de la misma manera. 
- Medio no fin. 

#### Tecnologia en AJAX
- XMLhttpreques para recupreacion asíncora de los datos entre cliente y servior. 
- DOM - representacion de la página web en un a estructura de jerarquía de árbol. 
- XML Utilizado para describir y estucturar datos. 
- XQUEARY conocer estructuras. Sacar y organizar datos. 
- JSON
    ```js
    {value:string}
    {
    "nombre" :"Pedro García",
    "edad" :35,
    "estudiante" :false,
    "direccion": {
        "calle":"Evergreen Terrace",
        "ciudad":"Springfiel"
    },
    "telefono":[
        "555-555-555",
        "555-555-556"
    ]

#### Ejemplo de AJAX

```js

    var objetoXHR = new XMLHttpRequest();
    function obtenerDatosServidor(origen, elemento)
    {
    var objeto_destino = document.getElementById(elemento);
    objetoXHR.onreaystatechage
    }
```
### 