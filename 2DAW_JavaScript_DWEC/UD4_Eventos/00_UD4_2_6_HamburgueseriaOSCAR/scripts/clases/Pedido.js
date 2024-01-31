class Pedido {
    static ultimaId = 0;     

    constructor() {
        this.id = ++Pedido.ultimaId; //Id autoincremental. 
        this.cesta = []; //array[] de alimentos
        this.precioTotal = this.calcularTotal(); //calculos con array cesta[]
        this.timestamp = new Date();
        this.infoExtra = ''; //Sacado de textArea
    }

   /**
    * CALCULO PRECIO TOTAL 
    * @returns suma el precio de todos los alimentos dentro de la cesta
    */
    calcularTotal() {
        return this.cesta.reduce(
            (accumulator, currentValue) => accumulator + currentValue.precio * currentValue.cantidad, 0);
    }

    /* GETTERS & SETTERS */
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getCesta() {
        return this.cesta;
    }

    setCesta(cesta) {
        this.cesta = cesta;
        this.precioTotal = this.calcularTotal(); // Recalculate total when cesta is set
    }

    getPrecioTotal() {
        return this.precioTotal;
    }

    setPrecioTotal(precioTotal) {
        this.precioTotal = precioTotal;
    }

    getTimestamp() {
        return this.timestamp;
    }

    setTimestamp(timestamp) {
        this.timestamp = timestamp;
    }

    getInfoExtra() {
        return this.infoExtra;
    }

    setInfoExtra(infoExtra) {
        this.infoExtra = infoExtra;
    }
    /* **** */

}