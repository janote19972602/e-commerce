export async function cargarNavbar() {

    const resul = await fetch('./componentes/navbar.html');

    if (!resul.ok)  throw new Error("Ocurrió un error en el navbar");  
    
    const html = await resul.text();
    return html;
    
}