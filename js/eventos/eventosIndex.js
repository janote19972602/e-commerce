//este modulo se encargara de agregar los eventos a los elementos correspondientes
import { crearGrillaProductos} from "../ui/uiGrillaProductos.js";
import { renderizarCarrito} from "../ui/uiCarrito.js";
import { agregarProductoAlCarrito, obtenerTotalCarrito, eliminarProductoCarrito} from "../carrito.js";
import { obtenerCarrito } from "../helpers/helperLocalStorage.js";
import { obtenerProductosStore } from "../store/store.js";

let arregloCarrito = [];
let menuLateral = '';
let overlay = '';
let spanContador = '';

export function crearEventosIndex() {

    const grillaProductos = document.getElementById('grillaProductos');
    grillaProductos.addEventListener('click', manejarEventosGrilla);
    spanContador = document.getElementById('contador');
    const buscadorProductos = document.getElementById('buscador');
    buscadorProductos.addEventListener('input', manejarEventosInputBuscador);
    
}

//input que permite buscar los productos por el nombre hay que solucionar
function manejarEventosInputBuscador(e) {

    //se guarda en una const todos los productos
    
    //se guarda en una const Esta línea de código captura el texto que el usuario acaba de escribir en un campo 
    const textoBuscado = e.target.value.toUpperCase();

    //se busca por el metodo filter, se diferencia 
    const productosFiltrados = productosGlobal.filter(producto => producto.title.toUpperCase().includes(textoBuscado));
    crearGrillaProductos(productosFiltrados);
}

//basicamente se accede a la grilla a la tarjeta al boton especialmente
async function manejarEventosGrilla(e) {

    //buscar la card 
    const card = e.target.closest('.card');
    //e: objeto del evento | e.target: elemento específico donde ocurrió el clic | la const card: almacena todo 
    //closest('.card'): busca el mas cercano al selector css .card e indica que ahi se click

    const idProducto =  Number(card.dataset.idproducto);
    //idProducto: almacena todo | Number:transformacion a entero ya que el id es un numero
    //card.dataset.idproduto: accede a la propiedad id(dataset) a traves de la card

    const productoGlobal = await obtenerProductosStore();
    //se almacena en una const productoGlobal todos los productos

    //se busca por id el producto y se deja guardado en producto
    const producto = productoGlobal.find(p => p.id === idProducto);
    
    // Comprobar si el elemento clickeado tiene la clase 'carrito-agregar'
    if (e.target.classList.contains('carrito-agregar')) {

        //llama a la funcion que recupera el estado actual del carro, los productos que ya se habian agregado
        const carrito = obtenerCarrito(); 

        //la funcion añade un producto y lo mete al arreglo
        agregarProductoAlCarrito(producto, carrito, 1);

        //actualiza el html con el producto recien agregado
        renderizarCarrito(carrito);
        spanContador.textContent = obtenerTotalCarrito();    
    }

    if (e.target.classList.contains('llamar')) {
        window.location.href = `producto.html?id=${producto.id}`;
    }

    
}








