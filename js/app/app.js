import { crearEventosGlobal } from "../eventos/eventosGlobal.js";
import { crearEventosIndex } from "../eventos/eventosIndex.js";
import { crearGrillaProductos} from "../ui/uiGrillaProductos.js";
import { renderizarCarrito} from "../ui/uiCarrito.js";
import { cargarNavbar, cargarMenuLateral } from "../cargadorComponentes.js";
import { obtenerProductosStore } from "../store/store.js";
import { obtenerCarrito } from "../helpers/helperLocalStorage.js";


//cerebro del proyecto
window.addEventListener('load', inicializar);

//Este código de JavaScript es un iniciador o inicializador de la aplicación que espera a que toda la página web (HTML, imágenes, estilos, scripts)
// se haya cargado completamente antes de ejecutar acciones principales
async function inicializar() {

    try {
        const nabvar = document.getElementById('navbar');
        const menuLateral = document.getElementById('contenedorMenuLateral');
        nabvar.innerHTML = await cargarNavbar();
        menuLateral.innerHTML = await cargarMenuLateral();

        crearEventosGlobal();
        crearEventosIndex();
        const carrito = obtenerCarrito();
        renderizarCarrito(carrito);
        const productos = await obtenerProductosStore();
        crearGrillaProductos(productos);

    } catch (error) {
        console.log(error);
    }
}
