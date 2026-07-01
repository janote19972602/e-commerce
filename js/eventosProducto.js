export function crearEventosProducto() {
    
    document.getElementById('detalleProducto').addEventListener('click', manejarEventosProducto);

    

}

function manejarEventosProducto(e) {

    console.log(e.target);

    //boton mas +
    if (e.target.classList.contains('btn-mas-producto')) {
        console.log("hola");
        
        
    }

    //boton -
    if (e.target.classList.contains('btn-menos-producto')) {
        console.log("chao");
        
        
    }

    if (e.target.classList.contains('boton-agregar-producto')) {
        console.log("adios");
        
    }

    
    
}








