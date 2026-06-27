const precioBase = 400000;
let cantidad = 0;

// CLAVE: Esto obliga al navegador a esperar que cargue todo el HTML antes de inyectar el precio inicial
window.onload = function() {
    document.querySelector('.precio-inicial').innerHTML = precioBase;
    document.querySelector('.valor-total').innerHTML = 0;
};

// Estas funciones se ejecutan directo al presionar los atributos onclick del HTML
function aumentarCantidad() {
    cantidad++;
    document.querySelector('.cantidad').innerHTML = cantidad;
    document.querySelector('.valor-total').innerHTML = cantidad * precioBase;
}

function disminuirCantidad() {
    if (cantidad > 0) {
        cantidad--;
        document.querySelector('.cantidad').innerHTML = cantidad;
        document.querySelector('.valor-total').innerHTML = cantidad * precioBase;
    }
}