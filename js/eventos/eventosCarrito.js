import { agregarProductoAlCarrito } from "../carrito.js";
import { obtenerCarrito } from "../helpers/helperLocalStorage.js";
import { renderizarCarritoPrincipal } from "../ui/uiCarritoPrincipal.js";
import { obtenerProductoPorId } from "../api.js";

export function crearEventosCarro() {

    document.getElementById('carrito').addEventListener('click', manejarEventosCarro);
    
}

async function manejarEventosCarro(e) {

    const divCarritoItem = e.target.closest('.carrito-item');
    const cantidadSpan = divCarritoItem.querySelector('.producto-cantidad');    
    let cantidad = parseInt(cantidadSpan.textContent);

    const divCompra = e.target.closest('.card-compra');
    const btnMas = e.target.classList.contains('btn-incrementar-cantidad');
    const btnMenos = e.target.classList.contains('btn-decrementar-cantidad');
    const spanCantidad = divCompra.querySelector('.producto-cantidad');
    

    //boton mas +
    if (btnMas) {
        cantidad++;
        spanCantidad.textContent = cantidad;
    }
    //boton -
    if (btnMenos) {
        //evitar que NO baje de 1
        if (cantidad > 1) {
            cantidad--;
            spanCantidad.textContent = cantidad;
        }else{
            // Si baja de 1, se elimino
            // textoEstado.textContent = "🚫";
        }
    }
    
    


    
    
    
    
}

