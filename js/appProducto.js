import { obtenerProductoPorId } from './api.js'; 
import { renderizarCarrito, renderizarDetalleProducto } from './ui.js'; 
import { cargarNavbar, cargarMenuLateral } from "./cargadorComponentes.js";
import { crearEventosGlobal } from './eventosGlobal.js';
import { crearEventosProducto  } from "./eventosProducto.js";
import { obtenerCarrito } from './helpers/helperLocalStorage.js';


window.addEventListener('load', inicializarProducto); 

async function inicializarProducto() { 

    document.getElementById('navbar').innerHTML = await cargarNavbar();
    document.getElementById('contenedorMenuLateral').innerHTML = await cargarMenuLateral();

    crearEventosGlobal();
    crearEventosProducto();
    const carrito = obtenerCarrito();
    renderizarCarrito(carrito);
    
    
    //
    const parametros = new URLSearchParams(window.location.search); 
    //new URLSearchParams: Es una interfaz de JavaScript que crea un objeto fácil de leer y manipular. Sirve para gestionar e interpretar toda la parte de la URL encargada de realizar búsquedas o pasar datos
    //window.location.search: devuelve la cadena de consulta (query string) de la URL actual
    //parametros.get('id') = Es un método que busca dentro del objeto parametros y extrae el valor asignado a la clave específica que se encuentra entre paréntesis 
    const idProducto = parametros.get('id'); 

    const producto = await obtenerProductoPorId(idProducto);
    renderizarDetalleProducto(producto);

}
