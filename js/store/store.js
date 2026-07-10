import { obtenerProductos } from "../api.js";

let productosCache = null;

export async function obtenerProductosStore() {

    let productos = [];
    
    if (productosCache) {
        return productosCache;
    }

    productos = await obtenerProductos();
    productosCache = productos;
    return productos;
    
}

