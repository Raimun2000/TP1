// Funcionalidad Javascript para mantener el año en curso siempre actualizado.
var today = new Date();
var year = today.getFullYear();
document.getElementById("anio_actual").textContent = year;

const logo = document.querySelector('.logoFijo');
const overlay = document.querySelector('.overlay');
const contactLink = document.querySelector('#contactLink');

logo.addEventListener('mouseenter', function() {
    overlay.style.display = 'block';
});

logo.addEventListener('mouseleave', function() {
    setTimeout(function() {
        overlay.style.display = 'none';
    }, 1000); // Cambia el tiempo de espera según sea necesario (en milisegundos)
});

overlay.addEventListener('mouseenter', function() {
    overlay.style.display = 'block';
});

overlay.addEventListener('mouseleave', function() {
    overlay.style.display = 'none';
});

