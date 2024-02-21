showFoodMenu();
function showFoodMenu() {
    $.ajax({
        type: "GET",
        url: "./demo.xml",
        dataType: "xml",

        error: function (e) {
            alert("Error al procesar el fichero XML");
            console.log("XML reading Failed: ", e);
        },

        success: function (response) {
            //Eliminamos el contendio previo de ul 
            //al lamarla de nuevo sera el contendio del xml
            $("ul").children().remove();

            $(response).find("food").each(function () {

                //recoger los elementos del XML
                var _name = 'Nombre: ' + $(this).find('name').text();
                console.log(_name);
                var _price = 'Precio: ' + $(this).find('price').text();
                var _calories = 'Calorias: ' + $(this).find('calories').text();
                var _descripcion = 'Descripcion: ' + $(this).find('description').text();

                //añadimos contendio al HTML
                $("ul").append('<li>' + _name + '</li>');
                $("ul").append('<li>' + _price + '</li>');
                $("ul").append('<li>' + _calories + '</li>');
                $("ul").append('<li>' + _descripcion + '</li>');
                $("ul").append('<hr>');
            })
        }
    })
}