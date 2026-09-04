//FUNCION QUE ARMA LA PAGINA EL DISEÑO DEL DETALLE DEL PRODUCTO, CREA TODO
export function renderizarDetalleProducto(producto, arregloCarrito) {

    //buscar en el html con su id y se almacena en una const
    const productoGlobal = document.getElementById('detalleProducto');
    productoGlobal.innerHTML = '';

    let html = '';

    //TERCERA ESTRUCTURA DE HTML DONDE ME MUESTRA TODA LA INFORMACION DEL PRODUCTO ESCOGIDO
    html += `<div class="contenedor-producto" data-idproducto="${producto.id}">
                <div class="galeria-producto">
                    <img src="${producto.thumbnail}" class="imagen-principal-producto">
                </div>
                <div class="detalles-producto">
                    <span class="categoria-producto">${producto.tags[1]}</span>
                    <h1 class="producto-titulo">${producto.title}</h1>
                    <span class="marca-producto">${producto.brand}</span>
                    <div class="calificacion-producto">
                        <span>${'⭐'.repeat(Math.round(producto.rating))}</span> 
                        <span>${producto.discountPercentage}</span>
                    </div>
                    <div class="precio-producto">
                        <span class="producto-precio">${producto.price}</span>
                        <span class="descuento">-${producto.discountPercentage}</span>
                    </div>
                    <span class="descripcion">${producto.description}</span>

                    <div class="card-compra">
                        <span class="js-texto-cantidad"></span>
                        <div class="carrito-acciones">
                            <button class="btn-incrementar-cantidad">+</button>
                            <span class="producto-cantidad">1</span>
                            <button class="btn-decrementar-cantidad">-</button> 
                        </div>
                        
                        <button class="boton-agregar-producto">Agregar al carrito</button>
                        <span class="estado-producto">In stock ${producto.stock}</span>

                        
                    </div>  
                    <div class="lista">
                        <ul class="info-lista">
                            <li><strong>Sku:</strong> ${producto.sku}</li>
                            <li><strong>Shipping:</strong>${producto.shippingInformation}</li>
                            <li><strong>Warranty:</strong>${producto.warrantyInformation}</li>
                            <li><strong>Return Policy:</strong> ${producto.returnPolicy}</li>
                            <li><strong>Tags:</strong>${producto.tags}</li>
                            <li><strong>Ancho:</strong> ${producto.dimensions.width} cm</li>
                            <li><strong>Alto:</strong> ${producto.dimensions.height} cm</li>
                            <li><strong>Profundidad:</strong> ${producto.dimensions.depth} cm</li>
                        </ul>
                    </div>
                    <div class="seccion-de-reseñas">
                        <div class="reseña-tarjeta">
                            <div class="reseña-encabezamiento">
                                <span class="autor">${producto.reviews[0].reviewerName}</span>
                                <span class="estrellas">${'⭐'.repeat(Math.round(producto.reviews[0].rating))}</span>
                                <span class="reseña-comentario">${producto.reviews[0].comment}</span>
                                <span>${producto.reviews[0].date.slice(0, 10)}</span>
                            </div> 
                        </div>
                        <div class="reseña-tarjeta">
                            <div class="reseña-encabezamiento">
                                <span class="autor">${producto.reviews[1].reviewerName}</span>
                                <span class="estrellas">${'⭐'.repeat(Math.round(producto.reviews[1].rating))}</span>
                                <span class="reseña-comentario">${producto.reviews[1].comment}</span>
                                <span>${producto.reviews[1].date.slice(0, 10)}</span>
                            </div>
                        </div>
                        <div class="reseña-tarjeta">
                            <div class="reseña-encabezamiento">
                                <span class="autor">${producto.reviews[2].reviewerName}</span>
                                <span class="estrellas">${'⭐'.repeat(Math.round(producto.reviews[2].rating))}</span>
                                <span class="reseña-comentario">${producto.reviews[2].comment}</span>
                                <span>${producto.reviews[2].date.slice(0, 10)}</span>
                            </div>
                        </div>
                     </div>
                     <div class="tarjetaQr-producto">
                        <div class="tarjeta-qr">
                            <span>Codido Qr: <strong class="codigo"> ${producto.meta.barcode}</strong></span>
                            <img src="${producto.meta.qrCode}">
                            <span class="fecha">${producto.meta.createdAt.slice(0, 10)}</span>
                        </div>
                    </div>
                <div>
            </div>
    
                `

    //SE INSERTA AL HTML PARA QUE ASI SE PUEDA VER LA PAGINA
    productoGlobal.innerHTML = html;

}
