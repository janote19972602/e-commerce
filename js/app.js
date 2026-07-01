import { crearEventosGlobal } from "./eventosGlobal.js";
import { crearEventosIndex } from "./eventosIndex.js";
import { obtenerProductos } from "./api.js";
import { crearGrillaProductos, establecerProductosGlobal} from "./ui.js";
import { cargarNavbar, cargarMenuLateral } from "./cargadorComponentes.js";

//cerebro del proyecto
window.addEventListener('load', inicializar);

async function inicializar() {

    const nabvar = document.getElementById('navbar');
    const menuLateral = document.getElementById('contenedorMenuLateral');

    nabvar.innerHTML = await cargarNavbar();
    menuLateral.innerHTML = await cargarMenuLateral();

    crearEventosGlobal();
    crearEventosIndex();
    obtenerProductos()
    .then(productos =>{
        establecerProductosGlobal(productos);
        crearGrillaProductos(productos);
    })
    .catch(e =>{
        console.log(e); 
    })    
    
}


//Este código de JavaScript es un iniciador o inicializador de la aplicación que espera a que toda la página web (HTML, imágenes, estilos, scripts)
// se haya cargado completamente antes de ejecutar acciones principales