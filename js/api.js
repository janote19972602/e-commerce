//encargado de obtener los datos esta es la base de todo
const urlProductos = 'https://dummyjson.com/products?limit=0';

export async function obtenerProductos() {

    const respuesta = await fetch(urlProductos);

    if (!respuesta.ok) {
        throw new Error("Ocurrió un error con los datos solicitados");
    }else{
        const datos = await respuesta.json();
        return datos.products;
    }
}

//ESA ES LLAMADA Y UTILIZADA EN LA CONEXION DONDE SE CONSUMEN JSON, TEXTO CON UN
//ID EN ESPECIFICO
// export function obtenerProductoPorId(id){

//     return fetch(`https://dummyjson.com/products/${id}`)
//     .then(res => {
//         if(!res.ok){
//             throw new Error('Error al obtener producto');
//         }
//         return res.json();
//     })
// }


//se declara una funcion asincrona(permite ejecutar tareas que toman tiempo) y export sirve para llamarla de otro modulo js
//y es async ya que dentro se usaran datos que toman tiempo
export async function obtenerProductoPorId(id) {

    //1 se realiza la peticion a la url por el id con fetch guardandola en una const y el await dice "detente aqui y espera a que el servidor responda antes de continuar"
    const respuesta = await fetch(`https://dummyjson.com/products/${id}`);

    //2 pregunta si la respuesta HTTP fue exitosa, si hay un error en la peticion lanza un error
    if (!respuesta.ok) {/*si NO es ok*/ 
        //interrumpe el flujo y lanza un error
        throw new Error("Error al obtener el producto");
    }
    //3 Convierte el cuerpo de la respuesta a formato JSON y lo retorna como resultado final de la función
    return await respuesta.json();
}