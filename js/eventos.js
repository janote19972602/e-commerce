//este modulo se encargara de agregar los eventos a los elementos correspondientes
import { obtenerProductosGlobal,renderizarCarrito} from "./ui.js";
import { agregarProductoAlCarrito, obtenerCarrito, obtenerTotalCarrito, eliminarProductoCarrito} from "./carrito.js";

let arregloCarrito = [];

//se definen 2 const una para el menu lateral donde saldra info de la compra y el otro el fondo
const menuLateral = document.getElementById('menuLateral');
const overlay = document.getElementById('overlay');
const navbarCarrito = document.getElementById('navbarCarrito');
const grillaProductos = document.getElementById('grillaProductos');
const spanContador = document.getElementById('contador');


export function crearEventos() {

    navbarCarrito.addEventListener('click', abrirCarrito);
    overlay.addEventListener('click', cerrarCarrito);  
    grillaProductos.addEventListener('click', manejarEventosGrilla);
    menuLateral.addEventListener('click', manejarEventosMenuLateral);
}

function abrirCarrito() {

    //buscar el carrito lateral y agregar la clase activo se asoma la info del producto comprado y al mismo tiempo
    //abre el overlay que es el fondo como si estuviese bloqueado
    menuLateral.classList.add('activo');
    overlay.classList.add('activo');
}

function cerrarCarrito() {

    //oculta el menu lateral y su fondo
    menuLateral.classList.remove('activo');
    overlay.classList.remove('activo');

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
        spanContador.textContent = obtenerTotalCarrito();    
    }

    if (e.target.classList.contains('carrito-ver')) {
        window.location.href = 'producto.html';
        
        
    }

    
}

//logica de los botones mas(+) y menos(-) en el menu lateral al seleccionar los botones + y -, como llego a esos tras la delegacion D.E
function manejarEventosMenuLateral(e) {

    //el producto se encuentra en un div con la clase carrito-producto y se guarda en una const, se escoge
    const divCarritoProducto = e.target.closest('.carrito-producto');

    //busca el id del producto que se quire sumar o disminuir y se transforma en entero porque es 1 int entero
    const idProducto = Number(divCarritoProducto.dataset.idproducto); 

    //se devuelve el arreglo de objetos del carrito
    let arregloCarritoProducto = obtenerCarrito();

    //esta busca el producto por id en el "arregloCarritoProducto"
    const productoDelCarrito = arregloCarritoProducto.find(p =>p.idProducto === idProducto);

    const botonMas = e.target.classList.contains('btn-mas');
    const botonMenos = e.target.classList.contains('btn-menos');
    const btnEliminar = e.target.closest('.basurero-icono');
    
    //agregar producto
    if (botonMas) {
    
        //1 hay que buscar idProducto
        //2 buscar el producto en el arreglo carrito 
        //3 sumar uno a la cantidad del objeto producto

        //se suma a la cantidad del objeto producto
        productoDelCarrito.cantidad++;
        renderizarCarrito(arregloCarritoProducto);
    }

    //quitar producto
    if (botonMenos) {
        //si el producto es 1 y se presiona el boton - , se cancela la compra con una funcion
        if (productoDelCarrito.cantidad === 1) {
            eliminarProductoCarrito(productoDelCarrito);
        }else{/*si la cantidad es superior a 1 simplemente resta a la cantidad del producto*/
            productoDelCarrito.cantidad--;
        }
        renderizarCarrito(obtenerCarrito());
    }

    //eliminar producto
    if (btnEliminar) {        
        eliminarProductoCarrito(productoDelCarrito);
        renderizarCarrito(obtenerCarrito());

    }
}








