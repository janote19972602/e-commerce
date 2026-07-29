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




