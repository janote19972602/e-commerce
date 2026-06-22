export async function cargarNavbar() {

    const resul = await fetch('./componentes/navbar.html');

    if (!resul.ok)  throw new Error("Ocurrió un error en el navbar");  
    
    const html = await resul.text();
    return html;
    
}

export async function cargarMenuLateral(){

    const menu = await fetch('./componentes/carritoLateral.html');

    if (!menu.ok)  throw new Error("Ocurrió un error en el navbar");

    const html = await menu.text();
    return html;

}

