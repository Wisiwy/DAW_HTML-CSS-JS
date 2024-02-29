class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    msjeleccion() {
        return `Ha elegido ${this.nombre}.`
    }
}

export class Hamburguesa extends Producto {
    constructor(nombre, precio, cantidad, ingredientes) {
        super(nombre, precio, cantidad);
        this.ingredientes = ingredientes;
    }

}

export class Refresco extends Producto {
    precio = 0;
    constructor(nombre,cantidad, tamanyo) {
        super(nombre,cantidad);
        this.tamanyo = tamanyo;
        this.precio = this.setPrecio(tamanyo);

        

    }

    setPrecio(tamanyo) {
        switch (tamanyo) {
            case "S":
                return this.precio= 0.50; 
                break;
            case "M":
                return this.precio= 1; 
                break;
            case "L":
                return this.precio= 1.5; 
                break;
            default:
                break;
        }
    }


}
export class Pedido {
    precioTot = new Number(0);
    productosTot = new Number(0);
    finCompra = false;
}



