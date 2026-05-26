import { obtenerProductoPorId } from './api.js'; 
import { renderizarDetalleProducto } from './ui.js'; 
import { cargarNavbar } from "./cargadorComponentes.js";

window.addEventListener('load', inicializarProducto); 

async function inicializarProducto() { 

    document.getElementById('navbar').innerHTML = await cargarNavbar();

    
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
