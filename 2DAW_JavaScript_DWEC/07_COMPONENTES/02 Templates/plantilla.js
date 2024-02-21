/* 2. Esto no aparecerá en tu página hasta que hagas una 
referencia a él con JavaScript y luego lo agregues al DOM, 
usando algo parecido a lo siguiente: */

let template = document.getElementById("my-paragraph");
let templateContent = template.content;

//3. Un línea así, tiene que aparecer.La inclusión en el DOM
document.body.appendChild(templateContent);
