

var persona = {
    nombre:'Raul',
    edad:30,
    saludar:function(){
        
        console.log('HOla' + this.nombre);
    }
};
alert(persona.saludar());