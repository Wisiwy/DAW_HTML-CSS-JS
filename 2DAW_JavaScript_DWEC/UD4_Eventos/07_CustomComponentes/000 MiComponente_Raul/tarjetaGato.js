class TarjetaGato extends HTMLElement {
    constructor() {
        //****LLAMADA AL super() */
        super();

        this.razaGato;
        this.linkWiki,
            this.imagen;
        this.descripcion;
    }
    //añadir a la etiqueta atributos
    static get observedAttributes() {
        return ['razaGato', 'linkWiki', 'imagen', 'descripcion'];
    }

    //sincroniza atributos getters y setter


    get razaGato() {
        return this.getAttribute('razaGato');
    }
    set razaGato(value) {
        this.setAttribute('razaGato', value);
    }

    get linkWiki() {
        return this.getAttribute('linkWiki');
    }
    set linkWiki(value) {
        this.setAttribute('linkWiki', value);
    }

    get imagen() {
        return this.getAttribute('imagen');
    }
    set imagen(value) {
        this.setAttribute('imagen', value);
    }

    get descripcion() {
        return this.getAttribute('descripcion');
    }
    set descripcion(value) {
        this.setAttribute('descripcion', value);
    }

    attributeChangeCallback(nombreAtr, oldValue, newValue){
        switch(nombreAtr.toLowerCase()){
            case "razaGato":
                this.razaGato = newValue;
            case "linkWiki":
                this.linkWiki = newValue;
            case "imagen":
                this.imagen = newValue;
            case "descripcion":
                this.descripcion = newValue;
        }
    }
    connectedCallback() {
        


    }



}

window.customElements.define("hola-mundo", holaMundo);