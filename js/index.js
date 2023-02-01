let seccion = document.getElementById("Section");

//Load the page 'Contacto' first
window.onload = function(){
    document.getElementById('ContactoPage').click();
}
function Contactos(){
    fetch('Contactos.html')
    .then(response => response.text())
    .then(data => {
        seccion.innerHTML = data;
        ScrollSection();
    })
    .catch(error => console.log(error));
}
function Contacto(){
    fetch('Contacto.html')
    .then(response => response.text())
    .then(data => {
        seccion.innerHTML = data;
        ScrollSection();
    })
    .catch(error => console.log(error));
}