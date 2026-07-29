import { agregarProductoAlCarrito } from "../carrito.js";
import { obtenerCarrito } from "../helpers/helperLocalStorage.js";
import { renderizarCarrito} from "../ui/uiCarrito.js";

export function crearEventosCarro() {

    document.getElementById('carrito').addEventListener('click', manejarEventosCarro);
    
}

