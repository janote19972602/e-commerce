import { renderizarCarritoPrincipal} from "../ui/uiCarritoPrincipal.js";
import { cargarNavbar, cargarMenuLateral} from "../cargadorComponentes.js";
import { crearEventosGlobal } from "../eventos/eventosGlobal.js";
import { crearEventosCarro } from "../eventos/eventosCarrito.js";
import { obtenerCarrito } from "../helpers/helperLocalStorage.js";
import { renderizarCarrito} from "../ui/uiCarrito.js";

window.addEventListener('load', inicializarCarrito);

async function inicializarCarrito() {

    console.log("hola andres");

    document.getElementById('navbar').innerHTML = await cargarNavbar();
    document.getElementById('contenedorMenuLateral').innerHTML = await cargarMenuLateral();

    crearEventosGlobal();
    crearEventosCarro();
    const carro = obtenerCarrito();
    renderizarCarrito(carro);
    renderizarCarritoPrincipal(carro);

}