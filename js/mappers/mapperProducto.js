//creo la funcion que se encarga de calcular los descuentos
export function crearMapperProducto(producto, productoCarrito) {
  const precioProducto = producto.price;
  const descuentoProducto = producto.discountPercentage;
  
  //aqui hago el calculo con las const creadas
  const precioProductoConDescuento = precioProducto - (precioProducto * descuentoProducto / 100);

  //aqui solamente las devuelvo con un return asignandoles un nombre y ocupo el metodo para mostrar 2 decimales
  return {
    precioFinal: precioProductoConDescuento,
    precioOriginal: precioProducto,
    descuentoDeProducto: descuentoProducto,
    cantidad: productoCarrito.cantidad,
    imagenProducto: producto.thumbnail,
    tituloProducto: producto.title,
    marcaProducto: producto.brand,
    
  };
}
