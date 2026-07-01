import { obtenerTotalCarrito } from "./carrito.js";

//encargado de renderizar el html 
let productosGlobal = [];

//funcion que es exportada y la cual se encarga de dibujar la UI GRILLA DE PRODUCTOS, la pagina principal
export function crearGrillaProductos(productos) {

    //se va a buscar por id a la grilla y se guarda en una const para despues ocuparla
    const grilla = document.getElementById('grillaProductos');
    const cantidadProductosToolbar = document.getElementById('toolbarCantidadProductos');
    cantidadProductosToolbar.textContent = productos.length;

    //se limpia
    grilla.innerHTML = '';
    let html = ''; /*se decalara una let vacia para ahi guardar lo que se quiera dibujar en el html*/ 
 
    //se le hace un foreach al arreglo de productos y se va construyendo cada etiqueta con plantillas literales
    productos.forEach(producto =>{

        const rating = '⭐'.repeat(Math.round(producto.rating));

        //1 PRIMER DIBUJO DE UN HTML DINAMICAMENTE DONDE ESTAN LOS PRODUCTOS LA GRILLA
        //1 se dibuja la pagina web principal donde se encuentran los productos con su informacion
        html += `<div class="card" data-idproducto="${producto.id}">
                    <a href="producto.html?id=${producto.id}">
                        <img src="${producto.thumbnail}"> 
                    </a>
                    <div class"info-producto">
                        <p class="card-titulo">${producto.title}</p>
                        <p class="card-categoria">${producto.category}</p>
                        <p class="card-precio">$${producto.price}</p>
                        <p class="card-rating">${rating}</p>
                    </div>
                    <div class="boton-agregar">
                        <button class="carrito-agregar">Agregar al carrito</button>
                    </div>
                </div>` 
    })

    grilla.innerHTML = html;
}

export function establecerProductosGlobal(productos) {

    //contiene todos los productos
    productosGlobal = productos;
}
//por que no se le hizo un return a la variable "productosGlobal" en la funcion "establecerProductosGlobal"? y se hizo una funcion que si la retorna?
export function obtenerProductosGlobal() {

    //devuelve todos los productos del arreglo productosGlobal
    return productosGlobal;
    
}

function actualizarContadores() {

    document.getElementById('cantidadProductos').textContent = obtenerTotalCarrito();
    document.getElementById('contador').textContent = obtenerTotalCarrito();
    
}

export function renderizarCarrito(arregloCarrito) {

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
    const arregloProductos = obtenerProductosGlobal();
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
                            <div class="primera-parte">
                                <p class="titulo">${producto.title}</p>
                                <p class="totalProducto">$${totalProducto}</p>
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
    
}

//FUNCION QUE ARMA LA PAGINA EL DISEÑO DEL DETALLE DEL PRODUCTO, CREA TODO
export function renderizarDetalleProducto(producto,arregloCarrito) {

    //buscar en el html con su id y se almacena en una const
    const productoGlobal = document.getElementById('detalleProducto');
    productoGlobal.innerHTML = ''; 

    let html = ''; 

    //TERCERA ESTRUCTURA DE HTML DONDE ME MUESTRA TODA LA INFORMACION DEL PRODUCTO ESCOGIDO
    html+= `<div class="contenedor-producto" data-idproducto="${producto.id}">
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
                        <span class="precio">${producto.price}</span>
                        <span class="descuento">-10.48% OFF</span>
                    </div>
                    <span class="descripcion">${producto.description}</span>
                    <div class="caja-de-compra-producto">

                        <label>${producto.minimumOrderQuantity}</label>
                        
                        <div class="cantidad-selector">
                            <button class="btn-mas-producto">+</button>
                            <span class="cantidadDeProducto">1</span>
                            <button class="btn-menos-producto">-</button>
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

function renderizarComprasDeProductos(producto) {

    const productosComprados = document.getElementById('comprasDeProductos');
    productosComprados.innerHTML = '';

    let html = '';
    


    
}

//sort
function ordenarPreciosProducto(params) {

    
}