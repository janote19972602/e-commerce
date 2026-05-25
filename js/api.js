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
//ESA ES LLAMADA Y UTILIZADA EN LA CONEXION DONDE SE CONSUMEN JSON, TEXTO CON UN
//ID EN ESPECIFICO
export function obtenerProductoPorId(id){

    return fetch(`https://dummyjson.com/products/${id}`)
    .then(res => {
        if(!res.ok){
            throw new Error('Error al obtener producto');
        }
        return res.json();
    })
}
