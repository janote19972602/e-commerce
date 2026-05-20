//encargado de obtener los datos esta es la base de todo
const urlProductos = 'https://dummyjson.com/products';

export function obtenerProductos() {

    return fetch(urlProductos)
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error("Ocurrió un error con los datos solicitados");
        }
        else{
            return respuesta.json();
        }
    })
    .then(datos =>{
        return datos.products;
    })
    
}