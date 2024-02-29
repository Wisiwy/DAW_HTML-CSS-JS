class TarjetaProducto extends HTMLElement {
    constructor() {
        super();
        this.nombre;
        this.precio;
        this.imagen;
    }
    static get observedAttributes() {
        return ['nombre', 'precio', 'imagen']
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
    get imagen() {
        return this.getAttribute('imagen');
    }
    set imagen(value) {
        this.setAttribute('imagen', value);
    }

    attributeChangeCallback(nombreAtr, oldValue, newValue) {
        switch (nombreAtr.toLowerCase()) {
            case "nombre":
                this.nombre = newValue;
            case "precio":
                this.precio = newValue;
            case "imagen":
                this.imagen = newValue;
        }
    }
    connectedCallback() {
        //crear componentes
        this.innerHTML =
            `<div class = "ficha_producto">
                        <img src="${this.imagen}" alt="img:.${this.nombre}">
                        <h3>
                         ${this.nombre}
                        </h3>
                        
                        <p>${this.precio}</p>
            </div>`
    }
}
window.customElements.define("ficha-producto", TarjetaProducto);