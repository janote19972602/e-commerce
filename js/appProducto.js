import { obtenerProductoPorId } from './api.js'; 
import { renderizarDetalleProducto } from './ui2.js'; 
import { cargarNavbar, cargarMenuLateral } from "./cargadorComponentes.js";
import { crearEventosGlobal } from './eventosGlobal.js';
import { crearEventosProducto  } from "./eventosProducto.js";


window.addEventListener('load', inicializarProducto); 

async function inicializarProducto() { 

    document.getElementById('navbar').innerHTML = await cargarNavbar();
    document.getElementById('contenedorMenuLateral').innerHTML = await cargarMenuLateral();

    crearEventosGlobal();
    crearEventosProducto();
    
    
    // Guardamos los parámetros de la URL
    const parametros = new URLSearchParams(window.location.search); 
    const idProducto = parametros.get('id'); 


    // Consumimos la API con su id y renderizamos la informacion
    obtenerProductoPorId(idProducto) 

        .then(producto => { 
            renderizarDetalleProducto(producto); 
        }) 
        .catch(error => { 
            console.log(error);
            document.getElementById('detalleProducto').innerHTML = '<p class="error">Hubo un problema al cargar el producto. Intenta de nuevo más tarde.</p>'; 
        }); 
}
