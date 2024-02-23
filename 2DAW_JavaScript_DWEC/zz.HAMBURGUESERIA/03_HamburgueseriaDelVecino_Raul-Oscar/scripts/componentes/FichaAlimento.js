class FichaAlimento extends HTMLElement {
    constructor() {
        //****LLAMADA AL super() */
        super();
        this.id;
        this.nombre;
        this.precio,
        this.cantidad;
        this.imagen;
    }
    //añadir a la etiqueta atributos
    static get observedAttributes() {
        return ['id', 'nombre', 'precio', 'cantidad', 'imagen'];
    }

    //sincroniza atributos getters y setter


    get id() {
        return this.getAttribute('id');
    }
    set id(value) {
        this.setAttribute('id', value);
    }
    get nombre() {
        return this.getAttribute('nombre');
    }
    set nombre(value) {
        this.setAttribute('nombre', value);
    }

    get precio() {
        return this.getAttribute('precio');
    }
    set precio(value) {
        this.setAttribute('precio', value);
    }

    get cantidad() {
        return this.getAttribute('cantidad');
    }
    set cantidad(value) {
        this.setAttribute('cantidad', value);
    }

    get imagen() {
        return this.getAttribute('imagen');
    }
    set imagen(value) {
        this.setAttribute('imagen', value);
    }


    attributeChangeCallback(nombreAtr, oldValue, newValue) {
        switch (nombreAtr.toLowerCase()) {
            case "id":
                this.id = newValue;
            case "nombre":
                this.nombre = newValue;
            case "precio":
                this.precio = newValue;
            case "imagen":
                this.imagen = newValue;
            case "cantidad":
                this.cantidad = newValue;
        }
    }
    connectedCallback() {
        //crear componentes
        this.innerHTML =
            `<div class = "ficha_alimento">
                    <img src="${this.imagen}"
                    alt="${this.nombre}">
                    <h3>${this.nombre}</h3>2
                    <p>Ingredientes: </p>
                    <button  onclick="suprimirProducto(${this.id})"> - </button>
                    <a id="count${this.id}" style="color:DodgerBlue;">${this.cantidad}</a>
                    <button  onclick="anadirProducto(${this.id})"> + </button>
            </div>`

    }



}

window.customElements.define("ficha-alimento", FichaAlimento);