import { obtenerProductoPorId } from "./api.js";
import { agregarProductoAlCarrito } from "./carrito.js";
import { obtenerCarrito } from "./helpers/helperLocalStorage.js";
import { renderizarCarrito } from "./ui.js";


export function crearEventosProducto() {
    
    document.getElementById('detalleProducto').addEventListener('click', manejarEventosProducto);
    // document.getElementById('detalleProductos').addEventListener('click',manejarEventosProductos);
}

async function manejarEventosProducto(e) {

   
    const contenedorProducto = e.target.closest('.contenedor-producto');
    const idProducto = Number(contenedorProducto.dataset.idproducto);

    const producto = await obtenerProductoPorId(idProducto);
    const carrito = obtenerCarrito();

    //esta linea de codigo Busca dentro del elemento padre (e.target.parentElement) un elemento hijo que tenga la clase .cantidad-de-producto
    const cantidadSpan = contenedorProducto.querySelector('.cantidad-de-producto');    

    //esta linea de codigo NO funciona porque el metodo constains no devuelve un elemento html,
    //devuelve un valor booleano, true o false
    // const cantidadSpan = e.target.classList.contains('cantidad-de-producto');

    //ya que la cantidad es un string(texto) lo converti a numero
    let cantidad = parseInt(cantidadSpan.textContent);

    //creamos en const los botones mas menos y el agregar y sus clases
    const btnMas = e.target.classList.contains('btn-mas-producto');
    const btnMenos = e.target.classList.contains('btn-menos-producto');
    const btnAgregar = e.target.classList.contains('boton-agregar-producto');

    // Encontramos los elementos específicos dentro de esa caja de producto
    const cajaProducto = e.target.closest('.caja-de-compra-producto');
    const spanCantidad = cajaProducto.querySelector('.cantidad-de-producto');
    const textoEstado = cajaProducto.querySelector('.js-texto-cantidad');  
    
    //boton mas +
    if (btnMas) {
        cantidad++;
        spanCantidad.textContent = cantidad;
        textoEstado.textContent = `Cantidad(${cantidad} en el carrito)`;
    }
    //boton -
    if (btnMenos) {
        //evitar que NO baje de 1
        if (cantidad > 1) {
            cantidad--;
            spanCantidad.textContent = cantidad;
            textoEstado.textContent = `Cantidad(${cantidad} en el carrito)`;
        }else{
            // Si baja de 1, puedes eliminar o indicar que se removió
            textoEstado.textContent = "🚫";
        }
    }

    if (btnAgregar) {
        agregarProductoAlCarrito(producto, carrito, cantidad);
        renderizarCarrito(obtenerCarrito());
    }

    cantidadSpan.textContent = cantidad;

}









