class MiComponente extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('template').content;
        this.attachShadow({ mode: 'open' }).appendChild(template.cloneNode(true));
    }
}
customElements.define('mi-componente', MiComponente);

class OtroComponente extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML= '<h1>Otro tipo de componente</h1>'
    }
}
window.customElements.define('otro-componente',OtroComponente)