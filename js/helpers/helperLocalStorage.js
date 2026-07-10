//esta funcion puede ser importada desde otro js y recibe un parametro carrito que es un arreglo de objetos
export function guardarCarrito(carrito) {
    
    //es la encargada de guardar los datos recibe 2 parametros,clave y el valor a guardar
    //JSON toma el arreglo y lo convierte en una cadena de texto
    localStorage.setItem('arregloCarrito', JSON.stringify(carrito));
    
}

export function obtenerCarrito() {

    const carrito = localStorage.getItem('arregloCarrito');
    if (carrito) {
        //se devuelve 
        return JSON.parse(carrito);
    }else{
        return [];
    }
}