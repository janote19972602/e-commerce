import { obtenerProductosStore } from "../store/store.js";
import { crearMapperProducto } from "../mappers/mapperProducto.js";/*aqui le hago un import*/ 

export async function renderizarCarritoPrincipal(arregloCarrito) {
    console.log("hoooo");

    const productosComprados = document.getElementById('carrito');
    const resumen = document.getElementById('resumen');
    productosComprados.innerHTML = '';

    const arregloProductosComprados = await obtenerProductosStore();
    console.log(arregloProductosComprados);

    let html = '';

    arregloCarrito.forEach(productoCarrito => {

        const producto = arregloProductosComprados.find(pro => pro.id === productoCarrito.idProducto);

        //aqui asigno un const con la palabra resultado y le paso la funcion que calcula todo con el producto
        const mapperProducto = crearMapperProducto(producto, productoCarrito);

        html += `
       
        <div class="carrito-item">
            <img src="${mapperProducto.imagenProducto}" class="producto-imagen">
            <div class="producto-info">
                <h3 class="nombre-producto">${producto.title}</h3>
                <span class="marca-producto"><span>${producto.brand}</span></span>
                <span class="categoria-producto"><span>${producto.category}</span></span>
            </div>
            <div class="producto-precio">
                <div class="precio">
                    <span class="descuento">${mapperProducto.precioFinal.toFixed(2)}</span>
                    <span>${mapperProducto.descuentoDeProducto.toFixed(2)}</span>
                </div>
                <span>$${mapperProducto.precioOriginal.toFixed(2)}</span>
            </div>
            <div class="producto-botones">
                <div class="contador-mas-menos">
                    <button class="btn">-</button>
                    <span class="numero">1</span>
                    <button class="btn">+</button>
                </div>
            </div>
         </div>
        `
    })

    // 2. Creamos el resumen final una sola vez fuera del forEach
            const htmlResumenFinal = `
            <div class="resumen-compra">
                <div class="resumen-cabecera">
                    <span>Productos(${2})</span>
                    <span>$${150000}</span>
                </div>
                <div class="resumen-acordeon">

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
