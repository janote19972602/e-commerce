import { renderizarCarrito } from "./ui2.js";

let arregloCarrito = [];

//esta funcion sirve para agregar mas de un producto al carro pregunta y responde
export function  agregarProductoAlCarrito(producto) {
    
    //se busca el producto en el carrito por id
    const productoCarrito = arregloCarrito.find(p => p.idProducto === producto.id);

    //si esta se aumenta la cantidad
    if (productoCarrito) {
        productoCarrito.cantidad++;
    }else{
        //se crea un nuevo objeto y se le agrega al carrito
        const nuevoCarrito = {
        idProducto: producto.id,
        titulo: producto.title,
        cantidad: 1,
    }
        arregloCarrito.push(nuevoCarrito);
        
    }
}

export function obtenerCarrito() {

    return arregloCarrito;

}

export function obtenerTotalCarrito() {

    let total = 0;
    arregloCarrito.forEach(objeto =>{

        total += objeto.cantidad;

    })
    return total;
    
}

export function eliminarProductoCarrito(productoCarrito) {

    arregloCarrito = arregloCarrito.filter(carro => carro.idProducto !== productoCarrito.idProducto);
    // El metodo .filter() crea un nuevo arreglo con todos los elementos que cumplan una condición.

}
