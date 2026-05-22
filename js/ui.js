import { obtenerTotalCarrito } from "./carrito.js";

//encargado de renderizar el html 
let productosGlobal = [];

//funcion que es exportada la cual se encarga solamente de dibujar la UI 
export function crearGrillaProductos(productos) {

    //se va a buscar por id a la grilla y se guarda en una const para despues ocuparla
    const grilla = document.getElementById('grillaProductos');

    //se limpia
    grilla.innerHTML = '';
    let html = ''; /*se decalara una let vacia para ahi guardar lo que se quiera dibujar en el html*/ 
 
    //se le hace un foreach al arreglo de productos y se va construyendo cada etiqueta con plantillas literales
    productos.forEach(producto =>{

        const rating = '⭐'.repeat(Math.round(producto.rating));

        //se dibuja la 
        html += `<div class="card" data-idproducto="${producto.id}">
                    <img src="${producto.thumbnail}"> 
                    <div class"info-producto">
                        <p class="card-titulo">${producto.title}</p>
                        <p class="card-categoria">${producto.category}</p>
                        <p class="card-precio">$${producto.price}</p>
                        <p class="card-rating">${rating}</p>
                    </div>
                    <div class="botones">
                        <button class="carrito-agregar">Agregar al carrito</button>
                        <button class="carrito-ver">Ver detalles</button>
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
        return;
    }

    listaCarrito.innerHTML = '';

    const arregloProductos = obtenerProductosGlobal();

    let html = '';

    arregloCarrito.forEach(carro => {

        const producto = arregloProductos.find(p => p.id === carro.idProducto);
        let totalProducto = (producto.price * carro.cantidad).toFixed(2);


        //construir dinamicamrnte el menu lateral de los productos
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

//creacion por DDE al boton "ver detalles" de la grilla de productos
// export function crearBotonVerDetalles(datosVerDetalles) {

    
//     const paginaVerDetalles = document.querySelectorAll('.carrito-ver');
//     paginaVerDetalles.innerHTML = '';

//     let html = '';

//     datosVerDetalles.forEach(detalle =>{

//         html += `<div class="pagina" data-idproducto="${detalle.id}">
//                     <img src="${detalle.thumbnail}"> 
//                 </div>

//     `
//         })
//         paginaVerDetalles.innerHTML = html;
// }
