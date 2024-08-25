document.addEventListener('DOMContentLoaded', function(){

    const contenedorBoton= document.querySelector('.Contenedor-boton');
    contenedorBoton.addEventListener('click', function(){
        alert('Hola! Soy el div');
    })
const boton= document.getElementById('Boton-Saludo');
boton.addEventListener('click', function(event){
    event.stopPropagation();
    alert('Hola');

});
});