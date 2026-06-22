//este modulo se encargara de agregar los eventos a los elementos correspondientes
import { renderizarCarrito } from "./ui2.js";
import { agregarProductoAlCarrito, obtenerCarrito, obtenerTotalCarrito, eliminarProductoCarrito} from "./carrito.js";

let arregloCarrito = [];
let menuLateral = '';
let overlay = '';
let spanContador = '';

export function crearEventosGlobal() {

    //se definen 2 const una para el menu lateral donde saldra info de la compra y el otro el fondo
    menuLateral = document.getElementById('menuLateral');
    overlay = document.getElementById('overlay');
    const navbarCarrito = document.getElementById('navbarCarrito');
    spanContador = document.getElementById('contador');
    navbarCarrito.addEventListener('click', abrirCarrito);
    overlay.addEventListener('click', cerrarCarrito);  
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

//logica de los botones mas(+) y menos(-) en el menu lateral al seleccionar los botones + y -, como llego a esos tras la delegacion D.E
function manejarEventosMenuLateral(e) {

    if (e.target.classList.contains('carrito-mostrar')) {
        return;        
    }

    //el producto se encuentra en un div con la clase carrito-producto y se guarda en una const, se escoge
    const divCarritoProducto = e.target.closest('.carrito-producto');  
    
    if (!divCarritoProducto) return;

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


    //EJEMPLO
    if (e.target.classList.contains('btn-detalle')) {

        //ejemplo
    window.location.href = `producto.html?id=${producto.id}`;

    }

}








