//encargado de obtener los datos esta es la base de todo
const urlProductos = 'https://dummyjson.com/products?limit=0';

export async function obtenerProductos() {

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

    // const resul = await fetch(urlProductos);
    // if (!resul.ok) throw new Error("error...");
    // const data = await resul.json();
    // return data.products;

    
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

export function name(params) {
    
}
