//1. Creación de una clase que hereda expresamente de HTMLElement
//https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
class holaMundo extends HTMLElement{
    constructor(){
        super();
        //shadowRoot blinda/no blinda el componente de styling exerno
        /* this.root=this.attachShadow({mode:'closed'}) */
        //9. Creamos la variable que guardará los valores necesario, como los atributos pasado por html
        this.name;
        this.surname;
    }

    //7. Es posible añadir a la etiqueta atributos
    static get observedAttributes(){
        //nombres de los atributos
        return ['name','surname'];
    }

    //7. Sincroniza atributos con propiedades todo el rato
    get name(){
        return this.getAttribute('name');
    }
    set name(value){
        this.setAttribute('name',value);
    }
    get surname(){
        return this.getAttribute('surname');
    }
    set surname(value){
        this.setAttribute('surname', value);
    }


    //8. Mediante esta otra función, recuperaremos lo que 
    //se establecen en los atributos de la etiqueta
    //pasará por argumentos, el valor de valores anteriores (por si sucede el cambio)
    attributeChangeCallback(nombreAtr, oldValue, newValue){
        //To lower case para evitar errores de case sensitive
        switch(nombreAtr.toLowerCase()){
            //10. Filtramos por nombreAtr y asignamos el valor
            case "name":
                this.name= newValue;
            break;
            case "surname":
                this.surname= newValue;
            break;    
        }
    }

    //4. Editamos el componente
    connectedCallback(){

        //5. Primera modificación básica
        /* this.innerHTML="Hola Programador"; */
        //6. En este caso, inyectamos una líneas más de HTML
       /*  this.innerHTML= 
            `<div>
                <h1>Hola programador</h1>
                <p>Esto es un párrafo</p>
             </div>`  */

        //11. Integramos el valor de los atributos
        this.innerHTML= 
            `<div>
                <h1>Hola ${this.name} ${this.surname}</h1>
                <p>Esto es un párrafo</p>
             </div>`   
             
        this.style.color="blue";
    }
}

//2. Segunda parte de la creación del componente
//llamada la funcion define() de la propiedad customElemnet
//habitualmente 2 palabras separdas por guion para que el intérprete
//no lo confunda con una etiqueta
window.customElements.define("hola-mundo", holaMundo);