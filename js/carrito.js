import { renderizarCarrito} from "./ui/uiCarrito.js";
import { guardarCarrito, obtenerCarrito } from "./helpers/helperLocalStorage.js";

//esta funcion sirve para agregar mas de un producto al carro pregunta y responde
export function agregarProductoAlCarrito(producto, carrito, cantidad) {
    
    //se busca el producto en el carrito por id
    const productoCarrito = carrito.find(p => p.idProducto === producto.id);

    //si existe ese producto se aumenta la cantidad
    if (productoCarrito) {
        productoCarrito.cantidad += cantidad;
        
    }else{
        //sino, se crea un nuevo objeto y se le agrega al carrito
        const nuevoProducto = {
                                idProducto: producto.id,
                                cantidad: cantidad,
                                }
        carrito.push(nuevoProducto);
    }
    guardarCarrito(carrito);

}


export function obtenerTotalCarrito() {

    const arregloCarrito = obtenerCarrito();
    let total = 0;
    arregloCarrito.forEach(objeto =>{

        total += objeto.cantidad;

    })
    return total;
    
}



export function aumentarCantidad(idProducto, carrito) {

    //se busca el producto por su id y se deja guardado en la const producto
    const producto = carrito.find(p => p.idProducto === idProducto);

    //pregunta "si NO existe producto"
    if (!producto) return;

    //aumenta su propiedad cantidad exactamente en 1
    producto.cantidad++;
    //se ocupa la funcion y se le pasa el carrito actualizado
    guardarCarrito(carrito);
    
}

export function disminuirCantidad(idProducto, carrito) {

    //buscamos el producto dentro del arreglo carrito
    const producto = carrito.find(pro => pro.idProducto === idProducto);

    //pregunta "si NO existe producto"
    if (!producto) return;

    if (producto.cantidad === 1) {        
        // Si la cantidad es 1, se llama a la función que lo elimina
        eliminarProductoCarrito(idProducto, carrito);
    }else{
        producto.cantidad--;
        guardarCarrito(carrito);
    }
}

//la funcion en resumen sirve para eliminar un producto especifico del carro 
export function eliminarProductoCarrito(idProducto, carrito) {
    
    //crea una nueva lista con todos los productos excluyendo al mismo producto que quiero eliminar
    carrito = carrito.filter(producto => producto.idProducto !== idProducto);
    
    //guarda una nueva lista sin el producto eliminado para que los cambios se mantengan
    guardarCarrito(carrito);

}
