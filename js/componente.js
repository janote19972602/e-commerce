window.addEventListener('load', init);

function init() {
    renderizarNavbar();
}

function renderizarNavbar() {

    fetch('./componentes/navbar.html')
    .then(resul=> {
        if (!resul.ok) {
            throw new Error("No se pudo cargar el componente navbar");            
        }
        return resul.text();
    })
    .then(html => {
        document.getElementById('navbar').innerHTML = html;        
    })    
}