/////////////////////////////////
////////// OBJETO DATE /////////
////////////////////////////////

// Obtener la fecha y hora actual
const fechaActual = new Date();

// Métodos para obtener componentes individuales
const año = fechaActual.getFullYear();
const mes = fechaActual.getMonth(); // Ten en cuenta que los meses se indexan desde 0 (enero) hasta 11 (diciembre)
const dia = fechaActual.getDate();
const hora = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const segundos = fechaActual.getSeconds();

// Obtener el día de la semana (0 para domingo, 1 para lunes, ...)
const diaSemana = fechaActual.getDay();

// Métodos para establecer componentes individuales
fechaActual.setFullYear(2023);
fechaActual.setMonth(11); // 11 para diciembre
fechaActual.setDate(25);
fechaActual.setHours(12);
fechaActual.setMinutes(30);
fechaActual.setSeconds(0);

// Formatear la fecha como una cadena
const fechaFormateada = fechaActual.toDateString();

// Obtener la representación de cadena de la fecha y hora completa
const fechaHoraCompleta = fechaActual.toString();

// Obtener la representación de cadena en formato ISO
const fechaISO = fechaActual.toISOString();
