let n1;
let n2;
let suma;
let multi;

alert ('Ahora voy a sumar y multiplicar los número enteros que  me indique.')
do{
    n1 = prompt("Primer nª: ");
    n2 = prompt("Segundo nª: ");
    if(!parseInt(n1) || !parseInt(n2)) {
        alert('No puedo operar)')
    }else{
        suma = parseInt(n1) + parseInt(n2);
    }

}
