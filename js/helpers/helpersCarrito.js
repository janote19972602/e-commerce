import { obtenerProductosStore } from "../store/store";

export async function calcularTotalComprasCarrito(carrito) {
  // Sumamos todos los precios finales del arreglo
  const productos = await obtenerProductosStore();
  carrito.forEach(c => {

    const producto = productos.find(p=> p.id === c.idProducto);
    console.log(producto);
    
    
    
  });
  
}
