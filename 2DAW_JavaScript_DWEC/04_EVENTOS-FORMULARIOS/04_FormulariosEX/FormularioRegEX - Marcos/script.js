document.getElementById("registro-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var dni = document.getElementById("dni").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var email = document.getElementById("email").value.trim();

    var nombreRegex = /^[a-zA-Z\s]+$/;
    var dniRegex = /^\d{8}[a-zA-Z]$/;
    var telefonoRegex = /^\d{9}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

    if (!nombreRegex.test(nombre)) {
      alert("Por favor, introduce un nombre válido sin números.");
      return;
    }

    if (!nombreRegex.test(apellido)) {
      alert("Por favor, introduce un apellido válido sin números.");
      return;
    }

    if (!dniRegex.test(dni)) {
      alert("Por favor, introduce un DNI válido (8 dígitos seguidos de una letra).");
      return;
    }

    if (!telefonoRegex.test(telefono)) {
      alert("Por favor, introduce un número de teléfono válido (9 dígitos).");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Por favor, introduce un correo electrónico válido.");
      return;
    }

    alert("¡Registro exitoso!");
    mostrarDatos(nombre, apellido, dni, telefono, email);
});

function mostrarDatos(nombre, apellido, dni, telefono, email) {

    var datos = "Nombre: " + nombre + "\n" +
                "Apellido: " + apellido + "\n" +
                "DNI: " + dni + "\n" +
                "Teléfono: " + telefono + "\n" +
                "Correo electrónico: " + email;

    alert("Datos registrados:\n\n" + datos);
}