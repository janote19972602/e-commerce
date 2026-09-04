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
    productos.forEach(producto => {

        const rating = '⭐'.repeat(Math.round(producto.rating));

        //1 PRIMER DIBUJO DE UN HTML DINAMICAMENTE DONDE ESTAN LOS PRODUCTOS LA GRILLA
        //1 se dibuja la pagina web principal donde se encuentran los productos con su informacion
        html += `<div class="card" data-idproducto="${producto.id}">
                    <a href="producto.html?id=${producto.id}">
                        <img src="${producto.thumbnail}"> 
                    </a>
                    <div class"info-producto">
                        <p class="card-titulo">${producto.title}</p>
                        <span class="card-categoria">${producto.category}</span>
                        <p class="card-rating">${rating}</p>
                    </div>
                    <div class="producto-precio">
                        <div class="precio-final-descuento">
                            <span class="precio-final">${(producto.price - (producto.price * producto.discountPercentage / 100)).toFixed(2)}</span>
                            <span class="precio-descuento">-${producto.discountPercentage}</span>
                        </div>
                        <span class="card-precio">$${producto.price}</span>
                    </div>
                    <div class="boton-agregar">
                        <button class="carrito-agregar">Agregar al carrito</button>
                    </div>
                </div>`
    })

    grilla.innerHTML = html;
}




