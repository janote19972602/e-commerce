//este modulo se encargara de agregar los eventos a los elementos correspondientes
import { obtenerProductosGlobal,renderizarCarrito} from "./ui2.js";
import { agregarProductoAlCarrito, obtenerCarrito, obtenerTotalCarrito, eliminarProductoCarrito} from "./carrito.js";

let arregloCarrito = [];
let menuLateral = '';
let overlay = '';
let spanContador = '';

export function crearEventosIndex() {

    const grillaProductos = document.getElementById('grillaProductos');
    grillaProductos.addEventListener('click', manejarEventosGrilla);
    spanContador = document.getElementById('contador');
    
}

//basicamente se accede a la grilla a la tarjeta al boton especialmente
function manejarEventosGrilla(e) {

    //buscar la card 
    const card = e.target.closest('.card');
    //e: objeto del evento | e.target: elemento específico donde ocurrió el clic | la const card: almacena todo 
    //closest('.card'): busca el mas cercano al selector css .card e indica que ahi se click

    const idProducto =  Number(card.dataset.idproducto);
    //idProducto: almacena todo | Number:transformacion a entero ya que el id es un numero
    //card.dataset.idproduto: accede a la propiedad id(dataset) a traves de la card

    const productoGlobal = obtenerProductosGlobal();
    //se almacena en una const productoGlobal todos los productos

    //se busca por id el producto y se deja guardado en producto
    const producto = productoGlobal.find(p => p.id === idProducto);
    
    // Comprobar si el elemento clickeado tiene la clase 'carrito-agregar'
    if (e.target.classList.contains('carrito-agregar')) {

        //se agrega el producto al carro
        agregarProductoAlCarrito(producto);
        //se guarda la funcion que obtiene el carrito con sus compras y despues la hace de nuevo
        const carrito = obtenerCarrito();
        renderizarCarrito(carrito);
        console.log(spanContador);
        
        spanContador.textContent = obtenerTotalCarrito();    
    }

    if (e.target.classList.contains('carrito-ver')) {
        
        window.location.href = `producto.html?id=${producto.id}`;
        
        
    }

    
}








