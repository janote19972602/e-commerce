import { crearEventos } from "./eventos.js";
import { obtenerProductos } from "./api.js";
import { crearGrillaProductos, establecerProductosGlobal} from "./ui.js";

//cerebro del proyecto
window.addEventListener('load', () =>{

    crearEventos();
    obtenerProductos()
    .then(productos =>{
        establecerProductosGlobal(productos);
        crearGrillaProductos(productos);
        renderizarDetalleProducto(productos);
    })
    .catch(e =>{
        console.log(e); 
    })    
})

//Este código de JavaScript es un iniciador o inicializador de la aplicación que espera a que toda la página web (HTML, imágenes, estilos, scripts)
// se haya cargado completamente antes de ejecutar acciones principales