import { obtenerProductosStore } from "../store/store.js";
import { crearMapperProducto } from "../mappers/mapperProducto.js";/*aqui le hago un import*/ 
import { calcularTotalComprasCarrito } from "../helpers/helpersCarrito.js";
import { obtenerCarrito } from "../helpers/helperLocalStorage.js";

export async function renderizarCarritoPrincipal(arregloCarrito) {
    console.log("hoooo");

    const productosComprados = document.getElementById('carrito');
    const resumen = document.getElementById('resumen');
    productosComprados.innerHTML = '';

    const arregloProductosComprados = await obtenerProductosStore();

    let html = '';

    arregloCarrito.forEach(productoCarrito => {

        const producto = arregloProductosComprados.find(pro => pro.id === productoCarrito.idProducto);

        //aqui asigno un const con la palabra resultado y le paso la funcion que calcula todo con el producto
        const mapperProducto = crearMapperProducto(producto, productoCarrito);

        html += `
       
        <div class="carrito-item">
            <img src="${mapperProducto.imagenProducto}" class="producto-imagen">
            <div class="producto-info">
                <h3 class="nombre-producto">${mapperProducto.tituloProducto}</h3>
                <span class="marca-producto"><span>${mapperProducto.marcaProducto}</span></span>
                <span class="categoria-producto"><span>${producto.category}</span></span>
            </div>
            <div class="producto-precio">
                <div class="precio">
                    <span class="precio-final">$${mapperProducto.precioFinal.toFixed(2)}</span>
                    <span class="precio-descuento">${mapperProducto.descuentoDeProducto.toFixed(2)}%</span>
                </div>
                <span>$${mapperProducto.precioOriginal.toFixed(2)}</span>
            </div>
            <div class="producto-botones">
                <span class="producto-puntitos" id="miBoton">⋮</span>
                <div class="card-compra"> 
                    <div class="carrito-acciones">
                        <button class="btn-incrementar-cantidad">+</button>
                        <span class="producto-cantidad">${mapperProducto.cantidad}</span>
                        <button class="btn-decrementar-cantidad">-</button>
                    </div>
                </div>
            </div>
         </div>
        `
    })

    const total = await calcularTotalComprasCarrito(obtenerCarrito());

    // 2. Creamos el resumen final una sola vez fuera del forEach
            const htmlResumenFinal = `
            <div class="resumen-compra">
                <div class="resumen-cabecera">
                    <span>Productos(${0})</span>
                    <span>$${150000}</span>
                </div>
                <div class="resumen-acordeon">
                    <span>Descuentos(${2})</span>
                    <span>$${150000}</span>
                </div>
                <div class="resumen-total">
                    <span>Total</span>
                    <span>$${150000}</span>
                </div>
                <button id="btnCompra">Continuar compra</button>
            </div>
`;

    productosComprados.innerHTML = html;
    resumen.innerHTML = htmlResumenFinal;
}
