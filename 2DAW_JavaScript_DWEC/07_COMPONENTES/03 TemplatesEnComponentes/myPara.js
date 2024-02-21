customElements.define(
    "my-paragraph",
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.getElementById("my-paragraph");
        let templateContent = template.content;
  
        const shadowRoot = this.attachShadow({ mode: "open" })
            .appendChild(
                templateContent.cloneNode(true),
        );
      }
    },
  );
  /* 
  El punto clave a tener en cuenta aquí es que agregamos un clon del contenido de 
  la plantilla al shadow root creado usando el método Node.cloneNode().

Y debido a que estamos agregando su contenido a un shadow DOM, podemos incluir 
cierta información de estilo dentro de la plantilla en un elemento <style>, que
 luego se encapsula dentro del elemento personalizado. Esto no funcionaría si 
 nosotros solo lo agregásemos al DOM estandar.
  */