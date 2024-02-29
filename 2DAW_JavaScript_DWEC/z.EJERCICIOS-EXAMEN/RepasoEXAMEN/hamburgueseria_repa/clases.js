class Producto {
    constructor(nombre, precio, cantidad){
        this.nombre= nombre;
        this.precio= precio;
        this.cantidad= cantidad;
    }

    msjeleccion(){
        return `Ha elegido ${this.nombre}.`
    }
}

class Hamburguesa{
    constructor(nombre, precio, cantidad, ingredientes){
        super(nombre, precio, cantidad);
        this.ingredientes= ingredientes;
    }

}

class Bebida {
    constructor(nombre, precio, cantidad, tamanyo){
        super (nombre, precio, cantidad);
        this.tamanyo = tamanyo;

    }
}