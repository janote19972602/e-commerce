//este modulo se encargara de agregar los eventos a los elementos correspondientes
import { renderizarCarrito} from "../ui/uiCarrito.js";
import { agregarProductoAlCarrito, obtenerTotalCarrito, eliminarProductoCarrito, aumentarCantidad, disminuirCantidad} from "../carrito.js";
import { guardarCarrito, obtenerCarrito } from "../helpers/helperLocalStorage.js";

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

    const btnVerCarrito = document.getElementById('btnVerCarrito');

    if (btnVerCarrito) {
        console.log("hola");
        
        window.location.href = `carrito.html`;
        return;
    
    }

    console.log(e.target);
    
    //el producto se encuentra en un div con la clase carrito-producto y se guarda en una const, se escoge
    const divCarritoProducto = e.target.closest('.carrito-producto');  
    
    if (!divCarritoProducto) return;

    //busca el id del producto que se quire sumar o disminuir y se transforma en entero porque es 1 int entero
    const idProducto = Number(divCarritoProducto.dataset.idproducto); 

    //se devuelve el arreglo de objetos del carrito
    let carrito = obtenerCarrito();

    //estos son de la info del carrito, el aside el menu lateral
    const botonMas = e.target.classList.contains('btn-mas');
    const botonMenos = e.target.classList.contains('btn-menos');
    const btnEliminar = e.target.closest('.basurero-icono');
    
    
    
    
    //aumenta la cantidad del producto
    if (botonMas) {
        aumentarCantidad(idProducto, carrito);
        renderizarCarrito(obtenerCarrito());
    }

    //disminuir cantidad del producto
    if (botonMenos) {
        disminuirCantidad(idProducto, carrito);
        renderizarCarrito(obtenerCarrito());
    }

    //eliminar producto
    if (btnEliminar) {        
        eliminarProductoCarrito(idProducto, carrito);
        renderizarCarrito(obtenerCarrito());
    }


    
}








