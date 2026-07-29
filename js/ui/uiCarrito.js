import { obtenerTotalCarrito } from "../carrito.js";
import { guardarCarrito } from "../helpers/helperLocalStorage.js";
import { obtenerProductosStore } from "../store/store.js";

function actualizarContadores() {

    document.getElementById('cantidadProductos').textContent = obtenerTotalCarrito();
    document.getElementById('contador').textContent = obtenerTotalCarrito();

}

export async function renderizarCarrito(arregloCarrito) {

    //se debe crear dinamicamente el contenido del menu lateral
    const listaCarrito = document.getElementById('listaCarrito');

    if (arregloCarrito.length === 0) {
        listaCarrito.innerHTML = '<p class="mensaje-carrito">Tu carrito está vacío!</p>'
        actualizarContadores();
        //poner invisible el boton ver carritos
        const btnVerCarrito = document.getElementById('btnVerCarrito');
        btnVerCarrito.classList.add('ocultar');
        return;
    }

    listaCarrito.innerHTML = '';
    const arregloProductos = await obtenerProductosStore();
    let html = '';

    arregloCarrito.forEach(carro => {

        const producto = arregloProductos.find(p => p.id === carro.idProducto);
        let totalProducto = (producto.price * carro.cantidad).toFixed(2);

        //2 SEGUNDA ESTRUCTURA HTML PARA VER LOS PRODUCTOS ELEGIDOS
        //construir dinamicamrnte el menu lateral de los productos, la informacion de cada uno, muestra la info y se puede decidir si se compra o no
        html += `<div class="carrito-producto" data-idproducto="${producto.id}">
                    <div class="contenedor-producto">  
                        <img src="${producto.thumbnail}"> 
                        <div class="informacion-producto">
                            <div class="titulo-total-producto">
                                <p class="titulo">${producto.title}</p>
                                <p class="total-producto">$${totalProducto}</p>
                            </div>
                            <div class="precio-contador-contenedor">
                                <p class="precio">$${producto.price}</p>
                                <div class="segunda-parte">
                                    <div class="contenedor-botones">
                                        <button class="btn-mas">+</button>
                                        <p>${carro.cantidad}</p>
                                        <button class="btn-menos">-</button>
                                    </div>
                                    <div class="basurero-icono">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                `
    })
    listaCarrito.innerHTML = html;
    actualizarContadores();
    guardarCarrito(arregloCarrito);
}
